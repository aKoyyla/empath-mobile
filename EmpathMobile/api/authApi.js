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

const fetchAllJournals = async () => {
  try {
    const response = await fetch(`${API_URL}/api/journals/getAllJournals`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) throw new Error('Network response was not ok');

    return response.json();
  } catch (error) {
    console.error('Error in fetchAllJournals API call:', error);
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

const addJournal = async (data) => {
  try {
    const response = await fetch(`${API_URL}/api/journals/addJournal`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) throw new Error('Failed to add journal');

    return response.json();
  } catch (error) {
    console.error('Error in addJournal API call:', error);
    throw error;
  }
};

const getAllJournals = async () => {
  try {
    const response = await fetch(`${API_URL}/api/journals/getAllJournals`);
    
    if (!response.ok) throw new Error('Failed to fetch journals');

    return response.json();
  } catch (error) {
    console.error('Error in getAllJournals API call:', error);
    throw error;
  }
};

const getJournalById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/api/journals/journals/${id}`);

    if (!response.ok) throw new Error('Failed to fetch the journal');

    return response.json();
  } catch (error) {
    console.error('Error in getJournalById API call:', error);
    throw error;
  }
};

const updateJournalById = async (id, data) => {
  try {
    const response = await fetch(`${API_URL}/api/journals/journals/${id}`, {
      method: 'PUT', // Assuming the backend uses PUT for updates
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) throw new Error('Failed to update the journal');

    return response.json();
  } catch (error) {
    console.error('Error in updateJournalById API call:', error);
    throw error;
  }
};

const deleteJournalById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/api/journals/journals/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) throw new Error('Failed to delete the journal');

    return response.json();
  } catch (error) {
    console.error('Error in deleteJournalById API call:', error);
    throw error;
  }
};

module.exports = {
    loginUser,
    signUp,
    getSignedUrl,
    fetchAllJournals,
    addJournal,
    getAllJournals,
    getJournalById,
    updateJournalById,
    deleteJournalById
};