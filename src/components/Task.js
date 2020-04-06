import React,{useContext} from 'react'
import {TaskListContext} from '../context/TaskListContext';

export default function Task({task}) {

    const {deleteTask,findItem} = useContext(TaskListContext);

    const deleteItem = (id)=>{
        deleteTask(id)
    }

    return (
        <li className="list-item border p-2">
            <span>{task.title}</span>
            <div>
                <button className="btn-delete task-btn" onClick={()=>deleteItem(task.id)}>
                    <i className="fa fa-trash"></i>
                </button>
                <button className="btn-edit task-btn" onClick={()=>findItem(task.id)}>
                    <i className="fa fa-edit"></i>
                </button>
            </div>
        </li>
    )
}
