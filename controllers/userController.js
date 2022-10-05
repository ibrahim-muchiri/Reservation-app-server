import User from '../models/userModel.js';


export const getUsers = async(req, res, next) =>{
    const user = await User.find(req.body);
    
    res.status(201).json(user);
    
    next();
    }

    export const getUser = async(req, res, next) =>{
        const user = await User.findById(req.params.id);
        
        res.status(201).json(user);
        
        next();
        }

    export const updateUser = async(req, res, next) =>{
        const user = await User.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true});
        
        res.status(201).json(user);
        
        next();
        }

    export const deleteUser = async(req, res, next) =>{
           const user = await User.findByIdAndDelete(req.params.id);
        
        res.status(201).json({
            message: "Deleted successfully!"
        });
        
        next();
        }