import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { CoreService } from './services/core.service';

interface Hobby{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'form';
  SignUpForm !: FormGroup;
  selectedValue!: string;
  isSubmit:boolean=false;

  constructor(private _fb: FormBuilder,private _core: CoreService){}

  
  hobbies: Hobby[] = [
    {value: 'Sports-0', viewValue: 'Sports'},
    {value: 'Singing-1', viewValue: 'Singing'},
    {value: 'Dancing-2', viewValue: 'Dancing'},
  ];

  OnSubmit(){
    this.isSubmit=true;
    if(this.SignUpForm.valid){
      this._core.openSnackBar('Form Submitted','Done')
    console.log(this.SignUpForm.value)
    }
  }

  get p(){
    return this.SignUpForm.controls;
  }

  ngOnInit(): void {

    this.SignUpForm = this._fb.group({
      name:['',[Validators.required,Validators.pattern("^[A-Za-z]*$")]],
      dob:['',Validators.required],
      address:['',Validators.required],
      tel:['',[Validators.required,Validators.max(9999999999),Validators.min(999999999),Validators.pattern('[0-9]+')]],
      hobby:['',Validators.required],
      gender:['',Validators.required],
      checkbox:['',Validators.required],
    })
    
  }
  onTelephoneKeypress(event: KeyboardEvent) {
    const regex = /[0-9]/;
    const key = String.fromCharCode(event.which);
    if (!regex.test(key)) {
      event.preventDefault();
    }
  }

}
