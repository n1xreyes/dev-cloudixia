import { Component, OnInit, Input } from '@angular/core';
import { ListringWithCategory } from 'src/app/shared/models/listing.model';

@Component({
  selector: 'app-listing-overview-card',
  templateUrl: './listing-overview-card.component.html',
  styleUrls: ['./listing-overview-card.component.css']
})
export class ListingOverviewCardComponent implements OnInit {

  @Input() listing: ListringWithCategory;

  constructor() { }

  ngOnInit(): void {
  }

}
