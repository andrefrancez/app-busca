import React, { Component } from 'react'
import Busca from './Components/Busca.js'
import { createClient } from 'pexels'
import ListaImagens from './Components/ListaImagens.js'
import PexelsLogo from './Components/PexelsLogo.js'

class App extends Component {
  pexelsClient = null
  state = { 
    pics: [] 
  }

  componentDidMount() {
    this.pexelsClient = createClient(window.env.PEXELS_KEY)
  }

  onBuscaRealizada = (termo) => {
    this.pexelsClient.photos.search({
      query: termo
    }).then(pics => this.setState({
      pics: pics.photos
    }))
  }

  render() {
    return (
      <div className='grid justify-content-center m-auto w-9 border-round border-1 border-400'>
        <div className="col-12">
          <PexelsLogo />
        </div>
        <div className='col-12'>
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className='col-8'>
          <Busca onBuscaRealizada={this.onBuscaRealizada} />
        </div>
        <div className="col-8">
          <div className="grid">
            <ListaImagens pics={this.state.pics} />
          </div>
        </div>
      </div>
    )
  }
}

export default App