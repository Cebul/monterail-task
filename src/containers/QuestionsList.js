import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Card, {CardContent} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Dialog, {DialogTitle,DialogContent} from 'material-ui/Dialog'
import PersonIcon from 'material-ui-icons/Person'
import Button from 'material-ui/Button'
import {KeyboardArrowLeft, KeyboardArrowRight} from 'material-ui-icons'

class QuestionsList extends Component {

  handleClick = () => {
    this.props.handleDialogOpen(this.props.value)
  }

  render() {

    let {users, open, handleRequestClose, currentUser} = this.props

    return (
      <div>
        <Card>
          <CardContent>
            <Button onClick={this.handleClick}>
              <Avatar  alt="Avatar">
                <PersonIcon />
              </Avatar>
            </Button>
            <Dialog open={open} onRequestClose={handleRequestClose}>
              <Avatar alt="Avatar">
                <PersonIcon />
              </Avatar>
              <DialogTitle>{users[currentUser].name}</DialogTitle>
              <span>MEMEBER FOR </span>{users[currentUser].member}
              <DialogContent>
                <KeyboardArrowLeft />{users[currentUser].title}<KeyboardArrowRight />
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    )
  }
}

QuestionsList.propTypes = {
  onRequestClose: PropTypes.func
}

export default QuestionsList
