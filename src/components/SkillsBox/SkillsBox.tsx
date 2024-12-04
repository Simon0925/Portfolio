import {Skills} from '../../interface/interface'



export default function SkillsBox({name,background,img,color}:Skills) {

    return (
      <div className="block px-1.5  py-1"  style={{background}} >
        <div className="flex gap-2 justify-center items-center w-28" >
           <img className="w5 h-5" alt={name} src={img} />
          <p style={{color}} className="text-sm">{name}</p>
        </div>
      </div>
    );
}