import RegistragionGraph from '../icon_SVG/registration-graph.svg'
import Badge from '../icon_SVG/badge.svg'
import RegistrationSplit from '../icon_SVG/registrations-split-count.svg'
import SpeakerCard from '../icon_SVG/speaker-card.svg'
import ticketSale from '../icon_SVG/ticket-sales.svg'
import attendees from '../icon_SVG/attendees.svg'
import ticket from '../icon_SVG/ticket.svg'


const card = {

    'RegistragionGraph': RegistragionGraph,
    'Badge': Badge,
    'RegistrationSplit': RegistrationSplit,
    'SpeakerCard': SpeakerCard,
    'ticketSale': ticketSale,
    'attendees': attendees,
    'ticket': ticket,
}

type CardIcons = keyof (typeof card)


export interface CardProps {

    typeCard: CardIcons;
    className?: string;

}

export default function Cards({
    typeCard,
    className,

}: CardProps) {


    return (
        <div >
                <div  >
                    <img src={card[typeCard]} alt={card[typeCard]}  className=''  />
                </div>
        </div>
    )
}

