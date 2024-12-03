import styles from './SkillsBox.module.scss'

interface SkillsBoxProps {
    name:string;
    background:string;
    img:string;
    color:string
}



export default function SkillsBox({name,background,img,color}:SkillsBoxProps) {

    return (
      <div className="block px-1.5  py-1"  style={{background}} >
        <div className="flex gap-2 justify-center items-center w-28" >
           <img className="w5 h-5" alt={name} src={img} />
          <p style={{color}} className="text-sm">{name}</p>
        </div>
      </div>
    );
}