import {Service1,Service2,Service3,Service4,Blog1,Blog2,Blog3,Blog4,Project1,Project2,Project3,Project4,Project5,About1,About2,About3,Team1,Team2,Team3,Team4,Team5,Team6,Enginer1,Enginer2,Enginer3,User1,User2,User3} from "../public"

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
    { title: "Home", path: "/" },
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

const Ours=[
  {id:1,count:150,name:"Clients"},
  {id:2,count:300,name:"Projects"},
  {id:3,count:500,name:"Vistor"},

]

const Bproject=[
  {id:1,image:Project1.src,name:"We Create Excellence"},
  {id:2,image:Project2.src,name:"We Create Excellence"},
  {id:3,image:Project3.src,name:"We Create Excellence"},
  {id:4,image:Project4.src,name:"We Create Excellence"},
  {id:5,image:Project5.src,name:"We Create Excellence"},
]

const AboutUsData=[
  {id:1,image:About1.src,title:"Brahma",name:"Hernan Almar"},
  {id:2,image:About2.src,title:"Brahma",name:"Hernan Almar"},
  {id:3,image:About3.src,title:"Brahma",name:"Hernan Almar"},
]

const OurTeam=[
  {id:1,image:Team1.src,name:"Kevin Williams",profession:"President"},
  {id:2,image:Team2.src,name:"Alyssa Heisten",profession:"CEO"},
  {id:3,image:Team3.src,name:"Carlos Zaldivar",profession:"VP, strategy & Creative services "},
  {id:4,image:Team4.src,name:"Sinead Harte",profession:"Director"},
  {id:5,image:Team5.src,name:"Sinead Jarte",profession:"Director"},
  {id:6,image:Team6.src,name:"Sinerd Narte",profession:"Director"},

]


const Enginers=[
  {id:1,image:Enginer1.src,rating:5,desc:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",name:"Elisa Grant",profession:'Legacy Solutions Engineer'},
  {id:2,image:Enginer2.src,rating:5,desc:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",name:"Elrico Gran",profession:'Legacy Solutions Engineer'},
  {id:3,image:Enginer3.src,rating:5,desc:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",name:"Nastya Gora",profession:'Legacy Solutions Engineer'},
]

const Users=[
  {id:1,image:User1.src,name:"User1"},
  {id:2,image:User2.src,name:"User2"},
  {id:3,image:User3.src,name:"User3"},
  {id:4,image:User1.src,name:"User4"},
  {id:5,image:User2.src,name:"User5"},
  {id:6,image:User3.src,name:"User6"},
  {id:7,image:User1.src,name:"User7"},
  {id:8,image:User2.src,name:"User8"},
  {id:9,image:User3.src,name:"User9"},
  {id:10,image:User1.src,name:"User10"},
  {id:11,image:User2.src,name:"User11"},
  {id:13,image:User3.src,name:"User12"},
  {id:14,image:User1.src,name:"User13"},
  {id:15,image:User2.src,name:"User14"}
]

  export  {NavLinks,ServicesFooter,AboutFooter,HelpsFooter,Services,BlogData,Ours,Bproject,AboutUsData,OurTeam,Enginers,Users}