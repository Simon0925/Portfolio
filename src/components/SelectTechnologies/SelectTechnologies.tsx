import { useEffect, useState } from "react";
import { logos } from "../../services/logos";
import SkillsContainer from "../SkillsContainer/SkillsContainer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { editData } from "../../store/edit/edit.slice";

export default function SelectTechnologies() {
    const dispatch = useDispatch();
    const { technologies } = useSelector((state: RootState) => state.edit);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleCheckboxChange = (name: string) => {
        const updatedTechnologies = technologies.includes(name)
            ? technologies.filter((item) => item !== name)
            : [...technologies, name];

        dispatch(editData({ technologies: updatedTechnologies }));
    };

    return (
        <div className="relative">
            <div
                className={
                    !isDropdownOpen
                        ? `cursor-pointer w-full bg-gray-800 p-4 rounded-lg`
                        : `rounded-lg cursor-pointer w-full bg-gray-600 p-4`
                }
                onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
                <SkillsContainer names={technologies} />
            </div>

            {isDropdownOpen && (
                <div className="absolute border rounded-lg bg-gray-600 w-full mt-2 max-h-48 overflow-y-auto shadow-lg">
                    {logos.map((logo) => (
                        <div
                            key={logo.name}
                            className="flex items-center gap-2 p-2 hover:bg-gray-100 text-white hover:text-blue-600 cursor-pointer" 
                            onClick={() => handleCheckboxChange(logo.name)}
                        >
                            <input
                                type="checkbox"
                                checked={technologies.includes(logo.name)}
                                onChange={() => handleCheckboxChange(logo.name)}
                            />
                            <label className="">{logo.name}</label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
