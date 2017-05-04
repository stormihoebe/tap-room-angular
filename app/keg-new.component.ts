import {Component, Output, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-new',
  template:
  `<button (click)="newButtonClicked()" class="btn btn-info">Add Keg</button>
  <div *ngIf="addNewKeg">
    <form class="well" id="addNewForm">
      <div class="form-group">
        <label>Keg Name:</label>
        <input #newName class="form-control">
      </div>
      <div class="form-group">
        <label>Brand:</label>
        <input #newBrand class="form-control">
      </div>
      <div class="form-group">
        <label>Type:</label>
        <input #newType class="form-control">
      </div>
      <div class="form-group">
        <label>Description:</label>
        <input #newDescription class="form-control">
      </div>
      <div class="form-group">
        <label>Price:</label>
        <input #newPrice class="form-control">
      </div>
      <div class="form-group">
        <label>ABV:</label>
        <input #newAbv class="form-control">
      </div>
      <div class="form-group">
        <label>Quantity Remaining:</label>
        <input #newQuantity class="form-control">
      </div>
      <div class="form-group">
        <label>Image URl:</label>
        <input #newImage class="form-control">
      </div>
      <button class="btn btn-default" (click)="submitForm(newName.value, newBrand.value, newType.value, newDescription.value, newPrice.value, newAbv.value, newQuantity.value, newImage.value); newDescription.value=''; addNewKeg=false;">Add</button>
  </form>
</div>
`
})

export class KegNewComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm( name: string,  brand: string,  type: string,  description: string,  price: string,  abv: string,  quantity: string, image: string){
    if (image === "") {
      image = "http://vignette3.wikia.nocookie.net/simpsons/images/f/f7/Duff_Beer.png/revision/latest?cb=20130915031534";
    }
    var newKegToAdd: Keg = new Keg (name, brand, type, description, parseInt(price), parseInt(abv), parseInt(quantity), image);
    this.newKegSender.emit(newKegToAdd);
  }

  addNewKeg: boolean = false;

  newButtonClicked() {
    this.addNewKeg = true;
  }
}
