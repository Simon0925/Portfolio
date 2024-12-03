import styles from './SkillsBox.module.scss'

interface SkillsBoxProps {
    name:string;
    background:string;
    img:string;
    color:string
}



export default function SkillsBox({name,background,img,color}:SkillsBoxProps) {

    return (
      <div className={styles.wrap} style={{background}} >
        <div className={styles.container} >
           <img className={styles.img} alt={name} src={img} />
          <p style={{color}} className={styles.text}>{name}</p>
        </div>
      </div>
    );
}