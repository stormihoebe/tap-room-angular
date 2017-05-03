import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "type",
  pure: false
})

export class TypePipe implements PipeTransform {
  transform(input: Keg[], desiredType){
    var output: Keg[] = [];
    if(desiredType === "AllKegs") {
     for (var i = 0; i < input.length; i++) {
         output.push(input[i]);
       }

    return output;
  } else if (desiredType === "Porter") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].type === "Porter") {
        output.push(input[i]);
      }
    }
    return output;
  }  else if (desiredType === "Stout") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].type === "Stout") {
        output.push(input[i]);
      }
    }
    return output;
  } else if (desiredType === "Ale") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].type === "Ale") {
         output.push(input[i]);
       }
     }
     return output;
   }  else if (desiredType === "Lager") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].type === "Lager") {
         output.push(input[i]);
       }
     }
     return output;
   }  else if (desiredType === "Pilsner") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].type === "Pilsner") {
         output.push(input[i]);
       }
     }
     return output;
   }  else if (desiredType === "MaltLiqour") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].type === "MaltLiqour") {
         output.push(input[i]);
       }
     }
     return output;
   }  else if (desiredType === "Other") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].type === "Other") {
         output.push(input[i]);
       }
     }
     return output;

   }
 }
}
