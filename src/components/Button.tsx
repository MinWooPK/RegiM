import theme, {Typography} from "../theme";


export interface ButtonProps {
    label: string;
    className: string;
    type?: Typography;
}

export default function Button({
    label,
    className,
    type = "semibold",
}: ButtonProps) {
    //Unimos el estilo y el tamaño 
    const combinedClassNames = [theme.typography[type], className].join(" ");
    return (<button className={combinedClassNames}>{label} </button>)
}





