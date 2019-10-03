import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/interface/base.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NgxPermissionsService } from 'ngx-permissions';

import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private permissionService: NgxPermissionsService
  ) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.initLoginForm();
  }

  onSubmit(): void {
    this.login(this.loginForm.value.username, this.loginForm.value.password);
  }

  protected initLoginForm(): void {
    if (this.userService.isLogged()) {
      this.navigateToHome();
    }
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control(undefined, [Validators.required]),
      password: this.formBuilder.control(undefined, [Validators.required])
    });
  }

  protected login(login: string, password: string): void {
    this.loading = !this.loading;
    this.userService.login(login, password).subscribe(
      (result: any) => {
        this.userService.saveToken(result);
        this.permissionService.loadPermissions(
          this.userService.getUser().permissions
        );
        // this.permissionService.loadPermissions(["read-*"]);
        this.loading = !this.loading;
        this.navigateToHome();
      },
      (error: any) => {
        this.notification.error(this.translate('login.error'));
        this.loading = !this.loading;
      }
    );
  }

  protected navigateToHome(): void {
    this.router.navigate(['/']);
  }

  teste(): void {
    console.log('clicou');
  }
}
