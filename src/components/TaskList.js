import React,{useContext} from 'react';
import {TaskListContext} from '../context/TaskListContext';
import Task from './Task';

const TaskList = () => {

    const {tasks} = useContext(TaskListContext);


    return (
        <div>
            <ul className="list">
                {tasks.length ?
                    tasks.map((task,index)=>{
                        return <Task  task={task} key={index} />
                    }): <li className="list-item text-center bg-danger text-center text-white p-3"> Not Found Items</li> 
                }
            </ul>
        </div>
    )
}


export default TaskList;