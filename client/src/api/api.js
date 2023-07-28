import axios from 'axios';

const validateAddress = async (data) => {
	try {
		const response = await axios.post('/api/validate-address', data);
		return response.data;
	} catch (error) {
		// Handle error
		console.error(error);
	}
};

export { validateAddress };
