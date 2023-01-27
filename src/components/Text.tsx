import theme, {Typography} from "../theme";

export interface TextProps {
    text: string;
    type?: Typography;
    className?: string;
}

export default function Text({
    text,
    type = "regular",
    className = "",
}: TextProps) {
    const combinedClassNames = [theme.typography[type], className].join(" ");
    return (<p className={ 
        combinedClassNames
    }>{text}</p>)
}



