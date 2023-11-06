/* Quiz Hora Duodécimo */

import './App.css';
import Header from './components/Header/Header';
import SubmitAnswer from './components/SubmitAnswer';

import { TbExternalLink } from 'react-icons/tb'


function App() {

  return (
    <>
      <main className='container'>
        <Header />

        <section id='historia'>
          <h1>História</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

          <img src='./clock.png' className='image' />

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <img src='./clock.png' className='image' />
        </section>

        <section id='calcular' >
          <h1>Como Calcular</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <h3>Exemplo</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        </section>

        <section id='quiz'>
          <img src='./logo.png' className='image' />
          <button className='btn-primary'>Play <TbExternalLink /></button>
        </section>
      </main>

      <footer>
        <img src='./logo-alternative.png' />
        <div>
          <h3>Integrantes</h3>
          <ul>
            <li>Gabriel</li>
            <li>Bernado</li>
          </ul>
          <ul>
            <li>Dudu</li>
            <li>Walter</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;