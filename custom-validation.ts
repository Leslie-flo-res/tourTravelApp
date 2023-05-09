//UPDATED CUSTOM VALIDATION 
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
 
export function avoidWord(fc:AbstractControl) : ValidationErrors | null{
    let notAllowed = /nothing/.test(fc.value);
 
    if(notAllowed){
        return {
            prohibited: {value: fc.value}
        };
    }
    else{
        return null;
    }
}
 
export function prohibited(reg:RegExp) : ValidatorFn{
    return (fc:AbstractControl) : ValidationErrors | null => {
        let notAllowed = reg.test(fc.value);
 
        if(notAllowed){
            return {
                prohibited: {value: fc.value}
            };
        }
        else{
            return null;
        }
    }
}





//OLD VALIDATION  BELOW 

// import { AbstractControl } from "@angular/forms";

// export function avoidWord(fc:AbstractControl){
// let notAllowed = /hack/.test(fc.value);

// if (notAllowed) {
//     return {
//         prohibited: {value: fc.value}
//     };
// }
//  else {
//     return null;
//  }

// }