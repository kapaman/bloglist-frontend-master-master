import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup } from "react-bootstrap";



const IndividualUser = (props) => {

const dispatch = useDispatch();



  const state = useSelector((state) => state);
  let element=state.users.find(el=>el.id===props.id);

 
  // const users = ()=>{
  //     return <li></li>
  // }
return (
    <div>
      
      <ListGroup style={{margin:'20px 0',padding:'60px 20px',backgroundColor:'#f1f1f1'}}>
      <h1 style={{color:'rgb(46, 134, 222)',fontWeight:'bolder'}}>{element.username}</h1>
      <h4 style={{color:'rgb(46, 134, 222)'}}>added the following blogs:</h4>
      <div style={{padding:'10px 0'}}>
          
      {element.blogs.length>0?element.blogs.map(el=><ListGroup.Item><li key={el.title.length*100*Math.random()} >{el.title}</li></ListGroup.Item>):<p style={{fontSize:''}}>This user is yet to add their first blog.</p>}
        </div>
      </ListGroup>


    </div>
  );
};
export default IndividualUser;
