import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -Logo
 *  -Nav items
 * Body
 *  -Restorent Container
 *   -Search Bar
 * Footer
 *   -copyright
 * -Links
 * -Address
 * -Contact
 * 
 */

const Header=()=>
{
    return (
        <div className="header">
            <div className="logo-container">
                 <img  className="logo" src="https://img.freepik.com/free-vector/hand-drawn-cs-food-logo_23-2149385086.jpg"></img>
            </div>
            <div className="Nav-items  ">
                <ul >
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

const Body=()=>
{
    return(<div className="body">
        <div className="search">
        
        </div>
        <div className="re-cards"></div>
    </div>)
}

const AppLayout=()=>(
    <div className="app">
    <Header/>
        </div>
)

const root= ReactDOM.createRoot(document.getElementById("root"))
let data=100;
root.render(
<AppLayout/>
);
