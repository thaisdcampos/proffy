import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem () {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/3799482?s=460&u=8ce5d524803bb323e8eed9a3504125966d67a1e0&v=4" alt="Thais de Campos"/>
        <div>
          <strong>Thais de Campos</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Por outro lado, a consolidação das estruturas facilita a criação das 
        <br/>
        condições financeiras e administrativas exigidas. 
        <br/><br/>
        O empenho em analisar a percepção das dificuldades afeta positivamente 
        <br/>
        a correta previsão das diretrizes de desenvolvimento para o futuro.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$60,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;