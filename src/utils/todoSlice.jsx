import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    
    name:"todo",
    initialState:{
        todoList:[],
    },

    reducers:{
        addTask:(state,action)=>{
            state.todoList.push(action.payload)   
            
        },
        removeTask:(state,action)=>{
            const idToRemove = action.payload
            state.todoList = state.todoList.filter((item)=> item.id !== idToRemove)
        },
        editTask:(state,action)=>{
            const itemToEdit = state.todoList.filter((item)=>item.id === action.payload.id)
            const updatedItem = {...itemToEdit,id:action.payload.id,task:action.payload.task}
            state.todoList = state.todoList.map(item=>
                item.id === action.payload.id ?updatedItem : item
            )
        }
    }

})

export const {addTask,removeTask,editTask} = todoSlice.actions;
export default todoSlice.reducer;
