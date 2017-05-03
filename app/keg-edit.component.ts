import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-edit',
  template: `
    <div>
      <div *ngIf="childSelectedKeg">
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
        <button (click)="doneButtonClicked()">Submit Changes</button>
      </div>
    </div>
    `
  })

  export class EditKegComponent {
    @Input() childSelectedKeg: Keg;
    @Output() doneButtonClickedSender = new EventEmitter();

    doneButtonClicked() {
      this.doneButtonClickedSender.emit();
    }
  }
