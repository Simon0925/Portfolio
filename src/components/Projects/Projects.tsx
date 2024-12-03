import ProjectCard from "../ProjectCard/ProjectCard";


import test from './img/test.png'

export default function Projects() {

    return (
        <section className="flex flex-col items-center gap-4">
            <h2 className="text-2xl text-black dark:text-white font-bold mb-2 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <ProjectCard img={test} />
                <ProjectCard img={test} />
            </div>
            <div className="flex justify-center mt-8">
                <button className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded transition duration-300">
                    Show More Projects
                </button>
            </div>
        </section>
    );
}