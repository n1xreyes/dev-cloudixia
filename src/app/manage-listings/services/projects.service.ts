import { Injectable } from '@angular/core';
import { Listing } from 'src/app/shared/models/listing.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { MarketplaceService } from 'src/app/marketplace/services/marketplace.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(
    private db: AngularFireDatabase, 
    private afAuth: AngularFireAuth,
    private marketplaceService: MarketplaceService
    ) { }

  get userId() {
    if (this.afAuth.auth.currentUser) {
      return this.afAuth.auth.currentUser.uid;
    }
  }

  add(project: Listing) {
    return this.marketplaceService.add(project);
  }

  get(userId: string) {
    return this.db.list(`listings`).snapshotChanges().pipe(
      map( listings => console.log)
    )
  }

  update(project: Listing, userId: string) {
    return of(this.db.object(`projects/${userId}/` + project.key)
      .update({
        title: project.title,
        description: project.description,
        photoUrl: project.photoUrl
      }));
  }

  delete(project: Listing, userId: string) {
    return this.db.object(`projects/${userId}/` + project.key).remove();
  }

  getAllProjects() {
    return this.db.list('projects').snapshotChanges();
  }
}
