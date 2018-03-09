import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Produit } from "../model/model.produit";


@Injectable()
export class ProduitsService{

    constructor(public http:Http) { }
  
getProduits(){
        return this.http.get("http://localhost:8080/all")
        .map(resp=>resp.json());
}

getProduitByReference(reference:number){
        return this.http.get("http://localhost:8080/getProduit/"+reference)
        .map(resp=>resp.json());
}

getProduitsParMc(motCle:string,pageNumber:number){
        return this.http.get("http://localhost:8080/produitsParMotCle?motCle="+motCle+"&page="+pageNumber)
        .map(resp=>resp.json());
}

addProduit(produit:Produit){
   
         return this.http.post("http://localhost:8080/save?designation="+produit.designation+
         "&prix="+produit.prix+
         "&date="+produit.date
         ,produit)
        .map(resp=>resp.json());
}

modifierProduit(produit:Produit){
        return this.http.put("http://localhost:8080/updateProduit/"+produit.reference
        ,produit)
       .map(resp=>resp.json());
}

supprimerProduit(reference:number){
        return this.http.delete("http://localhost:8080/deleteProduit/"+reference)
       .map(resp=>resp.json());
}

}

