import styles from './Avatar.module.scss';

interface AvatarProps {
    src:string;
}

export default function Avatar ({src}:AvatarProps) {
    return(
        <>
            <div className='max-w-40 ' >
                    <img src={src} className="rounded-full w-40 h-40 object-cover" alt="Avatar"/>
            </div>
        </>
    )
}