import giphy from './img/giphy.gif'

export default function WorkExperience () {
    return(
       <section className="my-8 text-center">
            <div className="flex flex-wrap gap-2 justify-center">
                <img src={giphy} alt="Work Experience" loading="lazy" className="w-10 h-8"  />
                <h2 className="text-2xl text-black dark:text-white font-bold mb-2 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400">
                    Work Experience
                </h2>
            </div>
           
            <div>
                <div className="pt-4 ">
                    <h3 className="text-xl  text-black dark:text-white font-semibold mb-2">
                        Fullstack developer freelance
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ">2024 - Present</p>
                    <p className="text-black dark:text-white">Led development of scalable web applications using React and Node.js.</p>
                </div>
            </div>
           
       </section>
    )
}