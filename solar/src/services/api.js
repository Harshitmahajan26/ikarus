import axios from 'axios';

const API_URL = 'http://localhost:5000/api/configurations';

export const saveConfiguration = async (config) => {
    try {
        await axios.post(API_URL, { config });
        console.log("Configuration saved successfully");
    } catch (error) {
        console.error("Error saving configuration", error);
    }
};

export const loadConfigurations = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error loading configurations", error);
        return [];
    }
};
