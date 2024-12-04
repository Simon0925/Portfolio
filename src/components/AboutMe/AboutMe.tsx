
import giphy from './img/giphy.gif'




export default function AboutMe() {

    return (
      <section className="flex flex-col items-center gap-4">
        <div className="flex flex-wrap gap-2 items-center justify-center">
          <img src={giphy} alt="Work Experience" loading="lazy" className="w-10 h-12"  />
          <h2 className="text-2xl text-black dark:text-white font-bold mb-2 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400">
            About Me
          </h2>
        </div>
        <p className="text-black dark:text-white">
          I’m a Full Stack Developer with a passion for building complete web solutions,
          from dynamic front-end interfaces to robust back-end systems. My expertise lies in creating responsive,
          user-friendly applications using technologies like React, JavaScript, SCSS and Tailwind CSS on the front-end, 
          while also working with Node.js, PostgreSQL, MongoDB, and RESTful APIs to power the back-end.
        </p>
      </section>
    );
}