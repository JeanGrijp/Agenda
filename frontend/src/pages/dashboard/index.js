import React, {useState, useEffect} from 'react';
import api from '../../services/api'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import './dashboard.css'
// import chart from '../../imagens/chart-down.svg'
import chartCopy from '../../imagens/chart-down copy.svg'
import task from '../../imagens/tasks.svg'
// import taskCopy from '../../imagens/tasks copy.svg'
// import money from '../../imagens/money.svg'
import moneyCopy from '../../imagens/money copy.svg'
import topo from '../../imagens/wavesOpacityMobile.svg'


export default function Dashboard() {
  useEffect(() => {
    async function loadTasks() {
      const user_id = localStorage.getItem('usuario')
      const resposta = await api.get('/tarefas', {
        headers: {user_id}
      })
      console.log(resposta.data)
    }
    loadTasks()
  }, [])

  return (
    <>
    <img className="topo" src={topo} alt="" srcSet=""/>
    <nav className="navSideBar">
      <div className="um"></div>
      <a className="task1" href=""> <img src={task} alt="" srcSet=""/> Tarefas</a>
      <div className="dois"></div>
      <a className="task2" href=""> <img src={chartCopy} alt="" srcSet=""/> Calendário</a>
      <div className="tres"></div>
      <a className="task3" href=""> <img src={moneyCopy} alt="" srcSet=""/> Financeiro</a>
      <div className="quatro"></div>
    </nav>
    <div className="containerDashboardTask">
      <h1>Tasks</h1>
      <div className="containerTasks">
        <div className="task1"></div>
        <div className="task2"></div>
        <div className="task3"></div>
      </div>
    </div>
    </>
  )
};
