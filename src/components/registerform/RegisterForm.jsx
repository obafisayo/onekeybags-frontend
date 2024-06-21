import React from 'react'
import axios from 'axios';

const registerUser = async (userData) => {
  try {
    const response = await axios.post('/api/users/register', userData);
    console.log('User registered successfully:', response.data);
  } catch (error) {
    console.error('Error registering user:', error.message);
  }
};

// Usage:
const userData = { name: 'Alice', email: 'alice@example.com', password: 'secret123' };
registerUser(userData);

const RegisterForm = () => {
  return (
    <div className="bg-blue-500">
        RegisterForm
    </div>
  )
}

export default RegisterForm