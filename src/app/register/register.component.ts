import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerform!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.registerform = this.formBuilder.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      mobile: [null, Validators.required],
      address: [null, Validators.required],
      zip: [null, Validators.required,Validators.minLength(6), Validators.maxLength(6)],
      city: [null, Validators.required],
    });
   }

  onSubmit() {

    this.submitted = true;

    if (this.registerform.invalid) {
      return;
    }
 alert("Employee successfully Added" );

    //    this.userService.addemp(this.registerform.value).subscribe(
 //      res => {alert("Employee successfully Added" );
 //      },
 //      err => {
 // alert('this.serverErrorMessages ');
 //      });
    console.log(JSON.stringify(this.registerform.value, null, 2));
  }

}
