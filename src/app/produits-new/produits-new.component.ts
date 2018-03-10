import { Component, OnInit } from '@angular/core';
import { Produit } from '../../model/model.produit';
import { Pays } from '../../model/model.pays';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { ProduitsService } from '../../services/produits.service';
import { PaysService } from '../../services/pays.service';
import { NgIf } from '@angular/common/src/directives';
import { RouterModule,Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produits-new',
  templateUrl: './produits-new.component.html',
  styleUrls: ['./produits-new.component.css']
})
export class ProduitsNewComponent implements OnInit {

  produit:Produit = new Produit();
  mode:number;
  comboPays:Pays;
  constructor(public http:Http,public produitsService:ProduitsService,public paysService:PaysService,
    public activatedRoute:ActivatedRoute) { }
  reference:number;

  ngOnInit() {
    
    this.paysService.getPays()
    .subscribe(data=>{
      this.comboPays = data;
    },err=>{
      console.log(err);
    })
    
    if (this.reference!=null) {
   this.mode=3;
   this.reference=+this.activatedRoute.snapshot.params['reference'];
    this.produitsService.getProduitByReference(this.reference).
    subscribe(data=>{this.produit=data;
        },
      
        err=>{
      console.log(err);
    })
   
    } else {
      this.mode=1;
    }
  }

  ajoutProduit(){
    this.produitsService.addProduit(this.produit).subscribe(data=>{
      console.log(data)
      this.produit=data;
      this.mode=2;
    }
    ,err=>{
      console.log(err);
    })
  }

}
