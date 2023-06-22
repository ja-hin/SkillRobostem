import React from 'react'
import './contact.css'
const Contactadd = () => {
        const map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7003.657158130427!2d77.28314073722258!3d28.63489931929798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb55c4f9ce65%3A0xdb2f629d6d6b4690!2sNirman%20Vihar%2C%20Preet%20Vihar%2C%20New%20Delhi%2C%20Delhi%20110092!5e0!3m2!1sen!2sin!4v1685953748560!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
      return (
        <>
        <section className='contacts padding'>
            <div className='contain shadow'>
              <div className='leftrows'>
                <iframe src={map}></iframe>
              </div>
              <div className='rightrows'>
                <h1>Contact us</h1>
                <p>We're open for any suggestion or just to have a chat</p>
    
                <div className='grid4'>
                  <div className='boxe'>
                    <h4>ADDRESS:</h4>
                    <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                  </div>
                  <div className='boxe'>
                    <h4>EMAIL:</h4>
                    <p> info@yoursite.com</p>
                  </div>
                  <div className='boxe'>
                    <h4>PHONE:</h4>
                    <p> + 1235 2355 98</p>
                  </div>
                </div>
    
                <form action=''>
                  <div className='flexx'>
                    <input type='text' placeholder='Name' />
                    <input type='email' placeholder='Email' />
                  </div>
                  <input type='text' placeholder='Subject' />
                  <textarea cols='30' rows='10'>
                    Create a message here...
                  </textarea>
                  <button className='primary-btn'>SEND MESSAGE</button>
                </form>
    
                <h3>Follow us here</h3>
                <span>FACEBOOK TWITTER INSTAGRAM </span>
              </div>
            </div>
          </section>
        </>
      )
    }


export default Contactadd