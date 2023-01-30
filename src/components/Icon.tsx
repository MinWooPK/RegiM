import Attendee from '../icon_SVG/Attendee.svg'
import Branded from '../icon_SVG/Branded.svg'
import Calendar from '../icon_SVG/Calendar.svg'
import Event from '../icon_SVG/Event.svg'
import Registration from '../icon_SVG/Registration.svg'
import Organaiser from '../icon_SVG/Organiser.svg'


const icon = {
    "Attendee": Attendee,
    "Branded": Branded,
    "Calendar": Calendar,
    "Event": Event,
    "Registration": Registration,
    "Organaiser": Organaiser,
}

export type FeaturesIcons = keyof (typeof icon)

export interface IconProps {
    type: FeaturesIcons,
}

export default function Icon({ type }: IconProps) {
    return (
        <img src={icon[type]} alt={icon[type]} className='md:w-6' />
    )
}