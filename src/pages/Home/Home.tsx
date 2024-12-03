import AboutMe from "../../components/AboutMe/AboutMe";
import Contact from "../../components/Contact/Contact";
import ProfileBanner from "../../components/ProfileBanner/ProfileBanner";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import WorkExperience from "../../components/WorkExperience/WorkExperience";

export default function Home () {
    return(
       <div className="w-full  flex-col flex justify-center  bg-white dark:bg-gray-900 gap-4" >
            <ProfileBanner />
            <AboutMe />
            <Skills />
            <Projects />
            <WorkExperience />
            <Contact />
            
        </div>
    )
}