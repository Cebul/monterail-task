import React, {Component} from 'react'
import Avatar from 'material-ui/Avatar'
import Dialog, {DialogTitle,DialogContent} from 'material-ui/Dialog'
import PersonIcon from 'material-ui-icons/Person'
import {KeyboardArrowLeft, KeyboardArrowRight} from 'material-ui-icons'

class Modal extends Component {
  render() {

    let {users, handleRequestClose, open, currentUser} = this.props

    return (
      <Dialog open={open} onRequestClose={handleRequestClose}>
        <Avatar alt="Avatar">
          <PersonIcon />
        </Avatar>
        <DialogTitle>{users[currentUser].name}</DialogTitle>
        <span>MEMEBER FOR </span>
        <DialogContent>
          <KeyboardArrowLeft /><KeyboardArrowRight />
        </DialogContent>
      </Dialog>
    )
  }
}

export default Modal
