import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { AppComponent }   from './app.component';
import { KegListComponent } from './keg-list.component';
import { KegEditComponent } from './keg-edit.component';
import { KegLowComponent } from './keg-low.component';
import { KegNewComponent } from './keg-new.component';
import { EmptinessPipe } from './emptiness.pipe';
import { TypePipe } from './type.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule],
  declarations: [ AppComponent, KegLowComponent, KegListComponent, KegEditComponent, KegNewComponent, EmptinessPipe, TypePipe],
  bootstrap: [ AppComponent]
})

export class AppModule {

}
