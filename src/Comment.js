import React,{useState} from 'react';
let l=3;
function Show(){
    const [v,setv]=useState({value:""});
    const [todo,settodo]=useState([{value:"you are the first one",key:1}]);
    function f(){
        settodo([...todo,v]);
        l++;
    }
    return (
        <div className="cd" onKeyDown={(e)=>{(e.key==="Enter")&&f()}}>
            <div className="ca">
             <ul className="cul">
        {todo.map((k)=>(<div className="cl"><li className="cll">{k.value}</li>
       <div className='pf'><button className="ef" onClick={()=>settodo(todo.filter((j)=>j.key!==k.key))}>REMOVE</button></div>
        </div>))}
        </ul>
        </div>
        <div className='textline'>
        <input className="inp" type="text" value={v.value} onChange={(e)=>{setv({value:e.target.value,key:l});}}></input>
        <button className="l" onClick={f}>ADD</button></div>
        </div>
    );
}
export default Show;