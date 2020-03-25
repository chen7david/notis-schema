const { Schema } = require('notis')

exports = module.exports = () => new Schema({
    JoiSchema: require('./schema/joi'),
    DefaultSchema: require('./schema/default'),
})

exports.JoiSchema = require('./schema/joi')

exports.DefaultSchema = require('./schema/default')
