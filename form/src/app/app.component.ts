import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';

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

  constructor(private _fb: FormBuilder){}
  
  hobbies: Hobby[] = [
    {value: 'Sports-0', viewValue: 'Sports'},
    {value: 'Singing-1', viewValue: 'Singing'},
    {value: 'Dancing-2', viewValue: 'Dancing'},
  ];

  OnSubmit(){
    this.isSubmit=true;
    if(this.SignUpForm.valid)
    console.log(this.SignUpForm.value)
  }

  get p(){
    return this.SignUpForm.controls;
  }

  ngOnInit(): void {

    this.SignUpForm = this._fb.group({
      name:['',Validators.required],
      dob:['',Validators.required],
      address:['',Validators.required],
      tel:['',[Validators.required,Validators.max(9999999999)]],
      hobby:['',Validators.required],
      gender:['',Validators.required],
      checkbox:['',Validators.required],
    })
    
  }

}
