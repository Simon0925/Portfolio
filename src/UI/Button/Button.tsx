import classNames from 'classnames';

interface ButtonProps {
    name: string;
    color: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
}

export default function Button({ name, color, onClick }: ButtonProps) {
    const buttonClass = classNames(
        {
            'bg-blue-500 hover:bg-blue-600': color === 'blue',
            'bg-red-500 hover:bg-red-600': color === 'red',
            'bg-green-500 hover:bg-green-600': color === 'green',
        },
        'text-white',
        'font-bold',
        'py-2',
        'px-4',
        'rounded',
        'inline-block',
        'w-full'
    );

    return (
        <button onClick={onClick} className={buttonClass}>
            {name}
        </button>
    );
}
