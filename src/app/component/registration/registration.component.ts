import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Service/userService/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm! : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder , private user: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', Validators.required]
    })
  }

  get f() { return this.registerForm.controls; }

  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.valid) {
        console.log("Registration Successful")
        let reqdata ={
          fullName: this.registerForm.value.fullName,
          email: this.registerForm.value.email,
          password: this.registerForm.value.password,
          phone: this.registerForm.value.phone,
        }
        this.user.registration(reqdata).subscribe((response:any) => {
          console.log(response)
  
        }, error => {
          console.log(error)
        }
        )
      }
  
      
    }

}
