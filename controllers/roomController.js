import Room from "../models/roomModel.js";
import Hotel from "../models/hotelModel.js"
import { createError } from "../utils/error.js";

export const createRoom = async (req, res, next) =>{

    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);

    try{
        const saveRoom = await newRoom.save();
        try{
            await Hotel.findByIdAndUpdate(hotelId, {$push : {rooms: saveRoom._id},
            });
        } catch(err) {
            next(err)
        }
        res.status(201).json(saveRoom);
    } catch(err) {
        next(err)
    }
}

    
    export const getRooms = async(req, res, next) =>{
        const room = await Room.find(req.body);
        
        res.status(201).json(room);
        
        next();
        }
    
        export const getRoom = async(req, res, next) =>{
            const room = await Room.findById(req.params.id);
            
            res.status(201).json(room);
            
            next();
            }
    
        export const updateRoom = async(req, res, next) =>{
            const room = await Room.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true});
            
            res.status(201).json(room);
            
            next();
            }

            export const updateRoomAvailability = async(req, res, next) =>{
                try{
                    const room = await Room.updateOne(
                        { "roomNumbers._id": req.params.id},
                        {
                            $push: {
                                "roomNumbers.$.unavailableDates": req.body.dates//used when updating nested properties
                            }
                        }
                    )              
                
                res.status(201).json(room);
                }catch(err){
                    next(err);
                }               
                
                }
    
        export const deleteRoom = async(req, res, next) =>{
            const hotelId = req.params.hotelId;
            try{
                await Room.findByIdAndDelete(req.params.id);
                try{
                    await Hotel.findByIdAndUpdate(hotelId, {$pull : {rooms: req.params.id},
                    });
                } catch(err) {
                    next(err)
                }
                           
            res.status(201).json("Room has been deleted successfully!")                
            } catch(err){
                next(err)
            }
            
            next();
            }