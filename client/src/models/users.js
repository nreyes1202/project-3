// const mongoose = require ("mongoose");

// const ThirdPartyProviderSchema = new mongoose.Schema({
//     provider_name: {
//         type: String,
//         default: null
//     },
//     provider_id: {
//         type: String,
//         default: null
//     },
//     provider_data: {
//         type: {},
//         default: null
//     }
// })

// const userSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     email_is_verified: {
//         type: Boolean,
//         default: false
//     },
//     password: {
//         type: String
//     },
//     third_party_auth: [ThirdPartyProviderSchema],
//     date: {
//         type: Date,
//         default: Date.now
//     }
// },
// { strict: false }
// );

// const User = mongoose.model('user', userSchema);
// module.exports = User;
