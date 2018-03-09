import { Component, OnInit } from '@angular/core';
import { Produit } from '../../model/model.produit';
import { Pays } from '../../model/model.pays';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { ProduitsService } from '../../services/produits.service';
import { PaysService } from '../../services/pays.service';

@Component({
  selector: 'app-produits-new',
  templateUrl: './produits-new.component.html',
  styleUrls: ['./produits-new.component.css']
})
export class ProduitsNewComponent implements OnInit {

  produit:Produit = new Produit();
  mode:number=1;
  comboPays:Pays;
  constructor(public http:Http,public produitsService:ProduitsService,public paysService:PaysService) { }

  ngOnInit() {
    
    this.paysService.getPays()
    .subscribe(data=>{
      this.comboPays = data;
    },err=>{
      console.log(err);
    })
  }

  affichePays(){
    this.paysService.getPays()
    .subscribe(data=>{
      this.comboPays = data;
    },err=>{
      console.log(err);
    })
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
