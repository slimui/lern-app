import React from 'react';

const TeacherCourseShowLectures = React.createClass({

  /* Render
  */

  render() {
    const { lectures } = this.props;

    return (
      <div className='ui grid container' style={{ marginTop: 10 }}>
        {
          _.map(_.sortBy(lectures, 'startDate'), lecture =>
              <TeacherCourseShowLecturesCard
                lecture={lecture}
                {...this.props}
                key={lecture._id}
              />
          )
        }
      </div>
    );
  },
});

export default TeacherCourseShowLectures;
