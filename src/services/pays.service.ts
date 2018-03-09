import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Pays } from "../model/model.pays";


@Injectable()
export class PaysService{

    constructor(public http:Http) { }
  


addPays(pays:Pays){
   
         return this.http.post("http://localhost:8080/pays?paysName="+pays.paysName+
         "&libelle="+pays.libelle
         ,pays)
        .map(resp=>resp.json());
}

getPays(){

     return this.http.get("http://localhost:8080/affichePays")
        .map(resp=>resp.json());

}
}

