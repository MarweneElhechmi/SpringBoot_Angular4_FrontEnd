import { Component, OnInit } from '@angular/core';
import { Pays } from '../../model/model.pays';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { PaysService } from '../../services/pays.service';

@Component({
  selector: 'app-pays-new',
  templateUrl: './pays-new.component.html',
  styleUrls: ['./pays-new.component.css']
})
export class PaysNewComponent implements OnInit {
  pays:Pays = new Pays();
  mode:number=1;
  constructor(public http:Http,public paysService:PaysService) { }

  ngOnInit() {
  }

  ajoutPays(){
    this.paysService.addPays(this.pays).subscribe(data=>{
      console.log(data)
      this.pays=data;
      this.mode=2;
    }
    ,err=>{
      console.log(err);
    })
  }

}
