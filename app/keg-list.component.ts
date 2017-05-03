import {Component, Input, Output, EventEmitter} from '@angular/core';
import  {Keg}from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div class="row" >
      <div class="col-md-4" *ngFor="let currentKeg of childKegList">
       <div class="panel panel-default">
         <div class="panel-heading">
           <h4>{{currentKeg.name}} ({{currentKeg.type}})</h4>
        </div>
        <div class="panel-body">
          <img src={{currentKeg.image}} width="100%">
          <h4>{{currentKeg.brand}}</h4>
          <p>
            {{currentKeg.description}}
          </p>
          <h4>
            ABV: {{currentKeg.abv}}% <span class="pull-right">$ {{currentKeg.price}}</span>
          </h4>
          <br>
           <button class="btn btn-default"  (click)="editButtonHasBeenClicked(currentKeg)">Edit Details</button>
         </div>
       </div>
     </div>
   </div>
  `

})

export class KegListComponent{
  @Input()childKegList: Keg[];
  @Output()clickSender= new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
}
