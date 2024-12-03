import Slider from "../../UI/Slider/Slider";
import giphy from './img/giphy.gif'


export default function Skills() {

    return (
      <section className="flex flex-col items-center gap-4">
        <div className="flex flex-wrap gap-2 justify-center">
          <img src={giphy} alt="Work Experience" loading="lazy" className="w-10 h-8"  />
          <h2 className="text-2xl text-black dark:text-white font-bold mb-2 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400">
              Skills & Technologies
          </h2>
        </div>
       <Slider />
      </section>
    );
}