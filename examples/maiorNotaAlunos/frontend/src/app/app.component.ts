import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { AuthService } from './core/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private permissionService: NgxPermissionsService
  ) {}

  ngOnInit(): void {
    this.loadPermissions();
  }

  protected loadPermissions() {
    this.permissionService.loadPermissions(
      this.authService.getUser() ? this.authService.getUser().permissions : []
    );
    // this.permissionService.loadPermissions(["read-*"]);
  }
}
