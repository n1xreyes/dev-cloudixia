import { Injectable } from '@angular/core';
import { Listing } from 'src/app/shared/models/listing.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }

  get userId() {
    if (this.afAuth.auth.currentUser) {
      return this.afAuth.auth.currentUser.uid;
    }
  }

  add(project: Listing, userId: string) {
    const projects = this.db.list(`projects/${userId}`);
    return projects.push(project);
  }

  addProjects(projects: Listing[]) {
    const userId = this.userId;
    projects.forEach( (project: Listing) => {
      this.db.list(`projects/${userId}`).push(project);
    });
  }

  get(userId: string) {
    return this.db.list(`projects/${userId}`).snapshotChanges();
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
