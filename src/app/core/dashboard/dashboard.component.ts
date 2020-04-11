import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  projectsSub: Subscription;
  
  projects = [
    {
      title: 'Project 1',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      photoUrl:
        'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg'
    },
    {
      title: 'Project 2',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      photoUrl:
        'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(98).jpg'
    },
    {
      title: 'Project 3',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      photoUrl:
        'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(99).jpg'
    },
    {
      title: 'Project 4',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      photoUrl:
        'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(95).jpg'
    }
  ];

  constructor(
  ) { }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.projectsSub) {
      this.projectsSub.unsubscribe();
    }
  }

  // initProjects() {
  //   this.projectsSub = this.store
  //     .pipe(
  //       select(getUser),
  //       switchMap((user: any) => {
  //         if (user) {
  //           return this.projectsService.get(user.uid);
  //         } else {
  //           return empty();
  //         }
  //       }),
  //       take(1)
  //     )
  //     .subscribe(projects => {
  //       if (projects.length === 0) {
  //         this.projectsService.addProjects(this.projects);
  //       }
  //     });
  // }

}
