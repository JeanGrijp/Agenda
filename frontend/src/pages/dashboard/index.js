import React, {useState} from 'react';
import api from '../../services/api';
import './dashboard.css'
import chart from '../../imagens/chart-down.svg'
import chartCopy from '../../imagens/chart-down copy.svg'
import task from '../../imagens/tasks.svg'
import taskCopy from '../../imagens/tasks copy.svg'
import money from '../../imagens/money.svg'
import moneyCopy from '../../imagens/money copy.svg'
import topo from '../../imagens/wavesOpacityMobile.svg'


export default function Dashboard() {
  return (
    <>
    <img className="topo" src={topo} alt="" srcset=""/>
    <nav className="navSideBar">
      <div className="um"></div>
      <a className="task1" href=""> <img src={task} alt="" srcset=""/> Tarefas</a>
      <div className="dois"></div>
      <a className="task2" href=""> <img src={chartCopy} alt="" srcset=""/> Calendário</a>
      <div className="tres"></div>
      <a className="task3" href=""> <img src={moneyCopy} alt="" srcset=""/> Financeiro</a>
      <div className="quatro"></div>
    </nav>
    <div className="containerDashboardTask">
      <div></div>
    </div>
    </>
  )
};
