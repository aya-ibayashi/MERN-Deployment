const {Pirate} = require('../models/pirate.models')

module.exports.create = (req, res) => {
    Pirate.create(req.body)
        .then(newPirate => res.json(newPirate))
        .catch(err=>res.status(400).json(err))
}

module.exports.getAll = (_, res) => {
    Pirate.find().sort({name:'asc'})
        .then(list=>res.json(list))
        .catch(err=>res.json(err));
}
module.exports.getOne = (req, res) => {
    Pirate.findOne({_id:req.params.id})
        .then(pirate=>res.json(pirate))
        .catch(err=>res.status(400).json(err))
}
module.exports.update = (req, res) => {
    Pirate.updateOne(
            {_id:req.params.id},
            req.body,
            {new:true,runValidators:true})
        .then(result => res.json(result))
        .catch(err=>res.status(400).json(err))
}
module.exports.delete = (req,res)=>{
    Pirate.deleteOne({_id:req.params.id})
        .then(result=>res.json(result))
        .catch(err=>res.status(400).json(err))
}