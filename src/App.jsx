import React, { useState, useEffect } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskItem from './components/taskItem';
import img from './img/logo.png'



const App = () => {

  const [toDoList,  setToDoList] = useState([]);

  const addTask = (taskName)=>{
    const newTask = {taskName, checked: false};
    const newToDoList = [...toDoList, newTask];
    setToDoList(newToDoList);
    localStorage.setItem('toDoList', JSON.stringify(newToDoList));
  };

  useEffect(() => {
    const storedToDoList = localStorage.getItem('toDoList');
    if (storedToDoList) {
      setToDoList(JSON.parse(storedToDoList));
    }
  }, []);

  function deleteTask(deleteTaskName) {
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar esta tarea?');

    if (confirmDelete) {
      const updatedToDoList = toDoList.filter((task) => task.taskName !== deleteTaskName);
      setToDoList(updatedToDoList);
      localStorage.setItem('toDoList', JSON.stringify(updatedToDoList));
    }
  }
  
  function toggleCheck(taskName){
    const updatedToDoList = toDoList.map((task) =>
    task.taskName === taskName ? { ...task, checked: !task.checked } : task
  );
  setToDoList(updatedToDoList);
  localStorage.setItem('toDoList', JSON.stringify(updatedToDoList));

}

  return( <>
  <div className="container">
    <img className='logo-img' src={img} alt="" />
    <h1>
      Lista de tareas
    </h1>
    <h4>Alumno: Franco Parera</h4>

    <TaskInput addTask={addTask}/>

    <div className='toDoList'>
      <span className='title'>Lista Tareas</span>
      <ul className='list-items'>
        {toDoList.map((task, key) =>( 
        <TaskItem task={task} key={key}
        deleteTask={deleteTask}
        toggleCheck={toggleCheck}/>
        ))}
      </ul>

      {toDoList.length ===0?( <p className='notificacion'>No hay Tareas pendientes</p> ) : null}
    </div>
  </div>

  </>
  );
};

export default App;
