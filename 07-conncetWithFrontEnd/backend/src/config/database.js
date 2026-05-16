const mongoose=require('mongoose')

const connectToDb=()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("database is connected")
    })
}

module.exports=connectToDb