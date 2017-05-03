import {Component, Output, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-low',
  template:
  `<h4>Kegs are low </h4>
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
          <h4>
            ABV: {{currentKeg.abv}}% <span class="pull-right">$ {{currentKeg.price}}</span>
          </h4>
          <br>
         </div>
       </div>
     </div>
   </div>`

})

export class KegLowComponent {
    @Input()childKegList: Keg[];

}
