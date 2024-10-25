const BASEurl = 'http://localhost:5000';

// Register a new user
export const registerUser = async (user) => {
    const response = await fetch(`${BASEurl}/api/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": user.username,
            "password": user.password
        })
    });
    return response.json();
}

// Login a user
export const loginUser = async (user) => {
    const response = await fetch(`${BASEurl}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": user.username,
            "password": user.password
        })
    });
    return response.json();
}

// Validate a token
export const validateToken = async (token) => {
    const response = await fetch(`${BASEurl}/api/auth/dashboard`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.json();
}
