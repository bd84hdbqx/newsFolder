import React from 'react'
import "./index.css"
import img from "../../assets/imgs.jpg"
import img2 from "../../assets/googlePlay.svg"
import img3 from "../../assets/ellipse.svg"
import img4 from "../../assets/ellipse2.svg"
import img5 from "../../assets/logo.svg"
import img6 from "../../assets/AppStore.svg"
import Form from '../../Componets/Form'
function Section() {
  return (
    <main>
        <section className='signUp'>
            <div className='container1'>
                <div className="title">
                <p id='text'>Social media shared today, tomorrow or by location</p>
                </div>
                <div className='image'>
                    <img src={img} alt="" />
                </div>
                <div className='circle'>
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img3} alt="" />

                </div>

            </div>
            <div className='container2'>
                <div className="container">
                    <div className='logo'> 
                    <img src={img5} alt="" />
                    <h3>Capzul</h3></div>
                   <h4>Create account</h4>
                   <p id='text2'>For business, band or celebrity.</p>
                   <Form/>
                   <img className="btns"src={img2} alt="" />
            <img className="btns" src={img6} alt="" />
                </div>


            </div>
           
        </section>
        
    </main>
  )
}

export default Section