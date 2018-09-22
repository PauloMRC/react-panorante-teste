import React from 'react'
import brand from './brand.png';
import login from './login.png';

const Menu = () => (
  <header>
    <div class="header">
      <div className="logo">
        <a href="https://www.panorante.com.br" title="Panorante" id="brd-link" tabindex="6">
          <img width="80%" src={brand} className="App-logo" alt="brand" />
          <title id="brd-title">Panorante</title>
        </a>
      </div>
      <div className="menu">
        <div><a href="https://www.panorante.com.br/Perfil/Profissionais">Profissionais</a></div>
        <div><a href="https://www.panorante.com.br">Lojas</a></div>
        <div><a href="https://www.panorante.com.br">Serviços</a></div>
        <div><a href="https://www.panorante.com.br/Contato/Contato">Fale conosco</a></div>
      </div>
      <div className="login">
        <a href="https://www.panorante.com.br" title="Login" id="brd-link" tabindex="6">
          <img width="80%" src={login} className="App-logo" alt="brand" />
          <title id="brd-title">Login</title>
        </a>
      </div>
    </div> 
  </header>
)

export default Menu