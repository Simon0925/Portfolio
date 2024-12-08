import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";


import { ProjectCardProps } from '../../interface/interface';
import Spinner from "../../UI/Spinner/Spinner";
import getProjects from "../../services/projects/getProjects";
import Edit from "../Edit/Edit";
import { useDispatch } from "react-redux";
import { editData } from "../../store/edit/edit.slice";
import ReactDOM from "react-dom";
import Modal from "../Modal/Modal";

export default function ProjectsAdmin() {
    const [projects, setProjects] = useState<ProjectCardProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [visible, setVisible] = useState(4); 
    const [modal,setModal] = useState(true)
    const dispatch = useDispatch();
    const modalRoot = document.getElementById("modal-root");


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

    const edit = (img:string,name:string,description:string,technologies:string[],link:string,git:string,id?:number) =>{
       
        dispatch(editData({ img, name,description,technologies,link,git ,id}));
        setModal(!modal)
    }   

  
 

    return (
        <section className="flex flex-col pt-24 items-center gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {!loading && currentProjects.length > 0 ? 
                    currentProjects.map((project) => (
                        <div key={project.id}  onClick={() => edit(project.img,project.name,project.description,project.technologies,project.link,project.git,project.id)} className="cursor-pointer"> 
                            <ProjectCard 
                                img={project.img} 
                                name={project.name} 
                                description={project.description}
                                technologies={project.technologies} 
                                link={project.link} 
                                git={project.git} 
                            />
                        </div>
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
            {!modal&& modalRoot &&
                ReactDOM.createPortal(
                <Modal
                    close={setModal}
                    content={
                        <Edit type={"add"}/>
                    } 
                />,modalRoot
                )}
        
        </section>
    );
}
