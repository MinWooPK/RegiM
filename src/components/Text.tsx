import theme, { Typography } from "../theme";

export interface TextProps {
    text: string;
    type?: Typography;
    className?: string;
    secondText?: string;
}

export default function Text({
    text,
    type = "regular",
    className = "",
    secondText,
}: TextProps) {
    const combinedClassNames = [theme.typography[type], className].join(" ");
    return (<p className={
        combinedClassNames
    }>{text}
        <span className="px-1 first-letter:text-Primary/100">
            {secondText}
        </span>
    </p>)
}



