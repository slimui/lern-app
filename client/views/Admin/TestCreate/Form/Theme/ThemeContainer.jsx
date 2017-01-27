// Libs
import { createContainer } from 'meteor/react-meteor-data';

// View
import AdminTestCreateFormThemeView from './Theme.jsx';

export default AdminTestCreateFormTheme = createContainer(({ form }) => {
  const subjectIds = form.doc.get('subjects');

  const handles = {
    tags: Meteor.subscribe('PublicTags', { subjectIds }),
  };

  const data = {
    ready: _.mapValues(handles, h => h.ready()),
    tags: Fetch.Public().tags().fetch(),
  };

  return data;
}, AdminTestCreateFormThemeView);
