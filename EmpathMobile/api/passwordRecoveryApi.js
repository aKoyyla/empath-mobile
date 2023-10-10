import { API_URL } from '../config/api';

const forgotPassword = async (data) => {
    try {
        const response = await fetch(`${API_URL}/api/passwordRecovery/forgotPassword`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if(!response.ok) throw new Error('Network response was not ok');

        return response.json();

    }catch(error) {
        console.error('Error in forgotPassword API call: ', error);
        throw error;
    }
};

const resetPassword = async (data) => {
    try{
        const response = await fetch(`${API_URL}/api/passwordRecovery/resetPassword/:id/:token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if(!response.ok) throw new Error('Network response was not ok');

        return response.json();
    }catch(error) {
        console.error('Error in resetPassword API call: ', error);
        throw error;
    }
};

module.exports = {
    forgotPassword,
    resetPassword
}