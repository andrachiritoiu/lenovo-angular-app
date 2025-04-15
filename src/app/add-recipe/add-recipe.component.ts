import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-add-recipe',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss'
})
export class AddRecipeComponent {
 binding: any;

 addRecipeForm = new FormGroup({
  name:new FormControl('', [Validators.required]),
  preparationtime:new FormControl(0, [Validators.required, Validators.min(0)]),

 });

onSubmit(){
 if(this.addRecipeForm.valid) console.log(this.addRecipeForm.value);
  else console.log('Form is not valid');
}

}
