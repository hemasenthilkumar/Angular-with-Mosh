import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {PassValidators} from './pass.validators';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldpass: ['', 
        Validators.required, 
        PassValidators.isoldvalid
      ],
      newpass: ['', Validators.required],
      confirmpass: ['', Validators.required]
    }, {
      validator: PassValidators.dontmatch
    });
  }
  get oldpass()
  {
    return this.form.get('oldpass');
  }
  get newpass()
  {
    return this.form.get('newpass');
  }
  get confirmpass()
  {
    return this.form.get('confirmpass');
  }


}
