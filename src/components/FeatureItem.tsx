import FeatureIcon, { RingColorIcons } from "./FeatureIcon";
import { FeaturesIcons } from "./Icon";


export interface FeaturesProps {

    type?: FeaturesIcons;
    className?: string;
    title: string;
    description: string;
    color?: RingColorIcons;
}

export default function FeatureItem({
    title,
    description,
    type = "Calendar",
    className = "",
    color = 'primary',
}: FeaturesProps) {

    return (
        <div className='flex flex-row items-start  mx-5 gap-4 md:flex-col md:items-center md:w-[328px] md:mt-4'>
            <FeatureIcon className={className} type={type} color={color} />
            <div className='flex flex-col  text-start  gap-2 md:text-center'>
                <p className={
                    className = 'font-semibold text-xl md:text-2xl text-Neutral/900'
                }>{title}</p>
                <p className={
                    className = 'font-regular text-sm md:text-base text-Neutral/700'
                }>{description}</p>
            </div>
        </div>
    )
}



