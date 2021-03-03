import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
<<<<<<< HEAD
import { StatusService } from './status.service';


@Injectable()
export class AuthGuard implements CanActivate {
constructor(public zone: NgZone, public router: Router, private statusService: StatusService) {

}
canActivate(): boolean {
if (!Helper.isNextStep) {
  this.zone.run(() => {
    this.router.navigate(['']) //you can redirect user to any page here ( Optional )
  })
  return false;  //block navigation
}
else {
  return Helper.isNextStep || true;  // allow navigation
}
}
=======
import { AuthService } from './auth.service';
>>>>>>> admin
