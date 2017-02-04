import React from 'react';
const { render } = Layout.setup({ protect: 'school', nav: true, bar: true });

const schoolRoutes = FlowRouter.group({
  prefix: '/escola',
  name: 'School',
});

schoolRoutes.route('/', {
  name: 'SchoolHome',
  action() {
    render({
      main: <SchoolHome />,
    });
  },
});

schoolRoutes.route('/cursos', {
  name: 'SchoolCourses',
  action() {
    render({
      main: <SchoolCourses />,
    });
  },
});

schoolRoutes.route('/cursos/novo', {
  name: 'SchoolCourseCreate',
  action() {
    render({
      main: <SchoolCourseCreate />,
    });
  },
});
