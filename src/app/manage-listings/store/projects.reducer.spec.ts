import { projectsReducer, ProjectChangeActions } from './projects.reducer';
import { projectsInitialState, ProjectsState } from './projects.state';
import { Listing } from 'src/app/shared/models/listing.model';
import * as fromProjects from './projects.actions';

describe('Projects Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = projectsReducer(projectsInitialState, action);

      expect(result).toBe(projectsInitialState);
    });

    let mockProjects: Listing[] = [
      {
        uid: '123',
        title: 'Web Development'
      },
      {
        uid: '456',
        title: 'Math Tutoring'
      },
      {
        uid: '789',
        title: 'Video Animation'
      }
    ]

    describe('project changes,', () => {
      let mockAlreadyLoadedState: ProjectsState = Object.assign({}, projectsInitialState);
      mockAlreadyLoadedState.projects = mockProjects;
  
      it('should add a new project to the store', () => {
        let newListing: Listing = {
          uid: '999',
          title: 'My new listing'
        }

        const result = projectsReducer(mockAlreadyLoadedState, 
          new fromProjects.ProjectChanged({ project: newListing, action: ProjectChangeActions.CREATE }))
        

        expect(result.projects?.length).toEqual(mockProjects.length + 1)
      
      })
  
      it('should delete a project from the store', () => {
        mockAlreadyLoadedState.projects = mockProjects;
        expect(mockAlreadyLoadedState.projects[0]).toEqual(mockProjects[0])
        
        const result = projectsReducer(mockAlreadyLoadedState, 
          new fromProjects.ProjectChanged({ project: mockProjects[0], action: ProjectChangeActions.DELETE }))
        
        expect(result.projects?.length).toEqual(mockProjects.length - 1)
        expect(result.projects?.pop()).toEqual(mockProjects[2])
      })
  
      it('should update a project already in the store', () => {
        const newListingTitle = 'my new title'
        const updatedListing = Object.assign({}, mockProjects[0], {'title': newListingTitle})

        const result = projectsReducer(mockAlreadyLoadedState, 
          new fromProjects.ProjectChanged({ project: updatedListing, action: ProjectChangeActions.UPDATE }))
        
        expect(result.projects && result.projects[0].title).toEqual(newListingTitle)
      })
    })
  

  });
});
