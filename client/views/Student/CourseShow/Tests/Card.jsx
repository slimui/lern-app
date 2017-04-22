import React from 'react';
import { Card, CardActions, CardHeader } from 'material-ui';
import { List, Subheader, ListItem, Avatar, CardText } from 'material-ui';
import { FlatButton, FontIcon } from 'material-ui';
import { blue500 } from 'material-ui/styles/colors';

const StudentCourseShowTestsCard = React.createClass({

  /* Handlers
  */

  handleStart() {
    const { test: { _id: testId }, test } = this.props;
    Meteor.call('StudentAttemptStart', testId, err =>
      err ? console.log(err) : FlowRouter.go('StudentTestAttempt', { testId }));
  },

  handleContinue() {
    const { test: { _id: testId }, test } = this.props;
    FlowRouter.go('StudentTestAttempt', { testId });
  },

  handleAttempts() {
    const { test: { _id: testId } } = this.props;
    FlowRouter.go('StudentTest', { testId });
  },

  /* Render
  */

  render() {
    const { test, subjects, course, tags, attempts } = this.props;
    const atts = _.filter(attempts, { test: test._id });

    const countScore = _.sum(
      _.flatten(
        _.map(test.get('pages'), ({ content }) =>
          _.map(content, c => _.get(c, 'score') || 0)
        )
      )
    );

    return (
      <Card className='sixteen wide mobile eight wide tablet four wide computer column' >
        <CardHeader
          title={test.name}
          subtitle={_.every(atts, 'finished') ? 'Terminado' : 'Em andamento'}
        />
        <CardText>
          <List>
            <ListItem
              disabled={true}
              leftAvatar={
                <Avatar backgroundColor={blue500}>
                  {test.questions.length}
                </Avatar>
              }
              primaryText='questões'
            />
            <ListItem
              disabled={true}
              leftAvatar={
                <Avatar
                  backgroundColor={blue500}
                  icon={
                    <FontIcon className='material-icons' color='#FFF' >
                      {countScore ? 'star_border' : 'star'}
                    </FontIcon>
                  }
                />
              }
              primaryText={countScore ? `Valor: ${countScore} pontos` : 'Sem pontuação'}
            />
            <ListItem
              disabled={true}
              leftAvatar={
                <Avatar
                  backgroundColor={blue500}
                  icon={
                    <Avatar backgroundColor={blue500}>
                      {
                        TestTimeoutTypes.getName(test.timeoutType) === 'Nenhum'
                        ? <FontIcon className='material-icons' color='#FFF' >
                            hourglass_empty
                          </FontIcon>
                        : moment.duration(test.timeout, 'seconds').humanize().match('[0-9]')
                        ? _.head(moment.duration(test.timeout, 'seconds').humanize().match('[0-9]'))
                        : <FontIcon className='material-icons' color='#FFF' >
                            hourglass_full
                          </FontIcon>
                      }
                    </Avatar>
                  }
                />
              }
              primaryText={
                TestTimeoutTypes.getName(test.timeoutType)  === 'Nenhum'
                ? TestTimeoutTypes.getName(test.timeoutType)
                : `${
                  moment.duration(test.timeout, 'seconds').humanize().match('[0-9]')
                ? _.head(moment.duration(test.timeout, 'seconds').humanize().match('[a-z]'))
                : moment.duration(test.timeout, 'seconds').humanize()} ${
                  TestTimeoutTypes.getName(test.timeoutType)}`
              }
            />
          </List>
        </CardText>
        <CardActions>
          <FlatButton
            primary={true}
            label={_.every(atts, 'finished') ? 'Começar' : 'Continuar'}
            onTouchTap={
              _.every(atts, 'finished')
              ? this.handleStart
              : this.handleContinue
            }
          />
          <FlatButton secondary={true} label='Ver' onTouchTap={this.handleAttempts} />
        </CardActions>
      </Card>
    );
  },
});

export default StudentCourseShowTestsCard;
