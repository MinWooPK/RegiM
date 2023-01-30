import Icon, { FeaturesIcons } from "./Icon";

const ringColor = {
    "primary": 'ring-Primary/100',
    "secondary": 'ring-Secondary/100',
}

export type RingColorIcons = keyof (typeof ringColor)

export interface FeatureIconProps {

    type: FeaturesIcons;
    className: string;
    color: RingColorIcons;
}

export default function FeatureIcon({
    type,
    className,
    color,
}: FeatureIconProps) {
    const combinedClassNames = [ringColor[color], className = 'w-10 h-10 md:w-16 md:h-16 rounded-full ring-[8px] md:ring-[12px] ring-offset-0  flex items-center  justify-center'].join(" ");

    return (
        <div className='pt-2.5'>
            <div className={combinedClassNames}  >
                {/* <IconImg /> */}
                <Icon type={type} />
            </div>
        </div>
    )
}



