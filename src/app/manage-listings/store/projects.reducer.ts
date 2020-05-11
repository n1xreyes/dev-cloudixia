import { ProjectsActions, ProjectsActionTypes } from './projects.actions';
import { projectsInitialState, ProjectsState } from './projects.state';


export function projectsReducer(state = projectsInitialState, action: ProjectsActions): ProjectsState {
  switch (action.type) {

    case ProjectsActionTypes.PROJECTS_QUERY_ALL: {
      return Object.assign({}, state, {
        loading: true,
      });
    }

    case ProjectsActionTypes.PROJECTS_QUERY: {
      return Object.assign({}, state, {
        loading: true,
      });
    }

    case ProjectsActionTypes.PROJECTS_LOADED: {
      return Object.assign({}, state, {
        projects: action.payload.projects,
        loading: false,
      });
    }
    
    case ProjectsActionTypes.MY_PENDING_LISTINGS_QUERY: {
      return Object.assign({}, state, {
        pendingLoading: true,
      });
    }

    case ProjectsActionTypes.MY_PENDING_LISTINGS_LOADED: {
      return Object.assign({}, state, {
        pendingListings: action.payload.projects,
        pendingLoading: false,
      });
    }

    case ProjectsActionTypes.PROJECT_CHANGED: {
      let newState = Object.assign({}, state);
      let newProject = action.payload.project

      newState.projects = Object.assign([], newState.projects)

      var updateIndex = newState.projects?.findIndex((element) => element.uid === newProject.uid)

      switch (action.payload.action) {
        case ProjectChangeActions.CREATE:
          newState.projects.push(newProject)
          return newState
        case ProjectChangeActions.UPDATE:
          newState.projects[updateIndex] = newProject
          return newState
        case ProjectChangeActions.DELETE:
          newState.projects = newState.projects.slice(0, updateIndex).concat(newState.projects.slice(updateIndex + 1, newState.projects.length))
          return newState
      }

      // shouldn't ever get here
      return newState
    }

    case ProjectsActionTypes.PROJECTS_ERROR: {
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.error
      });
    }

    default:
      return state;
  }
}

export enum ProjectChangeActions {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  DELETE = "DELETE"
}