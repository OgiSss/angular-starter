import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() sendLoginForm = new EventEmitter<{ email: string, password: string }>();
  public form: FormGroup;
  public email = '';
  public password = '';

  public ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(this.email, [Validators.required, Validators.email]),
      password: new FormControl(this.password, [Validators.required])
    });
  }

  public login(): void {
    if (this.form.valid) {
      this.sendLoginForm.emit({ email: this.form.get('email').value, password: this.form.get('password').value });
    }
  }
}
