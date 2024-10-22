import Service1 from "@/public/Service1.png";
import Service2 from "@/public/Service2.png";
import Service3 from "@/public/Service3.png";
import Service4 from "@/public/Service4.png";
import Blog1 from "@/public/images/Blog1.png"
import Blog2 from "@/public/images/Blog2.png"
import Blog3 from "@/public/images/Blog3.png"
import Blog4 from "@/public/images/Blog4.png"

 const  ServicesFooter=[
    {id:"1",path:"/",title:"Email marketing"},
    {id:"2",path:"/",title:"Campaigns"},
    {id:"3",path:"/",title:"Branding"},
    {id:"4",path:"/",title:"Offline"},
]

 const AboutFooter=[
    {id:"5",path:"/",title:"Our Story"},
    {id:"6",path:"/",title:"Benefits"},
    {id:"7",path:"/",title:"Team"},
    {id:"8",path:"/",title:"Careers"},
]

 const HelpsFooter = [
    {id:"9",path:"/",title:"FAQs"},
    {id:"10",path:"/",title:"Contact Us"},
]

  const Services = [
    {
      id: 1,
      image: Service1.src,
      name: "Service 1",
      title: "Hernan Almar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt i officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      image: Service2.src,
      name: "Service 2",
      title: "Hernan Almar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt i officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      image: Service3.src,
      name: "Service 3",
      title: "Hernan Almar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt i officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      image: Service4.src,
      name: "Service 4",
      title: "Hernan Almar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt i officia deserunt mollit anim id est laborum.",
    },
  ];

  const NavLinks = [
    { title: "Home", path: "/pages" },
    { title: "Portfolio", path: "/pages/portfolio" },
    { title: "Services", path: "/pages/services" },
    { title: "About", path: "/pages/about" },
    { title: "Contact", path: "/pages/contact" },
    { title: "Blog", path: "/pages/blog" },
  ];
   
const BlogData=[
  {id:1,image:Blog1.src,createdAt:"Sunday , 1 Jan 2023",title:"Bill Walsh leadership lessons",description:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",skils:["Leadership","Management","Presentation"]},
  {id:2,image:Blog2.src,createdAt:"Sunday , 1 Jan 2023",title:"Bill Walsh leadership lessons",description:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",skils:["Leadership","Management","Presentation"]},
  {id:3,image:Blog3.src,createdAt:"Sunday , 1 Jan 2023",title:"Bill Walsh leadership lessons",description:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",skils:["Leadership","Management","Presentation"]},
  {id:4,image:Blog4.src,createdAt:"Sunday , 1 Jan 2023",title:"Bill Walsh leadership lessons",description:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",skils:["Leadership","Management","Presentation"]},
  {id:5,image:Blog1.src,createdAt:"Sunday , 1 Jan 2023",title:"Bill Walsh leadership lessons",description:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",skils:["Leadership","Management","Presentation"]},
  {id:6,image:Blog2.src,createdAt:"Sunday , 1 Jan 2023",title:"Bill Walsh leadership lessons",description:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",skils:["Leadership","Management","Presentation"]},
  {id:7,image:Blog3.src,createdAt:"Sunday , 1 Jan 2023",title:"Bill Walsh leadership lessons",description:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",skils:["Leadership","Management","Presentation"]},
  {id:8,image:Blog4.src,createdAt:"Sunday , 1 Jan 2023",title:"Bill Walsh leadership lessons",description:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",skils:["Leadership","Management","Presentation"]},
]

  export  {NavLinks,ServicesFooter,AboutFooter,HelpsFooter,Services,BlogData}