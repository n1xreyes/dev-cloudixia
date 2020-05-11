import { Component, OnInit, Input } from '@angular/core';
import { Listing } from 'src/app/shared/models/listing.model';

@Component({
  selector: 'app-user-profile-listings',
  templateUrl: './user-profile-listings.component.html',
  styleUrls: ['./user-profile-listings.component.css']
})
export class UserProfileListingsComponent implements OnInit {
  @Input() listings: Listing[]
  constructor() { }

  ngOnInit(): void {
  }

}
