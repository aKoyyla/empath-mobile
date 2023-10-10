// api/index.js
import { API_URL } from '../config/api';
const bcrypt = require('bcrypt');
const saltRounds = 10;
const loginUser = async (data) => {
  try {
    const response = await fetch(`${API_URL}/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  } catch (error) {
    console.error('Error in loginUser API call:', error);
    throw error;
  }
};

const signUp = async (data) => {
  try {
    const response = await fetch(`${API_URL}/api/users/createUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      const responseData = await response.json();
      throw new Error(responseData.message);
    }
    return response.json();
  } catch (error) {
    console.error('Error in signUp API call:', error.message);
    throw error;
  }
};


const getSignedUrl = async (fileName, fileType) => {
  try {
    const endpoint = `${API_URL}/api/clients/getSignedUrl?fileName=${fileName}&fileType=${fileType}`;
    console.log('Fetching signed URL from endpoint:', endpoint);  // Logging the full endpoint for verification
    
    const response = await fetch(endpoint);
    
    if (!response.ok) {
      console.error('Bad response from server:', response.status, await response.text());
      throw new Error('Server responded with an error.');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching signed URL:', error);
    throw error;
  }
};


module.exports = {
    loginUser,
    signUp,
    getSignedUrl,
};