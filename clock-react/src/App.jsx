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
          <p>As horas relativas (em hebraico: sha’ah zemanit), ou horas haláchicas, horas variáveis ou horas sazonais são um termo usado na lei rabínica judaica que atribui 12 horas por dia/noite, ao longo do ano. Uma hora relativa não há uma medida fixa no tempo absoluto, mas varia a medida do dia – dependendo de ser verão (com dias longos e noites curtas) e de ser inverno (com dias curtos e noites longas). E ainda assim, em todas as estações um dia e uma noite são sempre divididos em 12 horas cada, o que invariavelmente gera uma “hora longa” ou uma “hora curta”.</p>
          <p>Outra característica dessa antiga prática é: diferente do padrão moderno do sistema de 12 horas, que atribui 12:00 PM como meio-dia, na tradição judaica antiga foi sempre a hora sexta do dia, enquanto a hora primeira iniciava-se com o amanhecer (de acordo com as autoridades haláchicas) ou com o nascer-do-sol (de acordo com outras fontes). A meia-noite (12:00 AM na medida oficial moderna) foi sempre a hora sexta noturna (ou da noite), a qual era marcada antes ou depois da meia-noite conhecida atualmente, dependendo de ser verão ou inverno, enquanto a hora primeira noturna iniciava-se sempre ao pôr-do-sol ou desde a aparição das primeiras 3 estrelas no céu noturno.</p>

          <img src='./clock.png' className='image' />

          <p>As horas desiguais são a divisão do dia e da noite em 12 seções/partes cada, independente da estação. São também chamadas de horas temporais, horas sazonais, horas bíblicas ou horas judaicas, bem como horas antigas ou horas romanas. São períodos de duração desigual em decorrência dos dias longos e noites curtas no verão e vice-versa no inverno. Seu uso no quotidiano foi substituído no fim da Idade Média pela atual medida de períodos de igual duração.</p>
          <p>A primeira hora temporal do dia inicia-se ao nascer-do-sol, enquanto a primeira hora da noite, ao pôr-do-sol. Por exemplo, se o dia e a noite são divididos em 12 partes periódicas, “meio-dia” e “meia-noite” estão cerca do início da hora sétima.</p>
        </section>

        <section id='calcular'>
          <div className='lg-devices'>
            <h1>Como Calcular</h1>
            <p>Para o calculo das horas, seguimos a seguinte regra: <br /> Se a hora estiver entre 00:00 e 06:00, adiciona +6 a hora.</p>
            <p>Se a hora estiver entre 07:00 e 18:00, subtraimos -6 a hora.</p>
            <p>E se a hora estiver entre 19:00 e 23:00, subtraimos -18 a hora.</p>
            <br />
            <p>Agora para o calculo dos minutos, nós pegamos a divisão inteira do minuto dividido por 5.</p>

            <h3>Exemplo</h3>
            <p><b>08:00</b><br /> Hora: 8 - 6 = 2, logo, hora segunda <br /> Minutos: 0 / 5 = 0, logo, 0 duodécimos</p>
            <p>Resultado: Hora segunda</p>
            <br />
            <p><b>16:45</b><br /> Hora: 16 - 6 = 10, logo, hora décima <br /> Minutos: 45 / 5 = 9, logo, 9 duodécimos</p>
            <p>Resultado: 9 duodécimos da hora décima</p>
            <br />
            <p><b>21:37</b><br /> Hora: 21 - 18 = 3, logo, hora terceira noturna <br /> Minutos: 37 / 5 = 7, logo, 7 duodécimos</p>
            <p>Resultado: 7 duodécimos da hora terceira noturna</p>
          </div>

        </section>

        <section id='quiz'>
          <img src='./logo.png' className='image' />
          <a href="/quiz" className='btn-primary'>Play <TbExternalLink /></a>
        </section>
      </main>

      <footer>
        <img src='./logo-alternative.png' />
        <div>
          <h3>Integrantes</h3>
          <ul>
            <li>Bernado de Melo Matuchewski - 31957226</li>
            <li>Eduardo Mendes Machado - 27879062</li>
            <li>Gabriel Silva Barros - 30349044</li>
            <li>Walter Moura e Silva Junior - 27301494</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;