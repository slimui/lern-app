// Libs
import React from 'react';
import PropTypes from 'prop-types';
import { LinearProgress, FloatingActionButton, FontIcon } from 'material-ui';

// Views
import StudentCourseShowMenu from './Menu.jsx';
import StudentCourseShowInitial from './Initial.jsx';
import StudentCourseShowHome from './Home/index.jsx';
import StudentCourseShowLectures from './Lectures/index.jsx';
import StudentCourseShowTests from './Tests/index.jsx';
import StudentCourseShowReports from './Reports/index.jsx';
import StudentCourseShowPosts from './Posts/index.jsx';

const StudentCourseShowView = React.createClass({

  styles: {
    floatingButton: {
      className: 'ui right aligned basic segment',
      style: { position: 'fixed', bottom: '1em', right: '1em', zIndex: '1000' },
    },
  },

  /* Get Context
  */

  contextTypes: {
    user: PropTypes.object,
  },

  /* Render
  */

  render() {
    const { ready, course, active='home' } = this.props;
    const { user } = this.context;

    return (
      <div>

        <Layout.Bar
          zDepth={0}
          title={_.get(course, 'name')}
          crumbs={[{ label: 'Disciplinas', path: 'StudentCourses' }]} />

        <StudentCourseShowMenu active={active} {...this.props} />

          {
            !_.every(ready)
            ? <LinearProgress />
            : <div className='ui container'>
              {
                _.get({
                  home: <StudentCourseShowHome {...this.props} key='home' />,
                  lectures: <StudentCourseShowLectures {...this.props} key='lectures' />,
                  tests: <StudentCourseShowTests {...this.props} key='tests' />,
                  reports: <StudentCourseShowReports {...this.props} user={user} key='reports' />,
                  posts: <StudentCourseShowPosts {...this.props} user={user} key='posts' />,
                }, active)
              }
            </div>
          }

          {
            !_.includes(['posts'], active) ? undefined :
              <div {...this.styles.floatingButton}>
                <FloatingActionButton
                  children={<FontIcon className='material-icons'>add</FontIcon>}
                  href={
                    FlowRouter.path(
                      `Student${
                        _.get({
                          posts: 'Post',
                          lectures: 'Lecture',
                          tests: 'Test',
                        }, active)
                      }Create`,
                      { courseId: _.get(course, '_id') },
                      { course: _.get(course, '_id') },
                    )
                  }
                />
              </div>
            }

      </div>
    );
  },
});

export default StudentCourseShowView;
