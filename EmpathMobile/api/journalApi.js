import { API_URL } from '../config/api';



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
  
  
const addJournal = async (data, token) => {
    try {
        const response = await fetch(`${API_URL}/api/journals/addJournal`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
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
    fetchAllJournals,
    addJournal,
    getAllJournals,
    getJournalById,
    updateJournalById,
    deleteJournalById
}