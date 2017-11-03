import React, {Component} from 'react'
import Button from 'material-ui/Button'
import Radio, {RadioGroup} from 'material-ui/Radio'
import {Link} from 'react-router-dom'
import Grid from 'material-ui/Grid'
import {FormControlLabel} from 'material-ui/Form'
import TextField from 'material-ui/TextField'
import Icon from 'material-ui/Icon'
import Divider from 'material-ui/Divider'

const styles = {
  headerStyle: {
    float: "left"
  },
  searchbox: {
    width: '50%'
  },
  backArrow: {
    fontSize: 100
  },
  linkLabel: {
    textDecoration: "none",
    fontWeight: "bold"
  },
  arrows: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: "#fff",
    color: "#B1B2B6",
    fontSize: 40,
    lineHight: 30,
    textAlign: "center",
    padding: 10,
    border: "2px solid #B1B2B6"
  },
  arrowContainer: {
    paddingLeft: 30,
    paddingRight: 30
  },
  radioButtons: {
    display: "inline-flex"
  },
  addCircle: {
    fontSize: 40
  },
  searchBox: {
    width: "80%"
  }
}

const Title = () => {
  return (
    <div>
      <Grid container>
        <Grid item lg={4}>
          <div style={styles.arrowContainer}>
            <Icon style={styles.arrows}>keyboard_arrow_left</Icon>
          </div>
        </Grid>
        <Grid item lg={4}>
          <h1>QUESTIONS</h1>
        </Grid>
        <Grid item lg={4}>
          <Icon color="primary" style={styles.addCircle}>add_circle</Icon>
        </Grid>
      </Grid>
    </div>
  )
}

class ToggleMenu extends Component {

  state = {
    value: 'my'
  }

  handleChange = (event, value) => {
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div style={styles.radioButtons}>
        <FormControlLabel
          control={<Radio
            onChange={this.handleChange}
            checked={this.state.value === 'my'}
            value="my"
            aria-label="My"
          />}
          label="My shelf" />
        <FormControlLabel
          control={<Radio
            onChange={this.handleChange}
            checked={this.state.value === 'all'}
            value="all"
            aria-label="All"
          />}
          label="All questions" />
      </div>
    )
  }
}

const SortBy = () => {
  return (
    <div>
      <span>Sort by: </span>
      <Link to="/recent">recent</Link>
      <span> or </span>
      <Link to="/hot" style={styles.linkLabel}>hot</Link>
    </div>
  )
}

const Search = () => {
  return (
    <Grid container>
      <Grid item md={8} lg={8}>
        <TextField
          id="search"
          label="Search questions"
          type="search"
          margin="normal"
          style={styles.searchBox}
        />
      </Grid>
      <Grid item md={4} lg={4}>
        <Button raised>SEARCH</Button>
      </Grid>
    </Grid>
  )
}

const Header = () => {
  return (
    <div>
      <Grid container>
        <Title />
        <ToggleMenu />
        <SortBy />
      </Grid>
      <Search />
      <Divider />
    </div>
  )
}

export default Header
