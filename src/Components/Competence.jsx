import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Rectangle1 from "../Assets/Rectangle1.png";
import Rectangle2 from "../Assets/Rectangle2.png";
import Rectangle3 from "../Assets/Rectangle3.png";
import Rectangle4 from "../Assets/Rectangle4.png";
import Rectangle5 from "../Assets/Rectangle5.png";
import Rectangle6 from "../Assets/Rectangle6.png";
import Rectangle7 from "../Assets/Rectangle7.png";
import Rectangle8 from "../Assets/Rectangle8.png";

const Competence = () => {


    return (
        <section id='competences' className='competences bg-white'>
            <div className="container">
                <div className="row g-3 mt-2 mb-4 justify-content-center">
                    <div className="text-center my-5">
                        <h1 className='fs-1 fw-bold'>MES COMPETENECES</h1>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="titre py-3 d-flex flex-column justify-content-end align-items-end">
                            <h1 className='fs-3 mr-3'>OUTILS</h1>
                        </div>

                        <div className='bar mt-5 d-flex flex-column'>
                            <div className="progress-bar d-flex flex-row ">
                                <div className='progress mr-2 mt-2'>
                                    <img src={Rectangle1} alt="Rectangle1" className='img-fluid' />
                                </div>

                                <div className="langage ml-7">
                                    <h2 className='fs-4'>BOOTSTRAP</h2>
                                </div>
                            </div>

                            <div className="progress-bar d-flex flex-row ">
                                <div className='progress mr-10 mt-2'>
                                    <img src={Rectangle2} alt="Rectangle2" className='img-fluid' />
                                </div>

                                <div className="langage mr-11">
                                    <h2 className='fs-4'>LARAVEL</h2>
                                </div>
                            </div>

                            <div className="progress-bar d-flex flex-row ">
                                <div className='progress mr-11 mt-2'>
                                    <img src={Rectangle3} alt="Rectangle3" className='img-fluid' />
                                </div>

                                <div className="langage mr-11">
                                    <h2 className='fs-4 mr-7'>REACT</h2>
                                </div>
                            </div>


                            <div className="progress-bar d-flex flex-row ">
                                <div className='progress mr-11 mt-2'>
                                    <img src={Rectangle4} alt="Rectangle4" className='img-fluid' />
                                </div>

                                <div className="langage mr-11">
                                    <h2 className='fs-4 mr-3'>DIANGO</h2>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-6 col-lg-6">
                        <div className="titre py-3 d-flex flex-column justify-content-start align-items-start">
                            <h1 className='fs-3 ml-3'>LANGAGE</h1>
                        </div>

                        <div className='bar mt-5 d-flex flex-column'>
                            <div className="progress-bar d-flex flex-row ">
                                <div className="langage">
                                    <h2 className='fs-4'>HTML</h2>
                                </div>
                                <div className='progress mt-2 ml-5'>
                                    <img src={Rectangle5} alt="Rectangle5" className='img-fluid' />

                                </div>


                            </div>

                            <div className="progress-bar d-flex flex-row ">
                                <div className="langage">
                                    <h2 className='fs-4'>CSS</h2>
                                </div>

                                <div className='progress mt-2 ml-9'>
                                    <img src={Rectangle6} alt="Rectangle6" className='img-fluid' />

                                </div>
                            </div>

                            <div className="progress-bar d-flex flex-row ">
                                <div className="langage  mr-5">
                                    <h2 className='fs-4'>JAVASCRIPT</h2>
                                </div>

                                <div className='progress mt-2  mr-2'>
                                    <img src={Rectangle7} alt="Rectangle7" className='img-fluid' />

                                </div>
                            </div>


                            <div className="progress-bar d-flex flex-row ">

                                <div className="langage">
                                    <h2 className='fs-4'>PHP</h2>
                                </div>

                                <div className='progress mt-2 ml-11'>
                                    <img src={Rectangle8} alt="Rectangle8" className='img-fluid' />

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row g-3 mt-5 mb-4">
                    <div className="col-md-6 col-lg-6">
                        <div className="titre1 py-3 mr-11 text-center d-flex flex-column justify-content-end align-items-end">
                            <h1 className='fs-3 ml-11'>LANGUES</h1>
                        </div>

                        <div className="langue text-center ml-11 d-flex flex-column justify-content-center align-items-center">
                            <h2 className='fs-4 ml-11'>FRANCAIS</h2>
                            <h2 className='fs-4 ml-11 mt-3'>ANGLAIS</h2>
                            <h2 className='fs-4 ml-11 mt-3'>POULAAR</h2>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6">
                        <div className="titre1 py-3 d-flex flex-column justify-content-start align-items-start">
                            <h1 className='fs-3'>HOBBIES</h1>
                        </div>

                        <div className="paragraghe text-start ml-11">
                            <p className='fs-6'>Création du blog « Mon job de dev »</p>
                            <p className='fs-6'>Le développement web en général</p>
                            <p className='fs-6'>PWA</p>
                            <p className='fs-6'>Calcus distribués</p>
                        </div>

                    </div>

                </div>

            </div>
        </section >
    )
}

export default Competence
