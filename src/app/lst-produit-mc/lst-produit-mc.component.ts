import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { ProduitsService } from '../../services/produits.service';
import { RouterModule,Router } from '@angular/router';
import { Produit } from '../../model/model.produit';

@Component({
  selector: 'app-lst-produit-mc',
  templateUrl: './lst-produit-mc.component.html',
  styleUrls: ['./lst-produit-mc.component.css']
})
export class LstProduitMcComponent implements OnInit {


  pageProduits:any;
  motCle:string="";
  currentPage:number=0;
  pagination:Array<number>;

  constructor(public http:Http,public produitsService:ProduitsService,public router:Router) { }

  mode:number;
  
  ngOnInit() {
  
  }

  doSearch(){
    this.produitsService.getProduitsParMc(this.motCle,this.currentPage)
    .subscribe(data=>{
      this.pageProduits = data;
      this.pagination=new Array(data.totalPages)
    },err=>{
      console.log(err);
    })
  }

  Chercher(){

    this.doSearch();

  }

  gotoPage(i:number){

    this.currentPage=i;
    this.doSearch();
  }

  onEditProduit(reference:number){
    this.router.navigate(['/editProduit',reference]);
  }

  EditProduit(reference:number){
    
    this.router.navigate(['/produitsNew',reference]);
  
  }

  onDeleteProduit(produit:Produit){
    let confirm=window.confirm("Est-vous sûre de vouloir supprimer ce produit");
    if(confirm==true){
    this.produitsService.supprimerProduit(produit.reference)
    .subscribe(data=>{
      this.pageProduits.content.splice(

        this.pageProduits.content.indexOf(produit),1

      );
      alert("Produit Supprimé")
    },err=>{
      console.log(err);
      alert("Erreur! Produit non supprimé");
    })
  }
    this.router.navigate(['produitsParMc']);
  }

  }
