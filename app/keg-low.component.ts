import {Component, Input, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-low',
  template:
  `<h1>Fill These Kegs</h1>
  <div class="row" >
      <div class="col-md-4" *ngFor="let currentKeg of childKegList | emptiness">
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
          <h4 id="abvH4">
            <span> ABV: {{currentKeg.abv}}%</span> <span class="pull-right">$ {{currentKeg.price}}</span>
          </h4>
          <br>
          <br>
          <button class="btn btn-danger" (click)="fillKeg(currentKeg)">Fill Keg</button>
         </div>
       </div>
     </div>
   </div>`

})

export class KegLowComponent {
    @Input()childKegList: Keg[];

    fillKeg(keg){
      keg.quantity = 124;
    }
}
