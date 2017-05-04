import {Component, Input, Output, EventEmitter} from '@angular/core';
import  {Keg} from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <select (change)="onChange($event.target.value)" class="form-control selectType">
    <optgroup class="black">
      <option value="AllKegs" selected="selected">All Kegs</option>
      <option value="Porter">Porter</option>
      <option value="Stout" >Stout</option>
      <option value="Ale" >Ale</option>
      <option value="Lager" >Lager</option>
      <option value="Pilsner" >Pilsner</option>
      <option value="MaltLiqour" >Malt Liqour</option>
      <option value="Other" >Other</option>
    </optgroup>
  </select>



  <div class="row" >
  <br>
    <div class="col-md-4 cards" *ngFor="let currentKeg of childKegList | type:filterByType">
      <div class="hover-fold">
      <br>
        <h4>{{currentKeg.name}} ({{currentKeg.type}})</h4>
        <br>
        <div class="cardButtonRow">
          <button class="btn btn-default"  (click)="editButtonHasBeenClicked(currentKeg)">Edit Details</button>
          <div class="pull-right form-group">
          <select (change)="onChangePurchase($event.target.value, currentKeg)" class="form-control">
            <option value="Pint" selected="selected">Pint</option>
            <option value="Growler">Growler</option>
            <option value="LargeGrowler">Large Growler</option>
            <option value="Keg">Remaining Keg</option>
          </select>
         </div>
       </div>
        <div class="top">
          <div class="front face"><img src={{currentKeg.image}} width="100%"></div>
          <div class="back face">
            <h4>{{currentKeg.brand}}</h4>
            <p>
            {{currentKeg.description}}
            </p>
            <p>Pints Remaining: {{currentKeg.quantity}}</p>
            <h4 id="abvH4">
            <span [class]="abvColor(currentKeg)"> ABV: {{currentKeg.abv}}%</span> <span class="pull-right">$ {{currentKeg.price}}</span>
            </h4>

           </div>
          </div>
         </div>
        </div>
       </div>
  `

})

export class KegListComponent{
  @Input()childKegList: Keg[];
  @Output()clickSender= new EventEmitter();

  onChangePurchase(size: string, keg: Keg){
    if (size === "Pint"){
      keg.quantity -= 1;
    } else if( size === "Growler"){
      keg.quantity -= 2;
    } else if (size ==="LargeGrowler") {
      keg.quantity -= 4;
    } else{
      keg.quantity = 0;
    }
  }

  sellPint(keg: Keg){
    keg.quantity -= 1;
  }

  purchaseGrowler(growler: Keg){
    growler.quantity -= 2;
  }

  purchaseLargeGrowler(growler: Keg){
    growler.quantity -= 4;
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
