import { Pipe, PipeTransform } from '@angular/core';
import { ROLES } from '../domain/user.domain';

@Pipe({ name: 'role' })
export class RolePipe implements PipeTransform {
  private reduced: any;

  constructor() {
    this.reduced = this.reduceComplexity();
  }

  transform(user: any): string {
    return this.reduced[user.role] ? this.reduced[user.role].key : '';
  }

  private reduceComplexity(): any {
    const reduced = {};
    ROLES.forEach(role => {
      reduced[role.id] = role;
    });
    return reduced;
  }
}
