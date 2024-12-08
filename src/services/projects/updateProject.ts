import { validateProjectData } from "../validateProjectData/validateProjectData";



export const updateProject = async (
    img: File | string,
    name: string,
    description: string,
    technologies: string[],
    link: string,
    git: string,
    id: number
) => {
    try {

        validateProjectData(img, name, description, technologies, link, git, id);

        const formData = new FormData();
     
        if (img) {
            formData.append("img", img);
        }

        formData.append("name", name);
        formData.append("description", description);
        formData.append("technologies", JSON.stringify(technologies));
        formData.append("link", link);
        formData.append("git", git);

       
        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });

 
        const response = await fetch(`http://localhost:8080/api/project/${id}`, {
            method: "PUT",
            body: formData,
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to upload project: ${errorText || response.statusText}`);
        }

        console.log("Project uploaded successfully");
    } catch (error) {
        console.error("Error uploading project:", error);
    }
};
