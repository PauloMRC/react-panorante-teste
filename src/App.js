import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
import SearchForm from './components/SearchForm'
import Results from './components/Results'
import Menu from './components/Menu'

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
            <Grid>
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'flex-end', height: '40vh'}}>
                <p class="slogan"> A REDE SOCIAL DA SUA CASA </p>
              </div>
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'flex-start', height: '30vh'}}><SearchForm /></div>
            </Grid>
          <Results />
      </div>
    )
  }
}

export default App
