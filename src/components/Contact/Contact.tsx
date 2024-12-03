import ContactContainer from "../ContactContainer/ContactContainer";





export default function Contact () {
    return(
        <section className="py-6 text-center">
            <div className="flex flex-col items-center">
                <div className="flex">
                    <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
                </div>
            </div>
            <ul className="list-none flex flex-col items-center space-y-4 text-gray-500">
                <ContactContainer name={"Email:"} link={"sam.yakovenko@gmail.com"} />

                <ContactContainer name={"LinkedIn:"} link={"linkedin.com/in/semen-yakovenko"} />
                
                <ContactContainer name={"GitHub:"} link={"github.com/Simon0925"} />
            </ul>
        </section>
    )
}