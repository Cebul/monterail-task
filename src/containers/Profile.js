import React, { Component } from 'react'
import Dialog, {DialogTitle} from 'material-ui/Dialog'
import PersonIcon from 'material-ui-icons/Person'
import Avatar from 'material-ui/Avatar'

class Profile extends Component {
  render() {
    return (
      <div>
        <Dialog>
          <Avatar>
            <PersonIcon />
          </Avatar>
          <DialogTitle>Dr. Halima</DialogTitle>
        </Dialog>
      </div>
    )
  }
}

export default Profile
