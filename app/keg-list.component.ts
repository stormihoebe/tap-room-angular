import {Component, Input, Output, EventEmitter} from '@angular/core';
import  {Keg}from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div class="kegListDiv" *ngFor="let currentKeg of childKegList">
    <p>
      {{currentKeg.name}}<button class="btn btn-default"  (click)="editButtonHasBeenClicked(currentKeg)">Edit Details</button>
    </p>
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
