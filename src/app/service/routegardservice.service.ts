import { Injectable } from '@angular/core';
import { CanActivate ,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { HardcodedauthService } from '../service/hardcodedauth.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RoutegardserviceService implements CanActivate{

  constructor(private hardcodedauthService: HardcodedauthService,private router: Router) { }
  
  

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ){
  if(this.hardcodedauthService.isUserLoggedIn()) {
   return true;
  
  }
   
   
 else{
 this.router.navigate(['login']);
 return false;}
  }

}
