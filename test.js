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
            type: String
        },
        showsize: {
            type: Number
        },
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'school'
    }
}, { timestamps: true })

const school = new mongoose.Schema({
    name: String,
    students: Number,
    isGreat: Boolean,
    staff:[{type:String}]
})



const School = mongoose.model('school', school);
const Student = mongoose.model('student', student)



connect()
    .then(async connection => {
        const schoolConfig = {
            name: 'c',
            students: 3000,
            isGreat: true,
            staff:['a', 'b', 'c']
        }


        const school2 = {
            name: 'b',
            students: 200,
            isGreat: false,
            staff:['a', 'b', 'c']
        }

        const school3 = {
            name: 'a',
            students: 500,
            isGreat: true,
            staff:['a', 'b', 'c']
        }


        const schools = await School.create([ school2, school3])

        const match = await School.find({staff:'b'}).exec()

        console.log(match);

        //     const school = await School.findOneAndUpdate({ name: 'shohadaa' }, { name: 'shohadaa' }, { upsert: true, useFindAndModify: false, new: true }).exec()
        //     const student = await Student.create({ firstname: 'moh', age: 26, school: school._id },)
        //     const student2 = await Student.create({ firstname: 'ahmed', age: 36, school: school._id })

        //     const match = await Student.find({firstname:'moh'})
        //         .populate('school')
        //         .exec()
        //     console.log(match)
    })
    .catch((err) => console.log(err))