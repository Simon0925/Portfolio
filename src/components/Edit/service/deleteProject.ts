export const deleteProject = async (
    id: number
) => {
    try {

       
        const response = await fetch(`http://localhost:8080/api/project/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Failed to delete project");
        }

        console.log("Project delete successfully");
    } catch (error) {
        console.error("Error delete project:", error);
    }
};
