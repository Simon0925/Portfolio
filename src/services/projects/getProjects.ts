export default async function getProjects() {
    try {
        const response = await fetch('http://localhost:8080/api/project', {
            method: 'GET', 
        });

        if (!response.ok) {
            console.error('Response failed:', response.status);
            return []; 
        }

        const data = await response.json(); 
        return data; 

    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}
