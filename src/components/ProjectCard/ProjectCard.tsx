import styles from "./ProjectCard.module.scss"
interface ProjectsProps {
    name:string;
    background:string;
    img:string;
}



export default function ProjectCard() {

    return (
      <div className={styles.wrap}>
            <div className={styles.wrapperImg}>
                    <img />
            </div>  
      </div>
    );
}