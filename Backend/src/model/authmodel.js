const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

        user_name: {
            type: String,
            required: true
        },
        user_phone: {
            type: Number,
            required: true
        },
        user_email: {
            type: String,
            required: true
        },
        user_password: {
            type: String,
            required: true
        },
      
    },
    {
        timestamps: true,
        versionKey: false
    });
    
    module.exports = mongoose.model('Product', UserSchema);
    
    