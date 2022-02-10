import React from 'react';
import Data from './Data';
import Card from './Card';
export default function Boide(){
    const Element=Data.map((x)=>{
       return (<Card src={x.src} title={x.title} like={x.like} dislike={x.dislike}/>);
    });
    return (<div className="box">
        {Element}
    </div>);
};