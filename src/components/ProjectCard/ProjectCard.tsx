import GitSVG from "../../svg/GitSVG/GitSVG";
import LinkSVG from "../../svg/Link/LinkSVG";
import SkillsContainer from "../SkillsContainer/SkillsContainer";
import styles from "./ProjectCard.module.scss"

import {ProjectCardProps} from '../../interface/interface'


export default function ProjectCard({img,name,description,technologies,link,git}:ProjectCardProps) {

    return (
      <div className='
            font-white border
            border-gray-200
            bg-green-50
            bg-opacity-10
            backdrop-blur-lg 
            rounded-lg 
            shadow-lg 
            overflow-hidden 
            hover:shadow-xl 
            transition-all 
            duration-300 
            transform 
            hover:scale-105
          '>
            <div className={styles.wrapperImg}>
                  <img className="w-full h-48 object-fit transition-transform duration-300 transform hover:scale-110" src={img}/>
            </div>  
            <div className="p-6">
              <h3 className="text-2xl text-gray-400 font-bold mb-3 transition-colors duration-300 hover:text-blue-500">{name}</h3>
              <p className="text-gray-600 mb-4">
                {description}
              </p>
              <div className="lex space-x-2 mb-4">
                 <SkillsContainer names={technologies} />
              </div>
              <div className="flex justify-between items-center">
                <a href={link} >
                  <p className="text-gray-400 font-medium hover:underline hover:text-blue-500 flex items-center">
                    <LinkSVG />Visit Project →
                  </p>
                </a>
                <a href={git} >
                  <p className="text-gray-400 font-medium hover:underline hover:text-blue-500 flex items-center">
                    <GitSVG />View Code
                  </p>
                </a>
              </div>
            </div>
      </div>
    );
}