import {Todo} from '../model/todo.js'

export const createTodo  = async (req,res) => {
    try {
        const {title, description} = req.body;

        if(!title || !description){
            return res.status(400).json({
                success: false,
                message: "All fields are required!",
            })}
        
        let newTodo = await new Todo({
            title,
            description
        })
        await newTodo.save();
        res.status(200).json({
            success:true,
            message:"Todo Created",
            newTodo
        })

    } catch (error) {
        
    }
}