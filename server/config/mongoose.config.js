const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/exam",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:true,
    useCreateIndex: true
})
    .then(()=> console.log("established a connection with the db, exam"))
    .catch((err)=> {console.log("failed to establish a connection with the db"), err})
