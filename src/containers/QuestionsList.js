import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Card, {CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import Avatar from 'material-ui/Avatar'
import PersonIcon from 'material-ui-icons/Person'
import Dialog, {DialogTitle,DialogContent} from 'material-ui/Dialog'
import Icon from 'material-ui/Icon'
import Grid from 'material-ui/Grid'
import '../styled/Template.css'
import Divider from 'material-ui/Divider'


const styles = {

  container: {
    display: "block",
    margin: "auto",
    padding: 30
  },
  name: {
    textAlign: "center"
  },
  avatar: {
    display: "block",
    margin: "auto",
    marginTop: 30
  },
  labelsContainer: {
    display: "inline-flex"
  },
  labels: {
    color: "#8E8B92",
    marginRight: 20,
    marginLeft: 20
  },
  arrows: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    backgroundColor: "#A6A7AB",
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
    padding: 10
  },
  arrowContainer: {
    paddingLeft: 30,
    paddingRight: 30
  },
  title: {
    textAlign: "center",
    display: "inline-flex",
    margin: "auto",
    fontSize: 30,
    padding: 20
  },
  divider: {
    width: "80%",
    margin: "auto"
  },
  dialog: {
    width: "120%"
  },
  activityIcons: {
    display: "inline-flex",
    color: "#F88078"
  }
}

class QuestionsList extends Component {

  handleClick = () => {
    this.props.handleDialogOpen(this.props.value)
  }

  handleActivity() {
    switch(this.props.users[this.props.currentUser].activity) {
      case 1:
      return (
        <div style={styles.activityIcons}>
          <Icon>local_activity</Icon>
        </div>
      )
      break
      case 2:
      return (
        <div style={styles.activityIcons}>
          <Icon>local_activity</Icon>
        </div>
      )
      break
      case 3:
      return (
        <div style={styles.activityIcons}>
          <Icon>local_activity</Icon>
          <Icon>local_activity</Icon>
          <Icon>local_activity</Icon>
        </div>
      )
      break
      default:
      return (
        <div style={styles.activityIcons}>
          <Icon>local_activity</Icon>
        </div>
      )
      break
    }
  }

  render() {

    let {users, handleRequestClose, open, currentUser} = this.props

    return (
      <div style={styles.container}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Card style={styles.container}>
              <CardContent>
                <Button onClick={this.handleClick}>
                  <Avatar alt="Avatar">
                    <PersonIcon />
                  </Avatar>
                </Button>
                <Dialog open={open} onRequestClose={handleRequestClose}>
                  <div style={styles.avatar}>
                    <Avatar alt="Avatar">
                      <PersonIcon />
                    </Avatar>
                  </div>
                  <DialogTitle style={styles.name}>{users[currentUser].name}</DialogTitle>
                  <div style={styles.labelsContainer}>
                    <span style={styles.labels}>MEMEBER FOR </span>{users[currentUser].member}
                    <span style={styles.labels}>LAST SEEN </span> {users[currentUser].last}
                    <span style={styles.labels}>ACTIVITY LEVEL </span> {this.handleActivity()}
                  </div>
                  <Divider style={styles.divider} />
                  <DialogContent style={styles.title}>
                    <div style={styles.arrowContainer}>
                      <Icon style={styles.arrows}>keyboard_arrow_left</Icon>
                    </div>
                      {users[currentUser].title}
                    <div style={styles.arrowContainer}>
                      <Icon className="arrow-right" style={styles.arrows}>keyboard_arrow_right</Icon>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
        </Grid>
        </Grid>
      </div>
    )
  }
}

QuestionsList.propTypes = {
  onRequestClose: PropTypes.func
}

export default QuestionsList
