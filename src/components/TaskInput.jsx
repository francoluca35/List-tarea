import React, { useState } from 'react'

const TaskInput = ({addTask}) => {
    const [task, SetTask] = useState('');

   
    function handleInputValue(event){
        SetTask(event.target.value);
    }
// console.log(task);

    function handleAddTask(event){
        event.preventDefault();
        if(task.trim() === '') return;
        addTask(task);
        SetTask('');
    }

  return (
    <div>
        <form className='inputAdd'
        onSubmit={handleAddTask}>
            <input type='text'
            value={task} 
            placeholder='Añadir a la lista'
            onChange={handleInputValue}
            />
            <button>+</button>
        </form>
    </div>
  )
}

export default TaskInput;