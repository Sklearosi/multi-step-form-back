import { Request, Response } from "express";
import User from "models/User";

export const createUser = async (req: Request, res: Response) => {

    const {
        name,
        email,
        phone,
        plan: { monthly, yearly },
        addons: { onlineServices, largerStorage, customizableProfile },
        id,
      } = req.body;

    try {
        const newUser = await new User({
            name,
            email,
            phone,
            plan: {
              monthly,
              yearly,
            },
            addons: {
              onlineServices,
              largerStorage,
              customizableProfile,
            },
            id,
          });

          newUser.save();

          return res.status(201).json(newUser)
    } catch (error) {
        return res.status(401).json(error)
    }
 

  

  
};
