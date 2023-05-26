
import Img01 from './descriptionWeb/assets/0111.png';
import Img02 from './descriptionWeb/assets/0222.png';
import Img03 from './descriptionWeb/assets/0333.png';
import Img04 from './descriptionWeb/assets/0444.png';
import Img05 from './descriptionWeb/assets/05.svg';
import {ROUTS} from "../../common/constans/routs";

export type DevDataType = {
    header: string
    desc: string
    img: string
    link: string
}

export const devData: DevDataType[] = [
    {
        header: 'Website development',
        desc: 'We create unique websites that increase sales conversion...',
        img: Img01,
        link: 'services/webDev'
    },
    {
        header: 'Website maintenance',
        desc: 'After the website has been created, it is necessary to take care of its ongoing operation...',
        img: Img02,
        link: 'services/support'
    },
    {
        header: 'Software development',
        desc: 'VEON-TECH will help you optimize routine business tasks...',
        img: Img03,
        link: 'services/webPO'
    },
    {
        header: 'UX/UI design',
        desc: 'We will build the right logic of user interaction with the website...',
        img: Img04,
        link: 'services/ux'
    },

]
