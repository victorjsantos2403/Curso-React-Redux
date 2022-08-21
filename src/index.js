import ReactDOM from'react-dom';
import React  from 'react';

import './index.css';
import Primeiro from './components/basicos/Primeiro';

const el = document.getElementById('root');
// Exemplo com o reactDom
// ReactDOM.render('Olá mundo react-native', el);

// Exemplo com o jsx e React

ReactDOM.render(
    <Primeiro></Primeiro>
    ,
    el
);