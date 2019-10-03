import { Component } from '@angular/core';

import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private userService: UserService) {}

  logout() {
    this.userService.logout();
  }

  get user() {
    return this.userService.getUser();
  }
}
