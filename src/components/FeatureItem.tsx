import Attendee from '../icon_SVG/Attendee.svg'
import Branded from '../icon_SVG/Branded.svg'
import Calendar from '../icon_SVG/Calendar.svg'
import Event from '../icon_SVG/Event.svg'
import Registration from '../icon_SVG/Registration.svg'
import Organaiser from '../icon_SVG/Organiser.svg'

// import theme, { Typography } from "../theme";


const icon = {

    "Attendee": Attendee,
    "Branded": Branded,
    "Calendar": Calendar,
    "Event": Event,
    "Registration": Registration,
    "Organaiser": Organaiser,
}

const ringColor = {


    "Secondary/100": 'ring-Secondary/100',
    "Primary/100": 'ring-Primary/100',

}

type FeaturesIcons = keyof (typeof icon)
type RingColorIcons = keyof (typeof ringColor)

export interface FeaturesProps {

    type?: FeaturesIcons;
    className?: string;
    texth1: string;
    textp: string;
    color?: RingColorIcons;
}

export default function ItemIcon({
    texth1,
    textp,
    type = "Calendar",
    className,
    color ='Primary/100',

}: FeaturesProps) {
    const combinedClassNames = [ringColor[color], className='w-10 h-10 md:w-16 md:h-16 rounded-full ring-[8px] md:ring-[12px] ring-offset-0  flex items-center  justify-center'].join(" ");

  
    return (
        <div className='flex flex-row items-start  mx-5 gap-4 md:flex-col md:items-center md:w-[328px]'>
            <div className='pt-2.5'>
                <div className={combinedClassNames}  >
                    <img src={icon[type]} alt={icon[type]} className='md:w-6' />
                </div>
            </div>
            <div className='flex flex-col  text-start  gap-2 md:text-center'>
                <p className={
                    className = 'font-semibold text-xl md:text-2xl text-Neutral/900'
                }>{texth1}</p>
                <p className={
                    className = 'font-regular text-sm md:text-base text-Neutral/700'
                }>{textp}</p>
            </div>
        </div>
    )
}



