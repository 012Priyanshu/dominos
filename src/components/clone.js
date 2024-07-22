import React from 'react'
import Logo from './photos/Logo.png'
import img from './photos/3.png'
import img1 from './photos/1.jpg'
import img2 from './photos/2.jpg'
import img3 from './photos/4.jpg'
import './res.css'

const clone=()=> {
    const capitalizeFirstLetter=(string)=> 
        {
           return string.charAt(0).toUpperCase() + string.slice(1)
        }
  return (
    <>
    {/* -------------------------------------------head-------------------------------------------- */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid mx-3">
    <a className="navbar-brand" href="/"> <img src={Logo} alt="..."/>  </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active mx-2" aria-current="page" href="/" style={{color: "rgb(45, 133, 206)",fontWeight:"bolder",fontSize:'20px'}}>Our menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="/" style={{color: "rgb(45, 133, 206)",fontWeight:"bolder",fontSize:'20px'}}>Domino's Stores</a>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
        <li className="nav-item">
          <a href='/' className="nav-link disabled mx-2" aria-disabled="true" style={{color: "rgb(45, 133, 206)",fontWeight:"bolder",fontSize:'20px'}}>Gift Cards </a>
        </li>
        <li className="nav-item">
          <a href='/' className="nav-link disabled mx-2" aria-disabled="true" style={{color: "rgb(45, 133, 206)",fontWeight:"bolder",fontSize:'20px'}}>Corporate Enquiry  </a>
        </li>
        <li className="nav-item">
          <a href='/' className="nav-link disabled mx-2" aria-disabled="true" style={{color: "rgb(45, 133, 206)",fontWeight:"bolder",fontSize:'20px'}}>Contact </a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

{/* --------------------------------------------------main----------------------------------------------- */}
<div className="main">
    <div className="img" style={{ backgroundColor:"rgba(8, 59, 155, 0.863)",display:'flex',justifyContent:"end"}}>
    <div className="content" style={{display:"block",justifyContent:"center",alignItems:"center",margin:'auto'}}>
    <h2 className='heading1' style={{paddingTop:"120px",paddingLeft:"50px",color:'whitesmoke'}}>{capitalizeFirstLetter("Dominos Online Ordering ")}</h2>
    <h2 className='heading2' style={{color: "lightseagreen"}}>{capitalizeFirstLetter("Yummy pizza delivered fresh & fast")}</h2>
    <button type="button" className="btn btn-success order">{capitalizeFirstLetter("order online")}</button>
    </div>
            <img src={img} alt="" />
    </div>

    <div className="offers" style={{width:"100%",height:"100%",backgroundColor:"rgb(245, 231, 231);"}}>
          <h2 style={{color:"rgb(12, 99, 156)",margin:"50px 80px"}}>{capitalizeFirstLetter("coupans & offers")}</h2>

             <div className="container photos">
             
                <img className='size' src={img1} alt=""  />  
              
              
              
               <img className='size' src={img2} alt=""/> 
              

              
                <img className='size' src={img3} alt=""/>
              
             </div>
          
          {/* <div className="container">
            <div className="row gy-3">
              
              <div className="col-md-4 photo">
                <img src={img1} alt="" style={{height:"200px",width:"410px"}} />  
              </div>
              
              <div className="col-md-4 photo">
               <img src={img2} alt="" style={{height:"200px",width:"410px"}}/> 
              </div>

              <div className="col-md-4 photo">
                <img src={img3} alt="" style={{height:"200px",width:"410px"}}/>
              </div>
              
            </div>
          </div> */}




          <h2 style={{color:"rgb(12, 99, 156)",margin:"50px 80px"}}>{capitalizeFirstLetter("explore")}</h2>
          <div className="container">
            <div className="row gy-3">
              <div className="col-md-3">
              <i class="fa-solid fa-layer-group" style={{fontSize:"80px"}}></i>
              <h2>{capitalizeFirstLetter("our menu")}</h2>

              </div>
              <div className="col-md-3">
              <i class="fa-solid fa-shop" style={{fontSize:"80px"}}></i>
              <h2>{capitalizeFirstLetter("nearby store")}</h2>

              </div>
              <div className="col-md-3">
              <i class="fa-solid fa-cake-candles" style={{fontSize:"80px"}}></i>
              <h2>{capitalizeFirstLetter("birthday's party's")}</h2>

              </div>
              <div className="col-md-3">
              <i class="fa-solid fa-plate-wheat" style={{fontSize:"80px"}}></i>
              <h2>{capitalizeFirstLetter("catering")}</h2>

              </div>
            </div>
          </div>
    </div>

    <div className="para">
      <div className="segment" style={{margin:'80px 80px'}}>
        <h2 style={{color:"rgb(12, 99, 156)"}}>{capitalizeFirstLetter("Domino's Pizza: Delivery Happiness")}</h2>
        <p style={{color: 'grey'}}>What’s better than having a crispy melty pizza, you ask? Having that crispy and melty pizza in the comfort of your own home with the ones you love, we say. With Domino's it is always “Rishton ka time”. Whether it's a treat for your promotion, a kid topping his class or winning the heart of your wife who is too tired to cook after a long day at work! A cheesy slice of the best pizza is all one needs to put things into perspective and start any celebration. Plus, you do not even need to rush to the restaurant to have one now. A call, a few clicks on our website or a few touches on the mobile screen is all you have to do to have that tempting, light-on-the-pocket pizza at your doorstep. There is something for everyone here. The vegetarians, non-vegetarians, the sides’ lovers and also the ones who love to have something sweet by the time they reach the last bite of the last slice of pizza slice.</p>


        <h2 style={{color:"rgb(12, 99, 156)"}}>{capitalizeFirstLetter("What We Need - More Choice. More Fun.")}</h2>
        <p style={{color: 'grey'}}>No matter what the situation, pizza always helps. Especially a pizza that gives you the freedom to choose your toppings - from paneer, crisp capsicum, onion, grilled mushroom, golden corn, black olives, fresh tomato, red paprika, jalapeno, paneer tikka and extra cheese to non-veg toppings such as pepper barbeque chicken, peri-peri chicken, grilled chicken rasher, chicken sausage or chicken tikka- the options are almost endless, anything and everything you can think of that too on top of the crust of your choice - New hand-tossed crust, wheat thin crust, cheese burst crust, classic hand-tossed crust or a fresh pan pizza. Because just like a pizza, Domino's understands you. And to shoo away those end-of-the-month blues while placing your order with our pizza restaurant, check out the everyday pizzas from pizza mania combos with everyday value offer of 2 pizzas starting at just ₹99 (regular size) and ₹199 (medium size) each.</p>


        <h2 style={{color:"rgb(12, 99, 156)"}}>{capitalizeFirstLetter("The Promise Of 30-Minute Delivery")}</h2>
        <p style={{color: 'grey'}}>The icing on the cake or more aptly the extra cheese on your already fabulous pizza is that Domino’s takes only half an hour for its pizza delivery service. Don’t believe us? Time it if you please. With 1250+ stores present all over India, you can have a Domino’s pizza even while traveling on a train. Yes, you are reading it right, you can enjoy pizza on train too. So stop googling for the “pizza shops near me” and order from your nearest pizza outlet to have a hot box of pizza on your table in the next 30 minutes, or berth at the next halting station.</p>
      </div>
    </div>
</div>

<div className="footer">
  <ul style={{color:'grey',padding:"20px 0px"}}><h3>{capitalizeFirstLetter("menu")}</h3>
    <li style={{paddingTop:'20px'}}><a href="/">Veg Pizza</a></li>
    <li><a href="/">Chicken Pizza</a></li>
    <li><a href="/">Pasta</a></li>
    <li><a href="/">Pizza Crust</a></li>
    <li><a href="/">Beverages</a></li>
    <li><a href="/">Pizza Mania</a></li>
    <li><a href="/">Burger Pizza</a></li>
  </ul>
  <ul style={{color:'grey',padding:"20px 0px"}}><h3>{capitalizeFirstLetter("COMPANY")}</h3>
    <li style={{paddingTop:'20px'}}><a href="/">Blog</a></li>
    <li><a href="/">Invester</a></li>
    <li><a href="/">Feedback</a></li>
    <li><a href="/">Ads</a></li>
  </ul>

  <ul style={{color:'grey',padding:"20px 0px"}}><h3>{capitalizeFirstLetter("PIZZA RESTRAURENTS")}</h3>
    <li style={{paddingTop:'20px'}}><a href="/">Retraurent Near Me</a></li>
    <li><a href="/">Pizza Near Me</a></li>
    <li><a href="/">Food Near Me</a></li>
    <li><a href="/">Food Delivery</a></li>
    <li><a href="/">Italian Food</a></li>
    <li><a href="/">Order Food Online</a></li>
  </ul>
  <ul style={{color:'grey',padding:"20px 0px"}}><h3>{capitalizeFirstLetter("ABOUT")}</h3>
    <li style={{paddingTop:'20px'}}><a href="/">Gift Card</a></li>
    <li><a href="/">Card Balance Enquiry</a></li>
    <li><a href="/">FAQ</a></li>
    <li><a href="/">Virtual Pizza Party</a></li>
    <li><a href="/">E-GIFT Voucher</a></li>
  </ul>

  <ul style={{color:'grey',padding:"20px 0px"}}><h3>{capitalizeFirstLetter("LEGAL")}</h3>
    <li style={{paddingTop:'20px'}}><a href="/">Disclaimer</a></li>
    <li><a href="/">Terms & Condition</a></li>
    <li><a href="/">Privacy Policy</a></li>

  </ul>

</div>


    <div className="lastLine" style={{display:'flex',justifyContent:"center",alignItems:'center',backgroundColor: 'rgb(4, 34, 68)'}}>
              <h6 style={{color:'rgb(178, 193, 206)',padding:"20px 0px"}}>All Rights Reserved. Copyright © Jubilant FoodWorks Ltd.</h6>
    </div>
    </>
  )
}
export default clone


