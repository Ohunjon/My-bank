import {Component, OnInit,} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginform: FormGroup;
  constructor(private fb:FormBuilder) {
    this.loginform=this.fb.group({
      email:['', {validators:[Validators.required,Validators.email],
      updateOn:'blur'
      }],
      password:['', {validators:[Validators.required],
      updateOn:'blur'
      }]
    });

  }

  ngOnInit() {

  }

  onSubmit()
  {
console.log(this.loginform.value);
  }
}
