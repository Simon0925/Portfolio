import Avatar from "../Avatar/Avatar";

import png from './img/Screenshot 2024-12-01 at 16.47.59.png'

export default function ProfileBanner () {
    return(
       <div className="rounded-lg bg-green-50 p-5 w-full shadow-lg  bg-opacity-10 backdrop-blur-lg  flex flex-col items-center gap-2" >
            <Avatar src={png} />
            <h2 className="text-3xl text-black dark:text-white font-bold mb-2 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400">
                Full Stack Developer
            </h2>

            <p className="text-xl text-black dark:text-white text-center mb-3">
                Crafting elegant solutions for complex problems
            </p>
            <div className="flex justify-center space-x-4 mb-4 ">
                <a href="https://www.linkedin.com/in/sam-yakovenko/" className="text-blue-500 cursor-pointer hover:text-blue-600">LinkedIn</a>
                <a href="https://github.com/Simon0925" className="text-gray-700 hover:text-gray-800 cursor-pointer dark:text-gray-300 dark:hover:text-gray-200">GitHub</a>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block mb-4">Download Resume</button>
       </div>
    )
}