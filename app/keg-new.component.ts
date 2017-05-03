import {Component, Output, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-new',
  template:
  `<h3> Add Keg </h3>
  <form>
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
    <button (click)="submitForm(newName.value, newBrand.value, newType.value, newDescription.value, newPrice.value, newAbv.value, newQuantity.value, newImage.value); newDescription.value='';">Add</button>
</form>
`
})

export class KegNewComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm( name: string,  brand: string,  type: string,  description: string,  price: string,  abv: string,  quantity: string, image: string){
    var newKegToAdd: Keg = new Keg (name, brand, type, description, price, abv, quantity, image);
    this.newKegSender.emit(newKegToAdd);
  }
}
