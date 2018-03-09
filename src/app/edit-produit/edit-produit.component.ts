import { Component, OnInit } from '@angular/core';
import { Produit } from '../../model/model.produit';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { ProduitsService } from '../../services/produits.service';
import { RouterModule,Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {
  produit:Produit=new Produit();
  reference:number;
  mode:number=1;
  constructor(public http:Http,public produitsService:ProduitsService,
                  public activatedRoute:ActivatedRoute,public router:Router) { 
                  }

  ngOnInit() {
  this.reference=+this.activatedRoute.snapshot.params['reference'];
  this.produitsService.getProduitByReference(this.reference).
  subscribe(data=>{this.produit=data;
      },
    
      err=>{
    console.log(err);
  })
}

  modifierProduit(){
      this.produitsService.modifierProduit(this.produit)
      .subscribe(data=>{
        console.log(data);
        alert("Mise à Jour effectué avec Succés");
        this.router.navigate(['produitsParMc']);
      },err=>{
        console.log(err);
        alert("Probléme de Mise à Jour");
      })
  }

}
