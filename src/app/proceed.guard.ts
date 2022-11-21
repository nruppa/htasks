import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProceedComponent } from './proceed/proceed.component';

@Injectable({
  providedIn: 'root'
})
export class ProceedGuard implements CanDeactivate<ProceedComponent> {
  canDeactivate(
    component: ProceedComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.proceed) {
      return window.confirm("Are you sure to leave the page")
    }
    return true;
  }

}
