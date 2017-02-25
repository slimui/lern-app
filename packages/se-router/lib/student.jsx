import React from 'react';
const { render } = Layout.setup({ protect: 'student', nav: true, bar: true });

const studentRoutes = FlowRouter.group({
  prefix: '/aluno',
  name: 'Student',
});

studentRoutes.route('/', {
  name: 'StudentHome',
  action() {
    render({
      main: <StudentHomeView />,
    });
  },
});

studentRoutes.route('/relatorio', {
  name: 'StudentReports',
  action() {
    render({
      main: <StudentReportsView />,
    });
  },
});

// Settings

studentRoutes.route('/ajustes', {
  name: 'StudentSettings',
  action(params, query) {
    render({
      main: <StudentSettingsView {...query}/>,
    });
  },
});

studentRoutes.route('/setup/:alias?', {
  name: 'StudentSetup',
  action(params, query) {
    render({
      main: <StudentSetup {...query}/>,
    });
  },
});

studentRoutes.route('/curso/ingressar/:alias?', {
  name: 'StudentCourseIngress',
  action(params, query) {
    render({
      main: <StudentCourseIngress {...query}/>,
    });
  },
});

/* Tests
*/

studentRoutes.route('/provas', {
  name: 'StudentTests',
  action(params, query) {
    render({
      main: <StudentTestsView {...query} />,
    });
  },
});

studentRoutes.route('/provas/criar', {
  name: 'StudentTestCreate',
  action() {
    render({
      main: <StudentTestRequestView />,
    });
  },
});

studentRoutes.route('/provas/:testId', {
  name: 'StudentTest',
  action(params, query) {
    render({
      main: <StudentTestView {...params} {...query}/>,
    });
  },
});

studentRoutes.route('/provas/:testId/tentativas/:attemptId', {
  name: 'StudentAttempt',
  action(params) {
    render({
      main: <StudentTestAttempt {...params}/>,
    });
  },
});

studentRoutes.route('/provas/:testId/cognitiva/tentativas/:attemptId', {
  name: 'StudentAttemptCognitive',
  action(params) {
    render({
      main: <StudentAttemptCognitiveView {...params}/>,
    });
  },
});

/* Tags
*/

studentRoutes.route('/temas/:tagId', {
  name: 'StudentTag',
  action(params, query) {
    render({
      main: <StudentTagView {...params} {...query}/>,
    });
  },
});

/* Courses
*/

studentRoutes.route('/disciplinas', {
  name: 'StudentCourses',
  action() {
    render({
      main: <StudentCoursesView />,
    });
  },
});

studentRoutes.route('/disciplinas/:courseId', {
  name: 'StudentCourseShow',
  action(params, query) {
    render({
      main: <StudentCourseShowView {...params} {...query} />,
    });
  },
});

// Posts

studentRoutes.route('/posts', {
  name: 'StudentPosts',
  action(params, query) {
    render({
      main: <StudentPostsView {...query}/>,
    });
  },
});

studentRoutes.route('/posts/novo', {
  name: 'StudentPostCreate',
  action(params, query) {
    render({
      main: <StudentPostCreateView {...query}/>,
    });
  },
});

studentRoutes.route('/posts/editar/:postId', {
  name: 'StudentPostEdit',
  action(params, query) {
    render({
      main: <StudentPostEditView {...params} {...query}/>,
    });
  },
});

studentRoutes.route('/posts/:postId', {
  name: 'StudentPost',
  action(params) {
    render({
      main: <StudentPostView {...params}/>,
    });
  },
});

/* Test Taking
*/

studentRoutes.route('/provas/fazer/:testId/pagina', {
  name: 'StudentTestAttempt',
  triggersExit: [(context, redirect, stop) => {
      // console.log(context);
      // confirm('Deseja realmente abandonar esse teste?') ? stop() : redirect(context.path);
      // Need do something to prevent user to get away from this window
    },
  ],
  action(params) {
    render({
      main: <StudentTestAttempt {...params} />,
    });
  },
});

studentRoutes.route('/cognitivo/fazer/:testId/questao/:index?', {
  name: 'StudentTestAttemptCognitive',
  action(params) {
    render({
      main: <StudentTestAttemptCognitiveView {...params} />,
    });
  },
});
