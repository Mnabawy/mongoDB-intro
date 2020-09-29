const mongoose = require('mongoose');


const connect = () => {
    return mongoose.connect('mongodb://test:test123@cluster0-shard-00-00.xshiy.gcp.mongodb.net:27017,cluster0-shard-00-01.xshiy.gcp.mongodb.net:27017,cluster0-shard-00-02.xshiy.gcp.mongodb.net:27017/MERN?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

const student = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    favFood: [{ type: String }],
    age: {
        type: Number,
        required: true
    },
    info: {
        school: {
            type: string
        },
        showsize: {
            type: Number
        }
    }

})

const Student = mongoose.model('student', student)

connect()
    .then(async connection => {
        const student = await Student.create({
            firstname: 'moh'
        })
        const student = await Student.find({ firstname: 'moh' })
        const found = await Student.findById('dsadas')
        const updated = await Student.findByIdAndUpdate('', {})
        console.log(student);
    })
    .catch((err) => console.log(err))