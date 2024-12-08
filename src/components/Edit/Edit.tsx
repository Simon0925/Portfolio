import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { editData } from "../../store/edit/edit.slice";
import SelectTechnologies from "../SelectTechnologies/SelectTechnologies";
import Button from "../../UI/Button/Button";
import { useRef, useState } from "react";
import plug from "./img/8760611.png";
import { useProjectManager } from "../../hooks/useProjectManager/useProjectManager";


interface EditProps {
  type?: string;
}

export default function Edit({ type }: EditProps) {
  const dispatch = useDispatch();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { img, name, description, technologies, link, git, id } = useSelector(
    (state: RootState) => state.edit
  );

  const [fileImg, setFileImg] = useState<File | null>(null);

  const { handleCreate, handleUpdate, handleDelete, loading, error } =
    useProjectManager({
      img: fileImg || img,
      name,
      description,
      technologies,
      link,
      git,
      id,
    });

  const handleChange = (field: string, value: string) => {
    dispatch(editData({ [field]: value }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileImg(file);
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        dispatch(editData({ img: base64 }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  
  const handleSubmit = async (
    action: "upload" | "update" | "delete"
) => {
    if (action === "upload") {
        handleCreate()
    } else if (action === "update") {
        handleUpdate()
    } else if (action === "delete") {
        handleDelete()
    }
};

const handleButtonClick = (action: "upload" | "update" | "delete") => {
    return async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await handleSubmit(action);
    };
};

  return (
    <div className="rounded-lg w-96 shadow-lg flex flex-col bg-white mx-2 items-center">
      <form className="w-full flex flex-col gap-2 p-2">
        <img
          className="h-40 rounded-lg cursor-pointer"
          src={!img ? plug : img}
          alt="Preview"
          onClick={triggerFileInput}
        />
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <input
          className="bg-gray-800 p-4 rounded shadow-md w-full text-gray-400 outline-none"
          id="name"
          type="text"
          name="title"
          placeholder="Enter title"
          value={name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <SelectTechnologies />
        <textarea
          className="bg-gray-800 p-4 rounded-lg shadow-md w-full text-gray-400 outline-none"
          name="description"
          placeholder="Enter description"
          value={description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
        <div className="flex gap-2">
          <input
            className="bg-gray-800 p-4 rounded shadow-md w-full text-gray-400 outline-none"
            id="link"
            type="text"
            name="link"
            placeholder="Enter link"
            value={link}
            onChange={(e) => handleChange("link", e.target.value)}
          />
          <input
            className="bg-gray-800 p-4 rounded shadow-md w-full text-gray-400 outline-none"
            id="git"
            type="text"
            name="git"
            placeholder="Enter Git repository"
            value={git}
            onChange={(e) => handleChange("git", e.target.value)}
          />
        </div>
        {type === "add" ? (
          <div className="w-full flex gap-2">
             <Button
                    name={"Update"}
                    color={"blue"}
                    onClick={handleButtonClick("update")}
                />
                <Button
                    name={"Delete"}
                    color={"red"}
                    onClick={handleButtonClick("delete")}
                />
          </div>
        ) : (
          <div className="w-full flex gap-2">
                <Button
                    name={"Upload"}
                    color={"green"}
                    onClick={handleButtonClick("upload")}
                />
          </div>
        )}
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
