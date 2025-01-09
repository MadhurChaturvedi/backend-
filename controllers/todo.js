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
            todo:newTodo
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error,
        })
    }
}

export const getAllTodos = async (req,res)=>{
   try {
    const todos = await Todo.find();

    if(todos.length == 0){
        res.status(400).json({
            success: true,
            message: "No Todos",
            todos:[]
        })
    }
    res.status(200).json({
        success: true,
        message: "All fields are required!",
        todos:todos
    })
   } catch (error) {
    res.status(400).json({
        success: false,
        message: error,
    })
   }
}

export const updateTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const _id = req.params.id;

        // Update the todo using findByIdAndUpdate
        const updateTodo = await Todo.findByIdAndUpdate(
            _id, 
            { title, description }, // Updates to apply
            { new: true} // Options: return the updated document and run validations
        );

        if (!updateTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Todo Updated",
            todo: updateTodo,
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || "An error occurred",
        });
    }
};


export const deleteTodo = async (req, res) => {
    try {
        const _id = req.params.id;

        // Find the Todo by ID and delete it
        const deletedTodo = await Todo.findByIdAndDelete(_id);

        if (!deletedTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Todo deleted successfully",
            todo: deletedTodo,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || "An error occurred",
        });
    }
};


// export const getSingleTodos = async (req,res)=>{
//     try {
//         const {id} = req.params
//      const todos = await Todo.findById({_id:id});
 
//      if(!todos){
//          res.status(400).json({
//              success: true,
//              message: "There is no Todo with this ID",
//          })
//      }
//      res.status(200).json({
//          success: true,
//          message: "All fields are required!",
//          todos:todos
//      })
//     } catch (error) {
//      res.status(400).json({
//          success: false,
//          message: error,
//      })
//     }
//  }
