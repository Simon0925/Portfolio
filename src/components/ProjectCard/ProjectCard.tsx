import GitSVG from "../../svg/GitSVG/GitSVG";
import LinkSVG from "../../svg/Link/LinkSVG";
import styles from "./ProjectCard.module.scss"
interface ProjectCardProps {
    img:string;
}



export default function ProjectCard({img}:ProjectCardProps) {

    return (
      <div className='font-white border border-gray-200 bg-green-50 bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
            <div className={styles.wrapperImg}>
                  <img className="w-full h-48 object-fit transition-transform duration-300 transform hover:scale-110" src={img}/>
            </div>  
            <div className="p-6">
              <h3 className="text-2xl text-gray-400 font-bold mb-3 transition-colors duration-300 hover:text-blue-500">Driving theory test</h3>
              <p className="text-gray-600 mb-4">
                A web application built with React, JavaScript, and CSS. Our user-friendly interface simplifies the booking process, allowing you to secure your ideal accommodation in just a few clicks.
              </p>
              <div className="lex space-x-2 mb-4">

              </div>
              <div className="flex justify-between items-center">
                <a href="" >
                  <p className="text-gray-400 font-medium hover:underline hover:text-blue-500 flex items-center">
                    <LinkSVG />Visit Project →
                  </p>
                </a>
                <a href="" >
                  <p className="text-gray-400 font-medium hover:underline hover:text-blue-500 flex items-center">
                    <GitSVG />View Code
                  </p>
                </a>
              </div>
            </div>
      </div>
    );
}