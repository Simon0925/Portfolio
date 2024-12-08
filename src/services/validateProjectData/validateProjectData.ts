const isValidURL = (url: string): boolean => {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
};

export const validateProjectData = (
    img: File | string,
    name: string,
    description: string,
    technologies: string[],
    link: string,
    git: string,
    id?: number 
) => {
    if (!name || name.trim().length === 0) {
        throw new Error("Name is required and cannot be empty.");
    }

    if (!description || description.trim().length === 0) {
        throw new Error("Description is required and cannot be empty.");
    }

    if (!Array.isArray(technologies) || technologies.length === 0) {
        throw new Error("Technologies must be an array and cannot be empty.");
    }

    if (!link || !isValidURL(link)) {
        throw new Error("A valid project link is required.");
    }

    if (!git || !isValidURL(git)) {
        throw new Error("A valid Git repository link is required.");
    }

    if (id !== undefined && (typeof id !== "number" || id <= 0)) {
        throw new Error("If provided, project ID must be a positive number.");
    }

    if (typeof img !== "string" && !(img instanceof File)) {
        throw new Error("Invalid image format. Please provide a valid file or URL.");
    }
};
