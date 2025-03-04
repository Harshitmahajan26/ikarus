const mongoose = require('mongoose');

const ConfigurationSchema = new mongoose.Schema({
    config: Object
});

module.exports = mongoose.model('Configuration', ConfigurationSchema);
