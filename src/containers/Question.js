import React, {Component} from 'react'
import $ from 'jquery'
import QuestionsList from './QuestionsList'
import Modal from './Modal'
import '../styled/Template.css'

class Question extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      users: [],
      currentUser: 2
    }
  }



  componentWillMount() {
    this.serverRequest = $.get('./data.json', (result) => {
      const users = result
      this.setState({
        users: users
      })
    })

  } //componentDidMount


  handleRequestClose = () => {
   return (
     this.setState({
       open: !this.state.open
     })
   )
  }

  handleDialogOpen = (value) => {
    return (
        this.setState({
          open: !this.state.open,
          currentUser: value - 1
        })
      )
  }

  renderQuestions() {
    return this.state.users.map((user) => (
      <QuestionsList
        key={user.id}
        handleRequestClose={this.handleRequestClose}
        handleDialogOpen={this.handleDialogOpen}
        users={this.state.users}
        open={this.state.open}
        currentUser={this.state.currentUser}
        value={user.id}
      />
    ))
  }

  userModal() {
    return (
      <Modal
         users={this.state.users}
         currentUser={this.state.currentUser}
         open={this.state.open}
         handleRequestClose={this.handleRequestClose}
      />
    )
  }

  render() {

    if(!this.state.users) return <div className="loader"></div>

    return (
      <div>
        {this.renderQuestions()}
        {/* {this.userModal()} */}
      </div>
    )
  }

}

export default Question
