import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { VerificationService } from '../services/verification.service';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {
  accessToken: string[] = [''];

  constructor(
    private verificationService: VerificationService,
    private router: Router,
    private toastr: ToastrService
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.verificationService.getTokens().pipe(
      map(({ data }) => {
        if (!data.includes(route.data['accessToken'])) {
          this.router.navigate(['auth']);
          this.toastr.error(`Доступ к странице ${state.url} запрещен`);
          return false;
        }
        return true;
      })
    );
  }
}
