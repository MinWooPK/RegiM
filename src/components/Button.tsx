export interface ButtonProps {
    label: string;
    size?: "medium" | "large";
}

export default function Button({
    label,
    size = "medium",
}: ButtonProps) {
    return <button className="w-full md:w-64 py-2.5 px-4 bg-[#0876DD] rounded-md text-[white]">{label}</button>
}



// variable : tipo