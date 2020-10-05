const mongoose = require('mongoose');
const post = require('./exercises/queries/post');


const connect = () => {
    return mongoose.connect('mongodb://test:test123@cluster0-shard-00-00.xshiy.gcp.mongodb.net:27017,cluster0-shard-00-01.xshiy.gcp.mongodb.net:27017,cluster0-shard-00-02.xshiy.gcp.mongodb.net:27017/MERN?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

const school = new mongoose.Schema({
    name: String,
    students: Number,
    isGreat: Boolean,
    staff:[{type:String}]
})

school.index({
    name:1
},{unique:true})

//middleware
school.post('save', function(){
    console.log('after save');
})

const School = mongoose.model('school', school);
connect()
    .then(async connection => {
        const mySchool = await School.create({
            name:'school name',
            staff:['v','b','c']
        })

        const schoolNAme = await School.findOne({name: "school name"})
        console.log(schoolNAme);
    })
    .catch((err) => console.log(err))