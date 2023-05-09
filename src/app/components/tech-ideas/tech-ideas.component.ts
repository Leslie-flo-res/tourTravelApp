import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { avoidWord, prohibited } from 'custom-validation';


@Component({
  selector: 'app-tech-ideas',
  templateUrl: './tech-ideas.component.html',
  styleUrls: ['./tech-ideas.component.css']
})
export class TechIdeasComponent {
suggestForm;


constructor(private formBuilder:FormBuilder,){

  
  this.suggestForm=formBuilder.group({
    name:["",[Validators.required, Validators.minLength(2),avoidWord,prohibited(/tourist/)]],
    age:[15,[Validators.required]],
    email:["",[Validators.required]],
    //city:["",[Validators.required]],
    idea:["",[Validators.required, Validators.minLength(100),avoidWord,prohibited(/nothing/)]],


  })
}

get nameFormControl(){
  return this.suggestForm.get('name')!;
}
get ageFormControl(){
  return this.suggestForm.get('age')!;
}
get emailFormControl(){
  return this.suggestForm.get('email')!;
}   
// get cityFormControl(){
//   return this.suggestForm.get('city')!;
// }
get ideaFormControl(){
  return this.suggestForm.get('idea')!;
}

onSubmit(){
  console.log(this.suggestForm.value);
  this.suggestForm.reset(); 
} 


}
