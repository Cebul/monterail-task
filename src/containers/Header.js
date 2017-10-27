import React, {Component} from 'react'
import Button from 'material-ui/Button'
import {KeyboardArrowLeft, AddCircle} from 'material-ui-icons'
import Radio, {RadioGroup} from 'material-ui/Radio'
import {Link} from 'react-router-dom'
import Grid from 'material-ui/Grid'
import {FormControlLabel} from 'material-ui/Form'
import TextField from 'material-ui/TextField'

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
  }
}



const Title = () => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <KeyboardArrowLeft style={styles.backArrow} />
        </Grid>
        <Grid item >
          <h1>QUESTIONS</h1>
        </Grid>
        <Grid>
          <AddCircle style={styles.backArrow} />
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
      <div>
        <RadioGroup onChange={this.handleChange}>
          <FormControlLabel
            control={<Radio
              checked={this.state.value === 'my'}
              value="my" aria-label="My" />}
            label="My shelf" />
          <FormControlLabel
            control={<Radio
              checked={this.state.value === 'all'}
              value="all" aria-label="All" />}
            label="All questions" />
        </RadioGroup>
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
    <div>
      <TextField
        id="search"
        label="Search questions"
        type="search"
        margin="normal"
      />
      <Button raised>SEARCH</Button>
    </div>
  )
}

const Header = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Title />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <ToggleMenu />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <SortBy />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={6} md={12} lg={12}>
          <Search />
        </Grid>
      </Grid>
    </div>
  )
}

export default Header
