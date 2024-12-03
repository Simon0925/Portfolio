import Slider from "../../UI/Slider/Slider";



export default function Skills() {

    return (
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-2xl text-black dark:text-white font-bold mb-2 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400">
            Skills & Technologies
        </h2>
       <Slider />
      </section>
    );
}