import { useEffect, useState } from "react";
import {logos} from '../../services/logos'
import {Skills} from '../../interface/interface'

export interface SkillsContainerProps {
    names: string[];
}

export default function SkillsContainer({ names }: SkillsContainerProps) {
    const [current, setCurrent] = useState<Skills[]>([]);

    useEffect(() => {
        const filteredSkills = logos
            .filter((element) => names.includes(element.name)) 
            .map((element) => ({
                name: element.name,
                background: element.background,
                img: element.logo,
                color: element.color,
            })); 

        setCurrent(filteredSkills);
    }, [names]);


    return (
        <>
            <div className="flex flex-wrap gap-1">
                {current.map((skill, index) => (
                    <div key={index} className="block px-1 py-1" style={{ background: skill.background }}>
                        <div className="flex gap-2 justify-center items-center w-16">
                            <img className="w-2 h-2" alt={skill.name} src={skill.img} />
                            <p style={{ color: skill.color }} className="text-xxs">{skill.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
