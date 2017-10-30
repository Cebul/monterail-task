import React, {Component} from 'react'
import Card, {CardContent} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Dialog, {DialogTitle,DialogContent} from 'material-ui/Dialog'
import PersonIcon from 'material-ui-icons/Person'
import Button from 'material-ui/Button'
import {KeyboardArrowLeft, KeyboardArrowRight} from 'material-ui-icons'

class Question extends Component {

  state = {
    open: false
  }

  handleRequestClose = () => {
   return (
     this.setState({
       open: !this.state.open
     })
   )
 }

  handleDialogOpen = () => {
    return (
        this.setState({
          open: !this.state.open
        })
      )
  }

  render() {
    const { onRequestClose } = this.props

    return (
      <div>
        <Card>
          <CardContent>
            <Button onClick={this.handleDialogOpen}>
              <Avatar src="../images/autoluk.jpg" alt="Avatar" />
            </Button>
            <Dialog open= {this.state.open} onRequestClose={this.handleRequestClose}>
              <Avatar>
                <PersonIcon />
              </Avatar>
              <DialogTitle>Dr. Halima</DialogTitle>
              <DialogContent>
                <KeyboardArrowLeft />How it all started<KeyboardArrowRight />
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    )
  }

}

export default Question
