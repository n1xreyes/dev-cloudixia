import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/projects/models/project.model';

@Component({
  selector: 'app-marketplace-listing',
  templateUrl: './marketplace-listing.component.html',
  styleUrls: ['./marketplace-listing.component.css']
})
export class MarketplaceListingComponent implements OnInit {

  @Input() listings: Project[];
  constructor() { }

  ngOnInit(): void {
  }

}
