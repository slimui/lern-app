// Libs
import { createContainer } from 'meteor/react-meteor-data';

// View
import AdminTestsView from './View.jsx';

AdminTests = createContainer(() => {
  const userId = Meteor.userId();

  const handles = {
    tests: Meteor.subscribe('AdminTests', {}, { course: true, author: true }),
  };

  const data = {
    ready: _.mapValues(handles, h => h.ready()),
    tests: Fetch.General.tests().fetch(),
  };

  data.courses = data.tests && Fetch.General.courses(_.map(data.tests, 'course')).fetch();
  data.authors = data.tests && Fetch.General.users(_.map(data.tests, 'author')).fetch();

  return data;
}, AdminTestsView);
