/**
 * NOTE: This file is ignored from git tracking. In a CI environment it is
 * generated by firebase-ci based on config in .firebaserc (see <% if(ciProvider === 'travis') { %>.travis.yml<% } else { %>.gitlab-ci.yaml<% } %>).
 * This is done so that environment specific settings can be applied.
 */

export const env = 'dev'

// Config for firebase
export const firebase = {
  apiKey: '<%= firebaseKey %>',
  authDomain: '<%= firebaseName %>.firebaseapp.com',
  databaseURL: 'https://<%= firebaseName %>.firebaseio.com',
  projectId: '<%= firebaseName %>',
  storageBucket: '<%= firebaseName %>.appspot.com'<% if(messagingSenderId) { %>,
  messagingSenderId: '<%= messagingSenderId %>'<% } %>
}

// Config to override default reduxFirebase config in store/createStore
// which is not environment specific.
// For more details, visit http://react-redux-firebase.com/docs/api/enhancer.html
export const reduxFirebase = {
  enableLogging: false, // enable/disable Firebase Database Logging
}<% if (includeAnalytics) { %>

export const analyticsTrackingId = ''<% } %><% if (includeMessaging) { %>

export const publicVapidKey = '<%= firebasePublicVapidKey %>' <% } %><% if (includeErrorHandling) { %>

export const sentryDsn = '<%= sentryDsn %>'<% } %>

export default {
  env,
  firebase,
  reduxFirebase<% if (sentryDsn) { %>,
  sentryDsn <% } %><% if (firebasePublicVapidKey) { %>,
  publicVapidKey<% } %><% if (includeAnalytics) { %>,
  analyticsTrackingId<% } %>
}
