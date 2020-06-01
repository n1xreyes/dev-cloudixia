import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { take, switchMap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SellerGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService, private afAuth: AngularFireAuth) {}


  canActivate(): Observable<boolean> | boolean {

    return this.afAuth.authState
        .pipe(
            take(1),
            switchMap( (user: any) => {
              if (!user) {
                this.router.navigateByUrl('/login').then();
                return of(false);
              }
              return this.authService.checkSellerRole(user.uid)
                  .pipe(
                      map( (isAdmin) => {
                        if (isAdmin) {
                          return true;
                        } else {
                          this.router.navigateByUrl('').then();
                          return false;
                        }
                      }),
                      catchError( () => {
                        this.router.navigateByUrl('').then();
                        return of(false);
                      })
                  );
            }),
        );
  }
}
