const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

/*

{
    "nof": false,
    "circadian": {
        "start": 0,
        "end": 0,
        "stretching": false
    },
    "medicines": {
        "minox": false,
        "ashwg": false,
        "finacet": false,
        "biokare": false
    },
    "exercises": {
        "pushups": 0,
        "chairdips": 0,
        "squats": 0,
        "legloweringdrill": 0,
        "pullups": 0,
        "nof": false
    },
    "meditation": {
        "session1": 0,
        "session2": 0,
        "session3": 0
    }
}

*/

const taskSchema = new Schema({

    circadianStart: String,
    circadianEnd: String,


    

    firstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: Number
});

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
userSchema.set('toJSON', {
    virtuals: true
});

userSchema.findById = function (cb) {
    return this.model('Users').find({id: this.id}, cb);
};

const User = mongoose.model('Users', userSchema);


exports.findByEmail = (email) => {
    return User.find({email: email});
};
exports.findById = (id) => {
    return User.findById(id)
        .then((result) => {
            result = result.toJSON();
            delete result._id;
            delete result.__v;
            return result;
        });
};

exports.createUser = (userData) => {
    const user = new User(userData);
    return user.save();
};

exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        User.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, users) {
                if (err) {
                    reject(err);
                } else {
                    resolve(users);
                }
            })
    });
};

exports.patchUser = (id, userData) => {
    return User.findOneAndUpdate({
        _id: id
    }, userData);
};

exports.removeById = (userId) => {
    return new Promise((resolve, reject) => {
        User.deleteMany({_id: userId}, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};

