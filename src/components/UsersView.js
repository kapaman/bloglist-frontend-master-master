import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import usersService from "../services/users";
import {
  Link
} from "react-router-dom";
import {usersAction} from '../reducers/usersReducer';
import { Table } from 'react-bootstrap'

const SingleUser =({user})=>{
    return(
    <tr>
    <td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
    <td>{user.blogs.length}</td>
    </tr>)

}
const UsersView = () => {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("from usersview",state.users)

  useEffect(()=>{
      const fetchData = async()=>{
        let users =await usersService.getAllUsers();
        dispatch(usersAction(users))
      }
      fetchData()
  },[])

  // const users = ()=>{
  //     return <li></li>
  // }

  return (
    <div style={{margin:'80px 0',backgroundColor:'#f1f1f1'}} className="container-fluid"> 
      <h1 style={{color: 'rgb(46, 134, 222)', fontWeight: 'bolder'}}>Users</h1>
      <Table striped style={{marginTop:'1rem'}} >

    <table style={{width:'100%'}}>
        <thead>
    <tr style={{textAlign:'left'}}>
        <th>Name</th>
        <th>blogs created</th> 
    </tr></thead>
    <tbody>
        
    {state.users.length>0?state.users.map(el=><SingleUser key={el.username} user={el}/>):null}
    </tbody>
    </table>

    {/* {state.users.length>0?state.users.map(el=><IndividualUsers username={el.username} blogs={el.blogs}/>):null} */}
     </Table>
    </div>
  );
};
export default UsersView;
