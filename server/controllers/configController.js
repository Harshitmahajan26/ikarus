const Configuration = require('../models/Configuration');

// Save a new configuration
exports.saveConfiguration = async (req, res) => {
    try {
        const newConfig = new Configuration({ config: req.body.config });
        await newConfig.save();
        res.status(201).json({ message: 'Configuration saved!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save configuration' });
    }
};

// Load saved configurations
exports.loadConfigurations = async (req, res) => {
    try {
        const configs = await Configuration.find();
        res.json(configs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to load configurations' });
    }
};
