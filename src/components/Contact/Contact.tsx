import ContactContainer from "../ContactContainer/ContactContainer";

import giphy from './img/giphy.gif'




export default function Contact () {
    return(
        <section className="py-6 text-center">
            <div className="flex flex-col items-center">
                <div className="flex ">
                    <img src={giphy} alt="Contact" loading="lazy" className="w-12 h-10" />
                    <h2 className="text-2xl text-black dark:text-white font-bold mb-4">Contact Me</h2>
                </div>
            </div>
            <ul className="list-none flex flex-col items-center text-gray-500">
                <ContactContainer name={"Email:"} link={"sam.yakovenko@gmail.com"} />

                <ContactContainer name={"LinkedIn:"} link={"linkedin.com/in/sam-yakovenko"} />
                
                <ContactContainer name={"GitHub:"} link={"github.com/Simon0925"} />
            </ul>
        </section>
    )
}