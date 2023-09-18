import React, { useRef, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTask,editTask } from '../utils/todoSlice'
import './style.css'
import { BiSolidEditAlt } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { RxUpdate } from 'react-icons/rx'

const ListItem = () => {
    const addedTasks = useSelector(state=>state.todo.todoList)
    const dispatch = useDispatch()
    const [idEdit,setIdEdit] = useState(-1)
    const editRef = useRef(null)

    const deleteHandler = (e)=>{

            dispatch(removeTask(e)) 
    }

    const editHandler = (e)=>{
        setIdEdit(-1)
        const updation = editRef.current.value
        if (updation.trim().length !==0){

            dispatch(editTask({id:e,task:updation}))
        }
    }
    const reversedTasks = addedTasks.slice().reverse();
    return (
    <div>
    {reversedTasks.map((item)=>(
        <div className='listMainContainer'>
        {idEdit === item.id ? 
        <div key={item.id} className='list_Input_edit' style={{margin:'20px'}}>
        <input name='task' defaultValue={item.task} autoFocus placeholder='update your task' ref={editRef} required />
        <button onClick={()=>editHandler(item.id)}><RxUpdate /></button>
        </div>
        :<div key={item.id} className='list_Input'>
        <p>{item.task}</p>
        <div>
        <button onClick={(e)=>setIdEdit(item.id)}>< BiSolidEditAlt /></button>
        <button onClick={()=>deleteHandler(item.id)} style={{backgroundColor:'maroon'}}><AiFillDelete /></button>
        </div>
        </div>}
        </div>
    ))}
    </div>
  )
}

export default ListItem