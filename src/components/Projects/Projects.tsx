import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import giphy from './img/giphy.gif';
import getProjects from './service/getProjects';

import { ProjectCardProps } from '../../interface/interface';
import Spinner from "../../UI/Spinner/Spinner";

export default function Projects() {
    const [projects, setProjects] = useState<ProjectCardProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [visible, setVisible] = useState(4); 

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await getProjects();
                setProjects(response); 
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const currentProjects = projects.slice(0, visible); 

    const toggleProjects = () => {
        setVisible((prev) => (prev === 4 ? projects.length : 4)); 
    };

 

    return (
        <section className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap gap-2 justify-center">
                <img src={giphy} alt="Work Experience" loading="lazy" className="w-10 h-8" />
                <h2 className="text-2xl text-black dark:text-white font-bold mb-2 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400">
                    Projects
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {!loading && currentProjects.length > 0 ? 
                    currentProjects.map((project) => (
                        <ProjectCard 
                            key={project.id} 
                            img={project.img} 
                            name={project.name} 
                            description={project.description}
                            technologies={project.technologies} 
                            link={project.link} 
                            git={project.git} 
                        />
                    )) : 
                    <Spinner />
                }
                
            </div>
            <div className="flex justify-center mt-8">
                {projects.length > 4 && 
                <button 
                    onClick={toggleProjects} 
                    className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded transition duration-300"
                >
                     {visible === 4 ? "Show All Projects" : "Show Less"}
                 </button>
                }
               
            </div>
        </section>
    );
}
