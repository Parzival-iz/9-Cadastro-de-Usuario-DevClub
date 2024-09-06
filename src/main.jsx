import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <App />
  </StrictMode>,
)

//Salve, guys. Acabei de começar o módulo de React, porém me deparei com um erro bem chato e não consigo resolver. Eu iniciei o projeto juntamente com o Rodolfo, fazendo EXATAMENTE a mesma coisa. Porém, quando tento rodar o site ele aparece totalmente em branco, sem nenhuma das Tags que coloquei. 

//Uma coisa também é que o meu código do arquivo “main.jsx” parece bem diferente do Rodolfo por não conter “React” em algumas linhas de código.

//Sei que pode ser muita coisa, mas peço que por favor me ajudem com isso. Agradeço! /

