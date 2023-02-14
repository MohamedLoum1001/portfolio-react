import React from 'react'
import rond1 from "../Assets/rond1.png";
import rond2 from "../Assets/rond2.png";
import rond3 from "../Assets/rond3.png";
import rond4 from "../Assets/rond4.png";
import rond5 from "../Assets/rond5.png";

const Presentation = () => {
    return (
        <section id='presentation' className='presentation bg-white'>
            <div className="container">
                <div className="text-center text-dark py-5">
                    <h1 className='fs-1 fw-bold'>Présentation</h1>
                </div>
                <div className="row g-3 justify-content-center">
                    <div className="col-md-6 col-lg-6">
                        <div className="icon text-left text-dark d-flex flex-column">
                             <div className="img-text d-flex flex-row">
                                <img src={rond1} alt="rond1" className='img-fluid' />
                                <p className='fs-5 fw-normal text-dark mt-3'>Capacité d'apprentissage</p>
                            </div>

                            <div className="img-text d-flex flex-row">
                                <img src={rond2} alt="rond2" className='img-fluid' />
                                <p className='fs-5 fw-normal text-dark my-3'>Collaboration</p>
                            </div>

                            <div className="img-text d-flex flex-row">
                                <img src={rond3} alt="rond3" className='img-fluid' />
                                <p className='fs-5 fw-normal text-dark my-3'>Responsabilité</p>
                            </div>

                            <div className="img-text d-flex flex-row">
                                <img src={rond4} alt="rond4" className='img-fluid' />
                                <p className='fs-5 fw-normal text-dark my-3'>Prise de décision</p>
                            </div>

                            <div className="img-text d-flex flex-row">
                                <img src={rond5} alt="rond5" className='img-fluid' />
                                <p className='fs-5 fw-normal text-dark my-3'>Gestion du temps</p>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="para-text text-dark">
                            <div className="titre">
                                <h2 className='fs-4 fw-bolder'>Triforce !</h2>
                            </div>

                            <div className="text">
                                <p className='fs-11 fw-normal text-dark'>A l'école, je suis FORCE de proposition, j'aime chercher des solutions <br />
                                et ainsi rendre services. Passionné par l'apprentissage et la découverte <br />
                                intellectuelle, j'ai développé une FORCE de travail adin de toujours <br />
                                progresser au quotidien. FORCE tranquille, j'ai toujours sucollaborer et <br />
                                pleinement m'intégrer au sein du collectif.</p>

                                <p className=' fs-11 fw-normal text-dark my-5'>Besoin d'un collaborateur flexible et persévérant ? <br />
                                Je vous propose mes services par le biais d'une ALTERNANCE. Avec 4 <br />
                                jours dans votre société et 1 jour en formation, le tout modulable comme <br />
                                vous le souhaitez, je pourrais facilement répondre a vos besoins.</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default Presentation
