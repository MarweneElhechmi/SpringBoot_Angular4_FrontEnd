import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { AboutComponent } from './about/about.component';
import { ProduitsService } from '../services/produits.service';
import { ProduitsMcComponent } from './produits-mc/produits-mc.component';
import { ProduitsNewComponent } from './produits-new/produits-new.component';
import { NouveauProduitValidationComponent } from './nouveau-produit-validation/nouveau-produit-validation.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { PaysNewComponent } from './pays-new/pays-new.component';
import { PaysService } from '../services/pays.service';
import { LstProduitMcComponent } from './lst-produit-mc/lst-produit-mc.component';


const appRoutes : Routes=[

  {path:'about',component:AboutComponent},
  {path:'produits',component:ProduitsComponent},
  {path:'produitsParMc',component:ProduitsMcComponent},
  {path:'lstproduits',component:LstProduitMcComponent},
  {path:'produitsNew',component:ProduitsNewComponent},
  {path:'produitsNew/:reference',component:ProduitsNewComponent},
  {path:'paysNew',component:PaysNewComponent},
  {path:'validationProduit',component:NouveauProduitValidationComponent},
  {path:'editProduit',component:EditProduitComponent},
  {path:'editProduit/:reference',component:EditProduitComponent},
  {path:'',redirectTo:'/about',pathMatch:'full'}
  ];
  
@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    AboutComponent,
    ProduitsMcComponent,
    ProduitsNewComponent,
    NouveauProduitValidationComponent,
    EditProduitComponent,
    PaysNewComponent,
    LstProduitMcComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpModule,FormsModule
  ],
  providers: [ProduitsService,PaysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
