import mongoose from "mongoose";
import { UserType } from "types";
import { v4 as uuid} from "uuid"

const userSchema = new mongoose.Schema<UserType>({
    name: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    phone: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    plan:{
        monthly:{
        type: mongoose.Schema.Types.String,
        required: true
        },
        yearly:{
        type: mongoose.Schema.Types.String,
        required: true
        }
    },
    addons: {
        onlineServices: {
        type: mongoose.Schema.Types.Boolean,
        required: true
        },
        largerStorage: {
        type: mongoose.Schema.Types.Boolean,
        required: true
        },
        customizableProfile: {
        type: mongoose.Schema.Types.Boolean,
        required: true
        }
    },
    id: {
        type: mongoose.Schema.Types.String,
        required: true,
        default: uuid
    }
    
})


const User = mongoose.model("User", userSchema)

export default User;