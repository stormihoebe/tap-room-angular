import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './keg.model';

@Pipe({
  name: "emptiness",
  pure: false

})

export class EmptinessPipe implements PipeTransform {
  transform(input: Keg[]) {
    var output: Keg[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].quantity <= 10) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
