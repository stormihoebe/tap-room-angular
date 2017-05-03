import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <keg-list [childKegList] = "masterKegList" (clickSender)="editKeg($event)"></keg-list>
  <div class="row">
    <div class="col-md-6">
      <keg-new (newKegSender)="addKeg($event)"></keg-new>
    </div>
    <div class="col-md-6">
      <keg-edit [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()" ></keg-edit>
    </div>
  </div>
  <keg-low [childKegList] = "masterKegList"></keg-low>
  </div>
  `

})
export class AppComponent{
  masterKegList:Keg[]=[
    new Keg("The Vaporizer", "Double Mountain Brewery", "Pale Ale", "Hazy-gold with a sweet, grainy start and a dry, lemony finish, this dry-hopped summer sipper is brewed with pilsner malt and Challenger hops grown in Washington’s Yakima Valley.", 8, 6, 124, "http://www.doublemountainbrewery.com/wp-content/uploads/2014/01/Vaporizer_Label.png"),
    new Keg("Blue Dot Double India Pale Ale", "Hair of the Dog Brewing", "IPA", "Next to brewer Alan Sprints’s barrel-aged beasts, Blue Dot seems tame by comparison. But few Imperial IPAs are this well behaved. It’s brawny and resinously hoppy without the acrid finish that can mar lesser interpretations.", 7, 7, 124,"http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/14723661_1170709192989802_7930255760255090688_n.jpg?ig_cache_key=MTM1OTM1MTExMDkwNDkxMzU0OA%3D%3D.2"
    ),
  ];
  selectedKeg = null;
  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg){
    this.masterKegList.push(newKegFromChild);
  }

  editKeg(clickedKeg: Keg) {
   this.selectedKeg = clickedKeg;
 }
}
