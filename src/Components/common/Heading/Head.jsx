import react from 'react'
import logo from '../../../assets/logo.png'
const Head = () => {
  return (
    <>
        <section className='head'>
            <div className="container flexSBB headers">
                {/* <div className="logo">
                    <h1>SKILLROBOSTEM</h1>
                    <span>Education and Learning</span>
                </div> */}
                <div className='log'>
                    <img src={logo} alt="logo" />
                </div>
                <div className="social">
                    <i className="fab  fa-facebook-f icon"></i>
                    <i className="fab fa-instagram icon"></i>
                    <i className="fab fa-twitter icon"></i>
                    <i className="fab fa-youtube icon"></i>

                </div>
                

            </div>
        </section>
    </>

  )
}

export default Head