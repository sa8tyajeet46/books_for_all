import React,{useState} from 'react';
export default function Card(props){
    const [k,setk]=useState(props.like);
    const [d,setd]=useState(props.dislike);
    function increase(){
        if(k===props.like)
        {
            setk(props.like+1);
            if(d===props.dislike+1)
            {
                setd(props.dislike);
            }
        }
        else{
            setk(props.like);
        }
    }
    function decrease(){
        if(d===props.dislike)
        {
            setd(props.dislike+1);
            if(k===props.like+1)
            {
                setk(props.like);
            }
        }
        else{
            setd(props.dislike);
        }
    }
    return(
    <div className="container">
        <div className='imgcontainer'>
        <img src={props.src} width="100%" height="100%"></img>
        </div>
        <p className="title">{props.title}</p>
        <p><button className='right' onClick={increase}><i class="fas fa-thumbs-up">le</i></button><span >{k}</span>
        <button className='wrong' onClick={decrease}><i class="fas fa-thumbs-down">ke</i></button><span >{d}</span></p>
        <button className='down' ><i class="fas fa-file-download"></i></button>
    </div>
    );
}