// import part
import React from 'react';
import Card from './Components/Card/Card';

// Js part
const datas = [
    {
        title:"FREE",
        price:"$0/month",
        user:"single-user",
        storage:"50GB storage",
        project:"Unlimited Public Project",
        community:"Community Access",
        privateproj:"Unlimited Private Project",
        isprivateproj:false,
        phonesupport:"Dedicated Phone Support",
        isphonesupport:false,
        subdomain:"Free Sub Domain",
        issubdomain:false,
        reports:"Monthly Status Reports",
        isreports:false,
       
    },
    {
        title:"PLUS",
        price:"$9/month",
        user:"5 Users",
        storage:"50GB storage",
        isstorage:"true",
        project:"Unlimited Public Project",
        community:"Community Access",
        privateproj:"Unlimited Private Projects",
        isprivateproj:true,
        phonesupport:"Dedicated Phone Support",
        isphonesupport:true,
        subdomain:"Free Sub Domain",
        issubdomain:true,
        reports:"Monthly Status Reports",
        isreports:false,
    },
    {
        title:"PRO",
        price:"$49/month",
        user:"Unlimited Users",
        storage:"50GB storage",
        isstorage:"false",
        project:"Unlimited Public Project",
        community:"Community Access",
        privateproj:"Unlimited Private Projects",
        isprivateproj:true,
        phonesupport:"Dedicated Phone Support",
        isphonesupport:true,
        subdomain:"Free Sub Domain",
        issubdomain:true,
        reports:"Monthly Status Reports",
        isreports:true,
    },
]


const App = () => {

        return (
            <>
            <Card datas = {datas} />
            </>
        )

       
    
};

export default App;