# Projeto Duodécimo

### Grupo:
- Bernardo de Melo Matuchewski - 31957226
- Eduardo Mendes Machado - 27879062
- Gabriel Silva Barros - 30349044
- Walter Moura e Silva Junior - 27301494

<h1 align="center"><b>Duodécimos</b></h1
                                                                                                                         
![duodecimo](https://github.com/BerPGR/atividade-duodecimos/assets/76067595/28bda8d6-721b-4139-88d8-560363980925)
                                                                                                     

<br>

- **Languages**:

    ![Python](https://img.shields.io/badge/Python%20-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white)
    ![JavaScript](https://img.shields.io/badge/JavaScript%20-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

<br>   
    
- **Front-End Development**:

   ![HTML5](https://img.shields.io/badge/HTML5%20-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
   ![CSS3](https://img.shields.io/badge/CSS%20-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
   ![JavaScript](https://img.shields.io/badge/JavaScript%20-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
   ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)

<br>
</p>

<br>

## Descrição
O projeto Duodécimo tem como objetivo demonstrar como calcular as horas judaicas. Ele foi desenvolvido em React, utilizando conceitos como useState, useContext, useEffect, useSelect e React Router. O código base foi escrito em JavaScript e Python para proporcionar uma base sólida para a implementação em React.

## Estrutura do Projeto
O projeto consiste em duas rotas, e que para uma boa eficiência no código foi usado o React Router e useContext:

### "/" -> Home
* Rota principal que condiz com a Home. Nessa rota há seções como a história da hora, como calcular, e um link que leva para a rota de quiz.

### "/quiz" -> Quiz
* A rota em questão é um quiz interativo, onde os usuários podem responder a uma série de perguntas sobre o cálculo do duodécimo. 
* Ao acessar esta rota, os usuários são apresentados às perguntas e opções de resposta.
* Aqui é onde o componente useContext entra em cena, para gerenciar o estado global das respostas e outras informações relevantes do quiz.

## Implementação Técnica
A implementação técnica envolve o uso das seguintes funcionalidades React:

- **UseState:** Utilizado para gerenciar o estado do aplicativo, permitindo a atualização dinâmica da interface do usuário.
  
- **UseContext:** Empregado para compartilhar dados globalmente entre os componentes, especialmente na implementação do Quiz.

- **UseEffect:** Utilizado para realizar operações assíncronas, como chamadas à API para buscar dados ou executar a lógica relacionada ao ciclo de vida do componente.

- **UseSelect:** Usado para criar seletores de escolha personalizados, proporcionando uma experiência de usuário mais amigável.

## Hospedagem
O código foi hospedado no Vercel e está acessível através do seguinte link: [Duodécimo no Vercel](https://duotimer.vercel.app/).

## Testes e Dificuldades
A fase de testes concentrou-se principalmente na rota de Quiz, onde foram verificadas a lógica do relógio e a funcionalidade do quiz. As dificuldades mais significativas foram encontradas durante a implementação do Quiz usando o UseContext, exigindo uma cuidadosa gestão do estado global para garantir um funcionamento suave.

## Conclusão
O projeto Duodécimo oferece uma abordagem interativa e educativa para entender o cálculo das horas judaicas, incorporando conceitos avançados do ecossistema React para proporcionar uma experiência de usuário fluida e envolvente.
