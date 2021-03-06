import React from 'react';
import { FlatButton, Paper } from 'material-ui';

const TeacherCourseShowHomeTags = React.createClass({

  // Lifecycle

  getInitialState() {
    return { tag: null, open: false };
  },

  handleClose() {
    this.setState({ tag: null, open: false });
  },

  // Render

  render() {
    const { tags, course } = this.props;
    const selectedTags = _.filter(
      tags,
      ({ _id }) =>
        _.includes(course.get('tags'), _id)
    );
    return (
      <Paper className='ui basic segment'>
        {
          _.map(selectedTags, tag =>
            <FlatButton
              key={tag._id}
              label={tag.text}
              secondary={true}
              onTouchTap={() => this.setState({ tag, open: true })}
            />
          )
        }
        <PublicMiscTagShow handleClose={this.handleClose} {...this.state} />
      </Paper>
    );
  },
});

export default TeacherCourseShowHomeTags;
