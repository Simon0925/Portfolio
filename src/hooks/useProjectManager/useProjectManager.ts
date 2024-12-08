import { useState, useCallback } from "react";
import { createProject } from "../../services/projects/createProject";
import { updateProject } from "../../services/projects/updateProject";
import { deleteProject } from "../../services/projects/deleteProject";


interface UseProjectManagerProps {
  img?: File | string | null;
  name: string;
  description: string;
  technologies: string[];
  link: string;
  git: string;
  id?: number;
}

export const useProjectManager = ({
  img,
  name,
  description,
  technologies,
  link,
  git,
  id,
}: UseProjectManagerProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCreate = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      await createProject(img as File, name, description, technologies, link, git);
      console.log("Project created successfully");
    } catch (err) {
      console.error(err);
      setError("Failed to create project");
    } finally {
      setLoading(false);
    }
  }, [img, name, description, technologies, link, git]);

  const handleUpdate = useCallback(async () => {
    try {
      if (!id) throw new Error("Project ID is required for updates");
      setLoading(true);
      setError(null);
      await updateProject(
        img || "",
        name,
        description,
        technologies,
        link,
        git,
        id
      );
      console.log("Project updated successfully");
    } catch (err) {
      console.error(err);
      setError("Failed to update project");
    } finally {
      setLoading(false);
    }
  }, [img, name, description, technologies, link, git, id]);

  const handleDelete = useCallback(async () => {
    try {
      if (!id) throw new Error("Project ID is required for deletion");
      setLoading(true);
      setError(null);
      await deleteProject(id);
      console.log("Project deleted successfully");
    } catch (err) {
      console.error(err);
      setError("Failed to delete project");
    } finally {
      setLoading(false);
    }
  }, [id]);

  return {
    handleCreate,
    handleUpdate,
    handleDelete,
    loading,
    error,
  };
};
