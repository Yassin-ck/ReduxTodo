import React,{ useRef } from 'react'
import ListItem from './ListItem'
import { useDispatch } from 'react-redux'
import { addTask } from '../utils/todoSlice'
import './style.css'


const AddItem = () => { 
    const inputRef = useRef(null)
    const dispatch = useDispatch()

    const taskHandler = (e)=>{
        e.preventDefault()
        let task =inputRef.current.value
        if (task.trim().length !== 0){

            let id = Math.floor(Math.random()*100000);
            dispatch(addTask({task,id}))
            inputRef.current.value=''
        }
    }
  return (
    <div className='parentContainer'>
    <div  className='AddMainContainer'>
    <h2 style={{textAlign:'center'}}>TODO</h2>
    <form onSubmit={taskHandler}>
    <input type='text' name='addtask' autoFocus placeholder='Add your tasks here' ref={inputRef} />
    <input type='submit' />
    </form>
    <ListItem />
    </div>
    </div>
  )
}

export default AddItem