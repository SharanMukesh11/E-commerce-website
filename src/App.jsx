import { useEffect, useState } from 'react'
import Sign from './sign'
import './App.css'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";
import { DiAtom } from "react-icons/di";
import { IoIosArrowBack } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import Logopic from './assets/Frame 136278.png'
import USpic from './assets/United.png';
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";



function App() {
        //-------------------------fatching the product
      const [datas,setdatas]=useState([]);

      useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setdatas(data));
      },[]);
        ///------------------------click visible 
      let [visible,setvisible]=useState(false);
      let open =()=>{
        if(visible=== true){
          setvisible(!visible)
        }
        if(visible===false){
          setvisible(true)
        }
        
     }
     let [visible1,setvisible1]=useState(false);
      let open1 =()=>{
        if(visible1=== true){
          setvisible1(!visible1)
        }
        if(visible1===false){
          setvisible1(true)
        }
        
     }
     let [visible2,setvisible2]=useState(false);
      let open2 =()=>{
        if(visible2=== true){
          setvisible2(!visible2)
        }
        if(visible2===false){
          setvisible2(true)
        }
        
     }
     let [visible3,setvisible3]=useState(false);
      let open3 =()=>{
        if(visible3=== true){
          setvisible3(!visible3)
        }
        if(visible3===false){
          setvisible3(true)
        }
        
     }
  return (
    <>
    
      <div className='overall'>
        {/* -------------------------navbar----------------- */}
        <nav className='fullnav'>
          {/* ---------------------------------first navbar- */}
          <div className='firstnav'>
            <div className='leftlogo'>
              <DiAtom />
            </div>
            <div className='centlogo'>
              LOGO
            </div>
            <div className='logoicons'>
              <CiSearch />
              <CiHeart />
              <IoBagHandleOutline />
              <button className="plain" onClick={open3}> <IoPersonOutline /></button>
              Eng
              <BsChevronDown />

            </div>
          </div>
          {visible3 &&(
              <Sign/>
          )}
          {/* ----------------------------------------second navbar- */}
          <div className='secnav'>
            <div className='seclogo'>
              <p>SHOP</p>
              <p>SKILLS</p>
              <p>STORIES</p>
              <p>ABOUT</p>
              <p>CONTACT US</p>
            </div>
          </div>
        </nav>
        {/* --------------------------------------------------home 1- */}
        <div className='home1'>
          <div className='ha1'>
            <p className='ht1'>DISCOVER OUR PRODUCTS</p>
            <p className='ht2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo modi adipisci eum, incidunt culpa  elit repudiandae temporibus tenetur dolore illo commodi.</p>
          </div>
        </div>

        {/* -----------------------------------------------------filter bar */}
        <div className='filter'>
          <div className='fil1'>
            <div>
              <b>3425 ITEMS</b>
            </div>
            <div className='light'>
             <button className='plain' onClick={open2}><IoIosArrowBack /></button> &nbsp;
              HIDE FILTER
            </div>
          </div>
          <div className='fil2 '>
            RECOMMENDED &nbsp;
            <button className='plain' onClick={open}> <BsChevronDown /></button>
          </div>
        </div>
        <div>
        
        </div>
        {visible &&(
          <div className='hidebox1'>
          <div className='fil2'>
           <b>RECOMMENDED</b> 
          </div>
          <p> NEWEST FIRST</p>
          <p> POPULAR</p>
          <p> PRICE: HIGH TO LOW</p>
          <p> PRICE : LOW TO HIGH</p>
          </div>)}
        {/* --------------------------------product page--------------------- */}
        <div className='products'>
          {visible2 &&(<div className='leftprot'>
            <div className='com'>
              <div>
            <MdCheckBoxOutlineBlank />&nbsp;&nbsp;CUSTOMIZBIL
              </div>
            </div>
            
            <div className='com1 '>
            <div className='com2 '>
              <h4>IDEAL FOR</h4>
              <button className='plain'> <BsChevronDown onClick={open1} /></button>
            </div>
            
            <div>
            <br/>
              All
            </div>
            </div>
            {visible1 && (
              <div className='hidebox visible'>
              <div className='light'> UnSelect All</div>
              <div><MdCheckBoxOutlineBlank />&nbsp;&nbsp;Men</div>
              <div><MdCheckBoxOutlineBlank />&nbsp;&nbsp;Women</div>
              <div><MdCheckBoxOutlineBlank />&nbsp;&nbsp;Baby & kids</div>
            </div>
            )}
            <div className='com1 '>
            <div className='com2 '>
              <h4>OCCASION</h4>
              <BsChevronDown />
            </div>
            <div>
            <br/>
              All
            </div>
            </div>
            <div className='com1'>
            <div className='com2 '>
              <h4>WORK</h4>
              <BsChevronDown />
            </div>
            <div>
            <br/>
              All
            </div>
            </div>
            <div className='com1'>
            <div className='com2 '>
              <h4>FABRIC</h4>
              <BsChevronDown />
            </div>
            <div>
            <br/>
              All
            </div>
            </div>
            <div className='com1'>
            <div className='com2 '>
              <h4>SEGMENT</h4>
              <BsChevronDown />
            </div>
            <div>
            <br/>
              All
            </div>
            </div>
            <div className='com1'>
            <div className='com2 '>
              <h4>SUITABLE FOR</h4>
              <BsChevronDown />
            </div>
            <div>
            <br/>
              All
            </div>
            </div>
            <div className='com1'>
            <div className='com2 '>
              <h4>RAM MATERIALS</h4>
              <BsChevronDown />
            </div>
            <div>
            <br/>
              All
            </div>
            </div>
            <div className='com1'>
            <div className='com2 '>
              <h4>PATTERN</h4>
              <BsChevronDown />
            </div>
            <div>
            <br/>
              All
            </div>
            </div>
            
            
          </div>)}
          {/* ------------------------------------------------product right */}
          <div className='rightprot'>
            {datas.map((item)=>{
          return <div className='fullimg'>
              <div className='imgdiv'>
                <img src={item.image} style={{height:"400px",width:"280px"}}alt="" />
              </div>
              <div className='imgcont'>
                <h4>{item.title}</h4>
                <p className='size1'> <a href='' onClick={open3}> Signin </a> or create an account to see pricing</p>
                <CiHeart className='size2' />
              </div>
            </div>
            })}
            
            
          </div>
          

        </div>
        {/* --------------------------------footer */}
        <div className='footer'>
          
          <div className='leftfoot'>
            <div>
            <h1> BE THE FIRST TO KNOW</h1><br/>
            <p>Sign up for updates from metta muse.</p>
            </div>
            <div >
              <input className='footin' type="text" placeholder="Enter your E-mail..."/>
              <button className='footbtn'>SUBSCRIBE</button>
            </div>
          </div>
          <div className='rightfoot'>
            
            <h3>CONTACT US</h3>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <h3>CURRENCY</h3>
            <div> <img src={USpic} alt="" /> .USD</div>
            <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            
          </div>
          
        </div>

        {/* ----------------------------------------second footer */}
        <div className='footer'>
          
          <div className='leftfoot'>
            <div>
            <p className='ht2'> metta muse</p>
            <p className='ht2'> About Us</p>
            <p className='ht2'> Stories</p>
            <p className='ht2'> Artisans</p>
            <p className='ht2'> Boutiques</p>
            <p className='ht2'> Contact Us</p>
            <p className='ht2'> EU Compliances Docs</p>
            </div>
          </div>
          <div className='leftfoot1'>
            <div>
            <p className='ht2'> QUICK LINKS</p>
            <p className='ht2'> Orders & Shipping</p>
            <p className='ht2'> Join/Login as a Seller</p>
            <p className='ht2'> Payment & Pricing</p>
            <p className='ht2'> Return & Refunds</p>
            <p className='ht2'> FAQs</p>
            <p className='ht2'> Privacy Policy</p>
            <p className='ht2'> Terms & conditions</p>
            </div>
          </div>
          <div className='rightfoot1'>
            
          <div>
            <h1> FOLLOW US </h1><br/>
            <div>
            <RiInstagramFill style={{fontSize:"35px"}} />&nbsp;&nbsp;&nbsp;
            <FaLinkedin style={{fontSize:"35px"}} />
            </div>
            </div>
            <div className='size5'>
            <p> mettu muse ACCEPTS  </p><br/>
            <img src={Logopic} style={{height:"30px",width:"230px"}} alt="" />
              
            </div>
          </div>
          
        </div>








      </div>

    </>
  )
}

export default App
