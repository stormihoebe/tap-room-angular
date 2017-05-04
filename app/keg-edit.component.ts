import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-edit',
  template: `
    <div *ngIf="childSelectedKeg">
      <div class="well" id="editKegForm">
        <h3>Edit Keg {{childSelectedKeg.name}} </h3>
        <div class="form-group">
          <label>Keg Name:</label>
          <input [(ngModel)]="childSelectedKeg.name" class="form-control">
        </div>
        <div class="form-group">
          <label>Brand:</label>
          <input [(ngModel)]="childSelectedKeg.brand" class="form-control">
        </div>
        <div class="form-group">
          <label>Type:</label>
          <input [(ngModel)]="childSelectedKeg.type" class="form-control">
        </div>
        <div class="form-group">
          <label>Description:</label>
          <input [(ngModel)]="childSelectedKeg.description" class="form-control">
        </div>
        <div class="form-group">
          <label>Price:</label>
          <input [(ngModel)]="childSelectedKeg.price" class="form-control">
        </div>
        <div class="form-group">
          <label>ABV:</label>
          <input [(ngModel)]="childSelectedKeg.abv" class="form-control">
        </div>
        <div class="form-group">
          <label>Quantity Remaining:</label>
          <input [(ngModel)]="childSelectedKeg.quantity" class="form-control">
        </div>
        <div class="form-group">
          <label>Image Url:</label>
          <input [(ngModel)]="childSelectedKeg.image" class="form-control">
        </div>
        <button (click)="doneButtonClicked()" class="btn btn-default">Submit Changes</button>
      </div>
    </div>
    `
  })

  export class KegEditComponent {
    @Input() childSelectedKeg: Keg;
    @Output() doneButtonClickedSender = new EventEmitter();

    doneButtonClicked() {
      this.doneButtonClickedSender.emit();
    }
  }
