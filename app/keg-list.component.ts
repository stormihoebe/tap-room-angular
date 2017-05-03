import {Component, Input, Output, EventEmitter} from '@angular/core';
import  {Keg}from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <select (change)="onChange($event.target.value)" class="form-control selectType">
    <option value="AllKegs" selected="selected">All Kegs</option>
    <option value="Porter">Porter</option>
    <option value="Stout" >Stout</option>
    <option value="Ale" >Ale</option>
    <option value="Lager" >Lager</option>
    <option value="Pilsner" >Pilsner</option>
    <option value="MaltLiqour" >Malt Liqour</option>
    <option value="Other" >Other</option>
  </select>

  <div class="row" >
  <br>
      <div class="col-md-4" *ngFor="let currentKeg of childKegList | type:filterByType">
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
          <p>Pints Remaining: {{currentKeg.quantity}}</p>
          <h4>
            <span [class]="abvColor(currentKeg)"> ABV: {{currentKeg.abv}}%</span> <span class="pull-right">$ {{currentKeg.price}}</span>
          </h4>
          <br>
           <button class="btn btn-default"  (click)="editButtonHasBeenClicked(currentKeg)">Edit Details</button>
           <button class="btn btn-default pull-right"  (click)="sellPint(currentKeg)">Pint Purchase</button>

         </div>
       </div>
     </div>
   </div>
  `

})

export class KegListComponent{
  @Input()childKegList: Keg[];
  @Output()clickSender= new EventEmitter();

  sellPint(keg: Keg){
    keg.quantity -= 1;
  }

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  abvColor(currentKeg){
    if(currentKeg.abv === 0){
      return "bg-info";
    } else if(currentKeg.abv < 4){
      return "bg-success";
    }else if(currentKeg.abv < 6){
      return "bg-warning";
    } else {
      return "bg-danger"
    }
  }
  filterByType: string = "AllKegs";
  onChange(optionFormMenu) {
    this.filterByType = optionFormMenu;
  }

}
