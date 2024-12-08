export const createProject = async (
    img: File | null,
    name: string,
    description: string,
    technologies: string[],
    link: string,
    git: string
) => {
    try {
        const formData = new FormData();
        if (img) {
            formData.append("img", img);
            formData.append("name", name);
            formData.append("description", description);
            formData.append("technologies", JSON.stringify(technologies));
            formData.append("link", link);
            formData.append("git", git);
        }

        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
      

        const response = await fetch(`http://localhost:8080/api/project`, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error("Failed to upload project");
        }

        console.log("Project uploaded successfully");
    } catch (error) {
        console.error("Error uploading project:", error);
    }
};
