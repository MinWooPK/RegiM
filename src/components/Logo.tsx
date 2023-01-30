// import theme, {Typography} from "../theme";
import Frame from '../icon_SVG/Frame.svg'
import Sun from '../icon_SVG/Sun.svg'
import Rainbow from '../icon_SVG/Rainbow.svg'
import Monkey from '../icon_SVG/Monkey.svg'
import Iluminati from '../icon_SVG/Iluminati.svg'
import GP from '../icon_SVG/GP.svg'
import Group from '../icon_SVG/Group.svg'

const logo = {

    "Frame": Frame,
    "Sun": Sun,
    "Rainbow": Rainbow,
    "Iluminati": Iluminati,
    "GP": GP,
    "Group": Group,
    "Monkey": Monkey,

}

type Logo = keyof (typeof logo)

export interface LogoProps {

    type?: Logo;
    className?: string;
}

export default function LogoIcon({
    type = "Monkey" ,
    className = "",
}: LogoProps) {

   
    return (<div className='bg-white rounded-full w-14 h-14 md:w-20 md:h-20
    flex items-center justify-center shadow-Box/Shadow/Logo bg-White'>
 <img src={logo[type]} alt="{logo[type]}" className='md:h-11 md:w-11 '  />
    </div>)
}



