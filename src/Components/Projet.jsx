import React from 'react'
import Projet1 from "../Assets/projet1.png";
import Projet2 from "../Assets/projet2.png";
import Projet3 from "../Assets/projet3.png";
import Projet4 from "../Assets/projet4.png";


const Projet = () => {
    return (
        <section id='projet' className='projet'>
            <div className="container">
                <div className="row g-3 justify-content-center">
                    <div className="col-md-3 col-lg-">
                        <div className="col-item">
                            <div className="img">
                                <img src={Projet1} alt="Projet1" className='img-fluid mx-auto' />
                            </div>

                            <div className="para text-center mr-11">
                                <p className='fs-11 text-light text-center'>18 projets</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-lg-3">
                        <div className="col-item">
                            <div className="img">
                                <img src={Projet2} alt="Projet2" className='img-fluid mx-auto' />
                            </div>
                            <div className="para text-center">
                                <p className='fs-11 text-light text-center'>30 algorithmes</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-lg-3">
                        <div className="col-item">
                            <div className="img">
                                <img src={Projet3} alt="Projet3" className='img-fluid mx-auto' />
                            </div>

                            <div className="para text-center">
                                <p className='fs-11 text-light text-center'>10 consol.log();</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-3 col-lg-3">
                        <div className="col-item1">
                            <div className="img">
                                <img src={Projet4} alt="Projet4" className='img-fluid mx-auto' />
                            </div>
                            <div className="para text-center">
                                <p className='fs-11 text-light text-center'>16 border: solid red 1px;</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default Projet
