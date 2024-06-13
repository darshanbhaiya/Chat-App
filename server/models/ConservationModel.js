const mongoose=require('mongoose')

const messageSchema=new mongoose.Schema({
    text:{
        type:String,
        default:""
    },
    imageUrl:{
        type:String,
        default:""
    },
    videoUrl:{
        type:String,
        default:""
    },
    seen:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

const conservationSchema=new mongoose.Schema({
    sender:{
        type:mongoose.Schema.ObjectID,
        required:true,
        ref:'User'
    },
    receiver:{
        type:mongoose.Schema.ObjectID,
        required:true,
        ref:'User'
    },
    messages:[
        {
            type:mongoose.Schema.ObjectID,
            ref:'Message'
        }
    ]    
},{
    timestamps:true
})

const MessageModel = mongoose.model('Message',messageSchema)
const ConversationModel = mongoose.model('Conversation',conservationSchema)

module.exports={
    MessageModel,
    ConversationModel
}