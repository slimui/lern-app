// Libs
import React from 'react';
import { Paper, Divider } from 'material-ui';
import { Editor, EditorState, convertFromRaw } from 'draft-js';

import StudentTestAttemptGlobalContentQuestion from './Question.jsx';

const StudentTestAttemptGlobalContent = React.createClass({

  // Render

  render() {
    const { test, pages, index } = this.props;
    return (
      <Paper className='ui container' style={{ marginTop: 75, marginBottom: 85 }} >

        <div className='ui grid container segment' style={{ paddingLeft: 15 }} >

          {
            _.map(_.get(test.get('pages'), `[${index}].content`), (c, i) =>
              [
                <div className='row' key={`${index}.${i}.content`}>
                  <div className='sixteen wide column' >
                    {_.get({
                      text: <Editor
                          readOnly={true}
                          editorState={c.text && EditorState.createWithContent(
                            convertFromRaw(c.text))} />,
                      link: <a>{c.link}</a>,
                      title: <h4>{c.title}</h4>,
                      image: <PublicContentShowImage
                        form={this}
                        imageId={c.image}
                      />,
                      question: <StudentTestAttemptGlobalContentQuestion
                        parent={this.props.parent}
                        answer={_.find(pages.answers[index], { question: c.question })}
                        question={_.find(pages.questions[index], { _id: c.question })}
                        questionIndex={
                          (
                            _.sumBy(
                              _.take(
                                pages.questions,
                                index
                              ),
                              p => p.length
                            ) || 0
                          ) + (
                            _.findIndex(
                              _.filter(
                                _.get(
                                  test.get('pages'),
                                  `[${index}].content`
                                )
                              ),
                              { question: c.question }
                            )
                          )
                        }
                      />,
                    }, c.type)}
                  </div>
                </div>,
                <div className='row' key={`${i}.divider`}>
                  <div className='sixteen wide column' >
                    <Divider/>
                  </div>
                </div>,
              ]
            )
          }

        </div>

      </Paper>
    );
  },

});

export default StudentTestAttemptGlobalContent;
