import React from 'react';
import {MdDeleteSweep} from 'react-icons/md';

export const taskItem = ({task,deleteTask, toggleCheck}) => {
  return (
    <li className='items'>
        <div className='items-text'>
            <input type='checkbox'
            checked={task.checked}
            onChange={()=> toggleCheck(task.taskName)}/>
            <p className={task.checked? 'Check' : ''}>{task.taskName}</p>
        </div>
        <MdDeleteSweep className='delete-icon'
        onClick={()=> deleteTask(task.taskName)}/>
    </li>
  )
}

export default taskItem;