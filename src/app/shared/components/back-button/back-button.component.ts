import { Component, OnInit } from '@angular/core';
import { CustomRouterService } from '../../../core/service/custom-router.service';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {

  constructor(
    public customRouterService: CustomRouterService
  ) { }

  ngOnInit(): void {
  }

}
