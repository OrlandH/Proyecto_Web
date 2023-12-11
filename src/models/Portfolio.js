const {Schema, model} = require('mongoose')

const portfolioSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category :{
        type:String,
        require:true
    }
},{
    timestamps:true //Cuando se crea el registro y cuando se actualiza
})

module.exports = model('portfolio',portfolioSchema)