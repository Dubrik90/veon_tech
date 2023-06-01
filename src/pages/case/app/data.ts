import Sinaradesign from "../../case/assets/sinaradesignCase.webp";
import Sodox from "../../case/assets/sodoxCase.webp";
import Art from "../../case/assets/artCase.webp";
import Rent from "../../case/assets/imgMagazine.png";

import LogoImg from "../assets/SD.png";
import LogoRent from "../assets/logoMagazine.png";

import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import sodox from "../../home/company/assets/sodox.png";


export const caseDataArray: CaseDataType = [
    {
        id: '1',
        type: 'magazines',
        title: 'Case Study: Marketplace Development for Rental Service',
        screenImg: Sinaradesign,
        logoImg: LogoImg,
        service: 'Catalog website development',
        client: 'Sinaradesign LLC',
        projectUrl: 'https://sinaradesign.com/',
        aboutCompany: 'Sinaradesign LLC specializes in selling handmade craft products.',
        targets: 'Create a catalog website to attract new customers, ensure responsive website display on all devices and resolutions, provide comprehensive product information, ensure a user-friendly website structure, and maintain consistency with corporate design style.',

        tableData: [
            {name: 'Company Name', value: ` Sinaradesign LLC`},
            {name: 'Industry', value: `Craft product sales service`},
            {name: 'Target Country', value: `Russian Federation`},
            {name: 'Main Products and Services', value: `Handmade craft products`},
            {name: 'Website Domain:', value: `LLC "https://sinaradesign.com/`},
            {name: 'Target Audience', value: `Men/women aged 18 to 40`},
            {name: 'Website Objectives', value: `Increase conversion rates and reach, familiarize customers with the company's entire product range, and increase the number of potential clients.`},
            {name: 'Website Type', value: `Service`},
            // {name: 'Тариф', value: `-`},
            {name: 'CMS', value: `Not specified`},
            {name: 'Development Languages/Framework', value: `C#, Angular, Wordpress`},
            {
                name: 'Client\'s Preferences',
                value: ` I want our website to rank high and perform well on all devices.`
            },
        ],
        appealClient: 'Sinaradesign LLC approached us to develop a catalog website to attract new customers, ensure responsive website display on all devices and resolutions, provide comprehensive product information, ensure a user-friendly website structure, and maintain consistency with corporate design style.',
        process: 'We faced a significant task involving designers, programmers, copywriters, and an SEO administrator. As the goal was to increase sales conversion and achieve high search engine rankings, our team conducted market analysis and user research. We incorporated SEO structure during the website\'s design phase. The client fully trusted our professionalism, and we made every effort to fulfill their requirements. The client had their own logo, and our team of designers worked on its refinement. After refining the logo, our designers created a responsive website layout according to the technical specifications. During the milestone delivery, the client positively evaluated the additional design solutions provided by our specialists. After signing off on the milestone, the project was handed over to front-end developers. Thanks to a strict task timing control system, our specialists managed to complete the entire complex process in just two weeks! After launching the website, we began populating the online catalog. We added numerous features to the admin panel, including user activity tracking and automated email notifications to online users. We also integrated Google and Yandex metrics, configured meta tags, and other search engine services. Additionally, we implemented functionality to transform the website into an online store and added various elements for future project expansion.',
        result: 'Testing was successful! The client was incredibly satisfied with the project as we delivered faster and more than initially planned. By choosing us, the client obtained the following:\n' +
            '\n' +
            'Maximum project implementation speed!\n' +
            'Increased sales conversion rates, with the website ranking high on Google and Yandex.\n' +
            'High speed and responsiveness on all devices.\n' +
            'Ongoing website support.\n',
        portfolio: [
            {img: Image1, src: ''},
            {img: Image2, src: ''},
            {img: Image3, src: ''},
            // {img: Image2, src: ''},
            // {img: Image1, src: ''},
        ]
    },
    {
        id: '2',
        type: 'catalogs',
        title: 'Case Study: Development of an Online Catalog',
        screenImg: Art,
        logoImg: LogoImg,
        service: 'Online service development',
        client: 'ArtDoc.media',
        projectUrl: 'https://artdoc.media/ru/',
        aboutCompany: 'ArtDoc.media is engaged in providing online screenings of Russian-language documentary films.',
        targets: 'Implement user personal account and expand and enhance the existing functionality of the website according to the specifications.',

        tableData: [
            {name: 'Company Name', value: `ArtDoc.media`},
            {name: 'Industry', value: `Entertainment`},
            {name: 'Target Country', value: `Russian Federation`},
            {name: 'Main Products and Services', value: `Entertainment search service`},
            {name: 'Website Domain: LLC', value: `https://artdoc.media/`},
            {name: 'Target Audience', value: `Men and women aged 18 to 40`},
            {name: 'Website Objectives', value: `Backend implementation (calendar and booking system, payment integration)`},
            {name: 'Website Type', value: `Service`},
            // {name: 'Тариф', value: `-`},
            {name: 'CMS', value: `Not specified`},
            {name: 'Development Languages/Framework', value: `PHP, Laravel`},
            {
                name: 'Client\'s Preferences',
                value: `Timely implementation of the service.`
            },
        ],
        appealClient: 'ArtDoc.media approached us to develop a user personal account and enhance the capabilities of their website for online screenings of Russian-language documentary films.',
        process: 'We developed a registration field, user personal account, and restructured the website for improved usability. As our team had prior experience with similar projects, delivering it quickly and with high quality was not a challenge. We implemented a convenient subscription system, similar to popular streaming platforms. Additionally, we created an admin panel with the ability to export user information. The exported files are stored in CSV, XML, or JSON formats. We also added the ability for the administrator to block users who violate the site\'s rules. Through close collaboration during the development process, the client received exactly what they desired.',
        result: 'The project successfully passed testing, was well-optimized, and delivered by our team on time.\n' +
            'By choosing us, the client obtained the following:\n' +
            '- Implemented registration system\n' +
            '- Implemented a convenient subscription system\n' +
            '- Created an admin panel\n' +
            '- Developed various user interaction scenarios within the account interface.',
        portfolio: [
            {img: Image1, src: ''},
            {img: Image2, src: ''},
            {img: Image3, src: ''},
            // {img: Image2, src: ''},
            // {img: Image1, src: ''},
        ]
    },
    {
        id: '3',
        type: 'sites',
        title: 'Website Development',
        screenImg: Sodox,
        logoImg: sodox,
        service: 'Catalog website creation',
        client: 'Sodox Prom LLC',
        projectUrl: 'https://sodox.by',
        aboutCompany: 'SODOX Group is an industrial equipment manufacturer.',
        targets: 'To develop an internet catalog to showcase the company online and enable customers to place orders for products or services.',

        tableData: [
            {name: 'Company Name', value: `Sodox Prom LLC`},
            {name: 'Industry', value: `Industrial equipment manufacturing, engineering services, machinery sales`},
            {name: 'Target Country', value: `Belarus, Russia`},
            {name: 'Main Products and Services', value: `Industrial equipment`},
            {name: 'Website Domain: LLC', value: `https://sodox.by`},
            {name: 'Target Audience', value: `B2B, men aged 30-60`},
            {name: 'Website Objectives', value: `Create customer loyalty to the company's products`},
            {name: 'Website Type', value: `Catalog Website`},
            // {name: 'Тариф', value: `-`},
            {name: 'CMS', value: `Not specified`},
            {name: 'Development Languages/Framework', value: `Python, Django`},
            {
                name: 'Client\'s Preferences',
                value: `Create a modern website that distinguishes the client from competitors. Optimize the structure and interface for easy navigation.`
            },
        ],
        appealClient: 'The client approached us to implement an internet catalog to increase brand recognition.',
        process: 'After analyzing Sodox\'s main competitors and gathering all the necessary information from the client, we began developing an interactive prototype project. Once the website concept was selected and an estimated budget was provided by the client, our team proceeded with design implementation and step-by-step project development.',
        result: 'By choosing us, the client obtained the following:\n' +
            '\n' +
            '- A website with numerous forms to facilitate easy and convenient equipment ordering by our client\'s customers (including by brand), \n' +
            '- A catalog with a wide range of functionality\n' +
            '- Implementation of an admin panel and security/authentication system.\n' +
            '- Detailed descriptions for each product category of the client, including photos, general characteristics, brief descriptions, and a product assortment table' +
            '\n' +
            'The client now has a modern internet catalog that not only presents Sodox\'s products online but also ensures high sales conversion rates due to active visitor engagement. The website has become the company\'s official online representation.',
        portfolio: [
            {img: Image1, src: ''},
            {img: Image2, src: ''},
            {img: Image3, src: ''},
            // {img: Image2, src: ''},
            // {img: Image1, src: ''},
        ]
    },
    {
        id: '4',
        type: 'sites',
        title: 'Case Study: Development of a Marketplace for Rent Club LLC',
        screenImg: Rent,
        logoImg: LogoRent,
        service: 'Catalog website creation',
        client: 'Rent Club LLC (under NDA)',
        projectUrl: 'https://rentclub.pro',
        aboutCompany: 'Rent Club LLC (under NDA)',
        targets: 'Implementation of a transaction dashboard, status changes, and user behavior',

        tableData: [
            {name: 'Company Name', value: `Rent Club LLC (under NDA)`},
            {name: 'Industry', value: `Startup for rental services`},
            {name: 'Target Country', value: `Russia`},
            {name: 'Main Products and Services', value: `Rental of various items`},
            {name: 'Website Domain', value: `ООО "https://rentclub.pro`},
            {name: 'Target Audience', value: `Men and women aged 18 to 40`},
            {name: 'Website Objectives', value: `Backend implementation (transaction dashboard, user behavior)`},
            {name: 'Website Type', value: `Marketplace`},
            // {name: 'Тариф', value: `-`},
            {name: 'CMS', value: `-`},
            {name: 'Development Languages/Frameworks', value: `PHP, Laravel, Vue.js`},
            {
                name: 'Client\'s Preferences',
                value: `Implementation of a transaction dashboard and various scenarios for lessor and lessee behavior within the dashboard`
            },
        ],
        appealClient: 'The client was very concerned about the website design, as they had developed the previous website personally. They wanted every font, button, etc., to be "cooler" and visually appealing. The client emphasized the importance of visual perception and a user-friendly interface.',
        process: 'Our team had previous experience with project enhancements, so each stage of the collaboration followed a strict protocol. We discussed project details with the client in-depth and worked on the structure of the transaction dashboard. Our specialists then proceeded to implement the functionality for changing user statuses. The next development stage involved simulating random user behavior within the service and adapting the directory based on user requests.',
        result: 'Thanks to close collaboration and excellent feedback from the client, we delivered an outstanding catalog website that enhances customer loyalty and stands out from competitors with its unique design. By choosing us, the client received the following benefits: prompt service and project realization in accordance with the agreed-upon stages. They also enjoyed a discount on development costs through our company\'s bonus system.',
        portfolio: [
            {img: Image1, src: ''},
            {img: Image2, src: ''},
            {img: Image3, src: ''},
            // {img: Image2, src: ''},
            // {img: Image1, src: ''},
        ]
    },
]


export type CaseDataType = CaseType[]

export type CaseType = {
    id: string,
    type: string
    title: string,
    screenImg: string,
    logoImg: string,
    service: string,
    client: string,
    projectUrl: string,
    aboutCompany: string,
    targets: string,
    tableData: Array<{name: string, value: string}>,
    appealClient: string,
    process: string,
    result: string,
    portfolio: Array<{img: string, src: string}>
}
