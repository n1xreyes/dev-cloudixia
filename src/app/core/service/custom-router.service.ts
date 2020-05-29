import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomRouterService implements OnInit, OnDestroy {

  private previousRoutePath: string;

  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.router.events
        .pipe(
          filter(event => event instanceof RoutesRecognized),
          pairwise()
        )
        .subscribe({
          next: (event) => {
            console.log((event[0] as RoutesRecognized).url);
            this.previousRoutePath = (event[0] as RoutesRecognized).url;
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  canNavigateBack(): boolean {
    return !!this.previousRoutePath;
  }

  back(): void {
    if (this.canNavigateBack()) {
      history.back();
    }
  }

}
