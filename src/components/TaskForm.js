import React,{useState,useContext,useEffect} from 'react'
import {TaskListContext} from '../context/TaskListContext';


const TaskForm = () => {

    const {addTask,clearAllTasks,editTask,editItem} = useContext(TaskListContext);
    const [task,setTask] = useState('')


    const handleChange = (e)=>{
        setTask(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();

        if(editItem===null)
        {
            addTask(task)
            setTask('')
        }
        else 
        {
            editTask(task,editItem.id);
        }
        
    }

    useEffect(()=>{
        if(editItem!==null)
        {
            setTask(editItem.title)
            console.log(editItem)
        }
        else 
        {
            setTask("")
        }
    },[editItem])

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" className="task-input"  placeholder="type taks...." required value={task} onChange={handleChange} />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn" >
                    {editItem?'Edit Task':'Add Task'}
                </button>
                <button type="submit" className="btn clear-btn"  onClick={clearAllTasks} >Clear </button>
            </div>
        </form>
    )
}

export default TaskForm
