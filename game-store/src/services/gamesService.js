const baseUrl = "http://localhost:3030/data/games"; 
const token = localStorage.getItem("accessToken")
export async function create(gameData) {
    const token = localStorage.getItem("accessToken")
    try {
        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'X-Authorization': token 
            },
            body: JSON.stringify(gameData)
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error creating game:', error);
        throw error;
    }
}

export async function getAll() {
    try {
        const response = await fetch(baseUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); 
        return Object.values(data); 

    } catch (err) {
        console.error(err.message);
        return []; 
    }
}

export async function getOne(gameId){
    const response = await fetch(`${baseUrl}/${gameId}`)
    

    const result = await response.json()
    console.log(result)
    return result
}

export async function edit(id, gameData) {
    const token = localStorage.getItem("accessToken");
    try {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': "application/json",
                'X-Authorization': token 
            },
            body: JSON.stringify(gameData)  
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error editing game:', error);
        throw error;
    }
}

export async function remove(id) {
    const token = localStorage.getItem("accessToken"); 

    try {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: "DELETE",
            headers: {
                'X-Authorization': token,  
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        return response.json(); 
    } catch (error) {
        console.error('Error deleting the game:', error);
        throw error; 
    }
}
