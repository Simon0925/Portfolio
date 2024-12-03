
interface ContactContainerProps{
    name:string;
    link:string;
}



export default function ContactContainer ({name,link}:ContactContainerProps) {

    const copy = () =>{
        console.log(link)
    }

    return(
    
        <li className="flex items-center justify-between bg-gray-800 p-4 rounded shadow-md w-full max-w-md mb-4">
            <span>{name} <span >{link}</span></span>
            <button onClick={copy} className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200">
                Copy
            </button>
        </li>
      
    )
}