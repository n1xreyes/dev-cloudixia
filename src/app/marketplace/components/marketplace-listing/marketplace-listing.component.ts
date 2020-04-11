import { Component, OnInit, Input } from '@angular/core';
import { Listing } from 'src/app/shared/models/listing.model';

@Component({
  selector: 'app-marketplace-listing',
  templateUrl: './marketplace-listing.component.html',
  styleUrls: ['./marketplace-listing.component.css']
})
export class MarketplaceListingComponent implements OnInit {

  @Input() listings: Listing[];
  constructor() { }

  ngOnInit(): void {
  }

}
