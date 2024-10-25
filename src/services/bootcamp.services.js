const BASEurl = 'http://localhost:5000';

//Get all bootcamps
export const getAllBootcamps = async (token) => {
    const response = await fetch(`${BASEurl}/api/auth/bootcamps/all`,
        {
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + token
            }
        });
    return response.json();
}
// Create a new bootcamp
export const createBootcamp = async (token, bootcamp) => {
    const response = await fetch(`${BASEurl}/api/auth/bootcamps/create`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + token
            },
            body: JSON.stringify({
                "name": bootcamp.name,
                "description": bootcamp.description,
                "technologies": bootcamp.technologies
            })
        });
    return response.json();
}

// Update a bootcamp
export const updateBootcamp = async (token, bootcamp) => {
    const response = await fetch(`${BASEurl}/api/auth/bootcamps/update/${bootcamp.id}`,
        {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + token
            },
            body: JSON.stringify({
                "name": bootcamp.name,
                "description": bootcamp.description,
                "technologies": bootcamp.technologies
            })
        });
    return response.json();
}

// Delete a bootcamp
export const deleteBootcamp = async (token, id) => {
    const response = await fetch(`${BASEurl}/api/auth/bootcamps/delete/${id}`,
        {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + token
            }
        });
    return response.json();
}

