import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid banner">
    <div class = "row">
      <div class="aboutDiv col-md-4"><h1>Mountain Bear <br>Tap House</h1>
      <br>
      <img src="resources/images/Group.png" width="100px">
      <br>
      <em>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</em>
      </div>
    </div>
  </div>
  <div id="menuDiv">
    <nav id="menu">
       <ul>
        <li class="rocket"><a href=""></a></li>
        <li class="wine"><a href="">On Tap</a></li>
        <li class="burger"><a href="">Good Eats</a></li>
        <li class="comment"><a href="">Contact</a></li>
        <li class="sport" ><a href="">Activities</a></li>
        <li class="earth"><a href="">Locations</a></li>
        <div class="current">
          <div class="top-arrow"></div>
          <div class="current-back"></div>
          <div class="bottom-arrow"></div>
        </div>
      </ul>
    </nav>
  </div>
  <div class="container">
  <br><keg-list [childKegList] = "masterKegList" (clickSender)="editKeg($event)"></keg-list>
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
    new Keg("The Vaporizer", "Double Mountain Brewery", "Ale", "Hazy-gold with a sweet, grainy start and a dry, lemony finish, this dry-hopped summer sipper is brewed with pilsner malt and Challenger hops grown in Washington’s Yakima Valley.", 8, 6, 124, "http://www.doublemountainbrewery.com/wp-content/uploads/2014/01/Vaporizer_Label.png"),
    new Keg("Blue Dot Double India Pale Ale", "Hair of the Dog Brewing", "Ale", "Next to brewer Alan Sprints’s barrel-aged beasts, Blue Dot seems tame by comparison. But few Imperial IPAs are this well behaved. It’s brawny and resinously hoppy without the acrid finish that can mar lesser interpretations.", 7, 7, 124,"http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/14723661_1170709192989802_7930255760255090688_n.jpg?ig_cache_key=MTM1OTM1MTExMDkwNDkxMzU0OA%3D%3D.2"
    ),
    new Keg("Cold Shot", "Sasquatch", "Porter", "A rich, robust porter with organic, cold-brewed coffee from Rose City Coffee Co. added to the fermenter during the cold crash. Flavors of dark chocolate, roasted malt and caramel blend with the nuttiness and slight acidity of South American coffee beans.", 6, 7.7, 124, "http://www.ironhillbrewery.com/blog/ihbhome/files/2016/07/IHB-dark-beer-3.jpg"),
    new Keg("The Salty Teaser", "Double Dragon Brewery", "Pilsner", "Beer ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco", 8, 6, 124, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHDTPZhNVgtXbXjdKLEmGSupwJwhS8v5VQG5ZZ1S9IoYm5H7hV9g"),
    new Keg("Crazy Five", "Nose of the Dog Brewing", "Lager", "Beer ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.", 7, 7, 124,"https://tud53400.files.wordpress.com/2013/12/lager-yeast-beer.jpg"
    ),
    new Keg("Hot Shot", "Big Foot", "Stout", "Beer ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco", 6, 7.7, 124, "http://boulderinn.com/bldrinn/wp-content/uploads/2015/02/stout.jpg")
  ];
  selectedKeg = null;
  finishedEditing() {
    this.selectedKeg = null;
  }

  editKeg(clickedKeg: Keg) {
   this.selectedKeg = clickedKeg;
 }
 addKeg(newKegFromChild: Keg){
   this.masterKegList.push(newKegFromChild);
 }
}
