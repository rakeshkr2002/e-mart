import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { cartContext } from "../context/CardContext";
import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const { cartItems, user,logout } = useContext(cartContext);
let[ state,setState]= useState({
  text:""
})

const navigate =useNavigate();
let handleChange = (e)=>{
  const {name,value} =e.target;
setState({
  ...state,
  [name]:value
})
}

let handleClick =()=>{
  try{
    navigate(`/${state.text}`)
    setState({
      text:""
    })
  }
  catch(err){
     console.log(err);
     
  }
 
  
}

  return (
    <>
      <div className="navSection">
        <div className="title">
          <h2>
            <Link to="/">E-Mart</Link>
          </h2>
        </div>
        <div className="search">
          <input type="text" placeholder="search ... enter only first word for two words " name="text" value={state.text} onChange={handleChange}  />
          <CiSearch style={{fontSize:"20px", paddingTop:"1px"}} onClick={handleClick}/>
        </div>
        <div className="user">
          <div className="user-detail">
            {user ? (
              <span> <FaCircleUser />  {user.username}</span>
            ) : (
              <>
                <FaCircleUser />
              </>
            )}
          </div>
         
        </div>
        <div>
          {user ? (
              <button onClick={logout} className="logoutButton"> logout </button>
            ) : (
              <>
                <Link to="/signup">Signup</Link> / <Link to="/login">Login</Link>
              </>
            )}
          </div>
          <div>
            {user &&  <Link to="/orders">My orders</Link>}
           
          </div>
       
          <div className="cart">
          {user ? (
            <Link to="/cart">  <p> <BsCart2></BsCart2> <sup>{cartItems.length}</sup></p></Link> 
            ) : (
              <>
                <p style={{cursor:"pointer"}} onClick={()=>navigate("/login")} ><BsCart2 /></p>
              </>
            )}
       
          </div>
       
      </div>
      <div className="subMenu">
        <ul>
          <li>
            <Link to="/mobiles">Mobiles</Link>
          </li>
          <li>
            <Link to="/computers">Computers</Link>
          </li>
          <li>
            <Link to="/watches">Watches</Link>
          </li>
          <li>
            <Link to="/mens">Mens wear</Link>
          </li>
          <li>
            <Link to="/womens">Womens wear</Link>
          </li>
          <li>
            <Link to="/furniture">Furniture</Link>
          </li>
          <li>
            <Link to="/kitchen">Kitchen</Link>
          </li>
          <li>
            <Link to="/fridge">Fridge</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/speakers">Speakers</Link>
          </li>
          <li>
            <Link to="/tv">TV's</Link>
          </li>
          <li>
            <Link to="/ac">Ac</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;