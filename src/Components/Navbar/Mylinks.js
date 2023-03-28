import './ion_icon.css'

export const links=[
    {name:'Use Cases',submenu:true,sublink:[
        {
            name:'Product Development',link:'/product-development',icon:<ion-icon name="rocket-outline"></ion-icon>
        },
        {
            name:'Data Privacy',link:'/data-privacy',icon:<ion-icon name="lock-closed-outline"></ion-icon>
        },
        {
            name:'Transcription and Translation Services',link:'/t-t-services',icon:<ion-icon name="globe-outline"></ion-icon>
        }
    ]},
    {name:'Industries',submenu:true,sublink:[
        {
            name:'Healthcare',link:'/healthcare',icon:<ion-icon name="bandage-outline"></ion-icon>
        },
        {
            name:"Retail",link:'/retail',icon:<ion-icon name="cart-outline"></ion-icon>
        },
        {
            name:'Agriculture',link:'/agriculture',icon:<ion-icon name="thunderstorm-outline"></ion-icon>
        },
        {
            name:'Conversational AI',link:'/conversational_ai',icon:<ion-icon name="chatbubbles-outline"></ion-icon>
        },
        {
            name:'Security and Privacy in AI',link:'/security_privacy_ai',icon:<ion-icon name="finger-print-outline"></ion-icon>
        }
    ]},
    {name:'Research',submenu:true,sublink:[
        {
            name:'Publications',link:'/publications',icon:<ion-icon name="finger-print-outline"></ion-icon>
        },
        {
            name:'Research Team',link:'/research_team',icon:<ion-icon name="book-outline"></ion-icon>
        }
    ]},
    {name:'Company',submenu:true,sublink:[
        {
            name:'About Us',link:'/about_us',icon:<ion-icon name="mail-open-outline"></ion-icon>
        },
        {
            name:'Contact Us',link:'/contact_us',icon:<ion-icon name="chatbox-outline"></ion-icon>
        },
        {
            name:'Careers',link:'/carrer',icon:<ion-icon name="trending-up-outline"></ion-icon>
        }
    ]},
    {name:'Customers',submenu:false},
    {name:'Blog',submenu:false}
];