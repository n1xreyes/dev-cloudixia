import { Component, OnInit, Input } from '@angular/core';
import { Listing } from 'src/app/shared/models/listing.model';

@Component({
  selector: 'app-listing-overview-card',
  templateUrl: './listing-overview-card.component.html',
  styleUrls: ['./listing-overview-card.component.css']
})
export class ListingOverviewCardComponent implements OnInit {

  @Input() listing: Listing;
  price: string;
  constructor() { }

  ngOnInit(): void {
    this.price = this.getPrice();
  }

  log(text: Listing) {
    console.log(text)
  }

  // will this be an async call?
  getListingUser(){
    return Math.floor((Math.random() * 1000) + 1) > 50 ? 'Sedky' : 'Rami'
  }

  // will this be an async call?
  getPrice() {
    return '' + Math.floor((Math.random() * 1000) + 1) + '.' + Math.floor((Math.random() * 100))
  }

  onViewClick() {
    console.log()
  }

}
