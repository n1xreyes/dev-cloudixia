// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAQVu7JXpG-u5LDYeltF8DyOpn-agZaJp8',
    authDomain: 'bloopky.firebaseapp.com',
    databaseURL: 'https://bloopky.firebaseio.com',
    projectId: 'bloopky',
    storageBucket: 'bloopky.appspot.com',
    messagingSenderId: '849578959436',
    appId: '1:849578959436:web:b8f8144560a29629d48ae9',
    measurementId: 'G-BX1MCQ199J'
  },

  algolia: {
    appId: 'G8XK2HA834',
    apiKey: 'ed1eba3235e17f8f4cc3dff647666427',
    indexName: 'dev_LISTINGS'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
