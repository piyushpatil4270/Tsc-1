import express from "express"

import {Todo} from "../models/todos"
const router=express.Router()



let todos:Todo[]=[]

router.get("/",(req,res,next)=>{
  res.status(202).json(todos)   
})


router.post("/add",(req,res,next)=>{
    const body=req.body
    const bodyText:string=body.text
    const newTodo:Todo={
        id:new Date().toISOString(),
        text:bodyText
    }
    todos.push(newTodo)
    res.status(202).json("Todo added to list succesfully")
})



router.put('/todo/:todoId',(req,res,next)=>{
    const tId=req.params.todoId
    const todoIdx=todos.findIndex(todo=>todo.id===tId)
    if(todoIdx>=0){
     todos[todoIdx]={id:todos[todoIdx].id,text:req.body.text}
     return res.status(202).json("Todo updated successfully")
    }
    res.status(404).json("Todo not found")
})


router.delete('/todo/:todoId',(req,res,next)=>{
    const tId=req.params.todoId
    todos=todos.filter(todo=>todo.id!==tId)
    res.status(202).json("Deleted a todo")
})

export default router