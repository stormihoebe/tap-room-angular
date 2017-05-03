import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <keg-list></keg-list>
  <keg-edit></keg-edit>
  <keg-new></keg-new>
  <keg-low></keg-low>
  </div>
  `

})
export class AppComponent{

  masterKegList:Keg[]=[
    new Keg("The Vaporizer", "Double Mountain Brewery", "Summer Sipper", "Hazy-gold with a sweet, grainy start and a dry, lemony finish, this dry-hopped summer sipper is brewed with pilsner malt and Challenger hops grown in Washington’s Yakima Valley. ","8", "6", "124"),
    new Keg("Blue Dot Double India Pale Ale", "Hair of the Dog Brewing", "IPA", "Next to brewer Alan Sprints’s barrel-aged beasts, Blue Dot seems tame by comparison. But few Imperial IPAs are this well behaved. It’s brawny and resinously hoppy without the acrid finish that can mar lesser interpretations.","7", "7", "124"),
  ];
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
