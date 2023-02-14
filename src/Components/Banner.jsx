import React from 'react'
import Kande from "../Assets/KANDE.png";
import vector from "../Assets/Vector1.png";
import iconPhOne from "../Assets/icon-phone.png";
import iconMessage from "../Assets/icon-message.png";
import iconLocalisation from "../Assets/icon-localisation.png";
import iconBanque from "../Assets/icon-banque.png";


export const Banner = () => {
  return (
    <section id='home' className="home">
      <div className="container">

        <div className="row g-3 justify-content-center">
          <div className="col-md-7 col-lg-6 d-flex align-items-center">
            <div className="para">
              <div className="text">
                <p className='fs-3 fw-semibold text-light'>Hello ! je suis <span className='fs-3 fw-semibold'>HOUSSEYNOU KANDE</span> <br />
                  Développeur backend senior à Volkeno</p>
              </div>

              <div className="icon d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-md-center align-items-md-center">

                <div className='div1 d-flex flex-row me-4'>
                  <div className='d-flex flex-row justify-content-evenly align-items-center'>
                    <img src={iconPhOne} alt="iconPhOne" className='img-fluid mx-auto me-2' />
                    <p className='text-light my-5 me-2'>76 605 84 14</p>
                  </div>

                  <div className='d-flex flex-row justify-content-evenly align-items-center'>
                    <img src={iconMessage} alt="iconMessage" className='img-fluid mx-auto ms-2' />
                    <p className='text-light my-5 ms-2'>hkend@gmail.com</p>
                  </div>
                </div>

                <div className='div2 d-flex flex-row'>
                  <div className='d-flex flex-row justify-content-evenly align-items-center me-4'>
                    <img src={iconLocalisation} alt="iconLocalisation" className='img-fluid mx-auto' />
                    <p className='text-light my-5 ms-2'>Liberté 6 Dakar</p>
                  </div>

                  <div className='d-flex flex-row justify-content-evenly align-items-center'>
                    <img src={iconBanque} alt="iconBanque" className='img-fluid mx-auto me-2' />
                    <p className='text-light my-5 me-2'>Volkeno</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className='Kande mx-auto'>
              <img src={Kande} alt="Kande" className='img-fluid mx-auto' />
            </div>

          </div>
        </div>
      </div>
      <div className='image w-100 mx-auto'>
        <img src={vector} alt="vector" className="img-fluid w-100 mx-auto" />
      </div>

    </section>
  )
}

export default Banner
