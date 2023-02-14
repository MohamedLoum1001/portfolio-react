import React from 'react';
import volkeno1 from "../Assets/volkeno1.png";
import fewnu from "../Assets/fewnu.png";
import fewnuMobile from "../Assets/fewnu-mobile.png";
import volkeno2 from "../Assets/volkeno2.png";
import bakeli from "../Assets/bakeli.png";
import feewi from "../Assets/mixte-feewi.png";

const Portfolio = () => {
    return (
        <section id='portfolio' className='portfolio'>
            <div className="container">

                <div className="row g-3 mt-5 mb-4 p-5 justify-content-center">
                    <div className="text-center my-5">
                        <h1 className='fs-1 fw-bold'>MON PORTFOLIO</h1>
                    </div>
                    {/* CARD 1 */}
                    <div className="col-md-4 col-lg-4">
                        <div className="portfolio-item p-5 d-flex flex-column justify-content-center align-items-center">
                            <div className="image">
                                <img src={volkeno1} alt="volkeno1" className='img-fluid mx-auto'  width="200px" height="100px"/>
                            </div>
                            <div className="titre my-4">
                                <h2 className='text-center mt-4'>Volkeno</h2>
                            </div>
                            <div className="texte text-center d-flex align-items-center">
                                <p className='text-center'>Créer un équivalent Netflix de <br />
                                    Disney. Pour l'anecdote ce site a <br />
                                    été fait avant la création de Disney+. <br />
                                    #React#API#Redux</p>
                            </div>
                            <div className="bouton">
                                <button type="button" className="btn">Voir le projet github</button>
                            </div>
                        </div>
                    </div>
                    {/* CARD 2*/}
                    <div className="col-md-4 col-lg-4">
                        <div className="portfolio-item p-5 d-flex flex-column justify-content-center align-items-center">
                            <div className="image d-flex align-items-center">
                                <img src={fewnu} alt="fewnu" className='img-fluid mx-auto'  width="200px" height="100px"/>
                            </div>
                            <div className="titre d-flex align-items-center my-4">
                                <h2 className=' text-center mt-4'>Fewnu</h2>
                            </div>
                            <div className="texte d-flex align-items-center">
                                <p className='text-center'>Créer un équivalent Netflix de <br />
                                    Disney. Pour l'anecdote ce site a <br />
                                    été fait avant la création de Disney+. <br />
                                    #React#API#Redux</p>
                            </div>
                            <div className="bouton text-center d-flex align-items-center">
                                <button type="button" className="btn">Voir le projet github</button>
                            </div>
                        </div>
                    </div> 
                    {/* CARD 3 */}
                    <div className="col-md-4 col-lg-4">
                        <div className="portfolio-item p-5 d-flex flex-column justify-content-center align-items-center">
                            <div className="image d-flex align-items-center">
                                <img src={fewnuMobile} alt="fewnuMobile" className='img-fluid mx-auto'  width="200px" height="100px"/>
                            </div>
                            <div className="titre d-flex align-items-center my-4">
                                <h2  className='text-center mt-4'>Fewnu mobile</h2>
                            </div>
                            <div className="texte text-center d-flex align-items-center">
                                <p className='text-center'>Créer un équivalent Netflix de <br />
                                    Disney. Pour l'anecdote ce site a <br />
                                    été fait avant la création de Disney+. <br />
                                    #React#API#Redux</p>
                            </div>
                            <div className="bouton text-center d-flex align-items-center">
                                <button type="button" className="btn">Voir le projet github</button>
                            </div>
                        </div>
                    </div>
                    {/* CARD 4 */}
                    <div className="col-md-4 col-lg-4">
                        <div className="portfolio-item p-5 d-flex flex-column justify-content-center align-items-center">
                            <div className="image d-flex align-items-center">
                                <img src={volkeno2} alt="volkeno2" className='img-fluid mx-auto'/>
                            </div>
                            <div className="titre d-flex align-items-center my-4">
                                <h2 className='text-center mt-4'>Fewnu mobile</h2>
                            </div>
                            <div className="texte text-center d-flex align-items-center">
                                <p className='text-center'>Créer un équivalent Netflix de <br />
                                    Disney. Pour l'anecdote ce site a <br />
                                    été fait avant la création de Disney+. <br />
                                    #React#API#Redux</p>
                            </div>
                            <div className="bouton text-center d-flex align-items-center">
                                <button type="button" className="btn">Voir le projet github</button>
                            </div>
                        </div>
                    </div>
                    {/* CARD 5 */}
                    <div className="col-md-4 col-lg-4">
                        <div className="portfolio-item p-5 d-flex flex-column justify-content-center align-items-center">
                            <div className="image d-flex align-items-center">
                                <img src={bakeli} alt="bakeli" className='img-fluid mx-auto'  width="200px" height="100px"/>
                            </div>
                            <div className="titre d-flex align-items-center my-4">
                                <h2 className='text-center mt-4'>Bakeli payement</h2>
                            </div>
                            <div className="texte text-center d-flex align-items-center">
                                <p className='text-center'>Créer un équivalent Netflix de <br />
                                    Disney. Pour l'anecdote ce site a <br />
                                    été fait avant la création de Disney+. <br />
                                    #React#API#Redux</p>
                            </div>
                            <div className="bouton text-center d-flex align-items-center">
                                <button type="button"  className="btn">Voir le projet github</button>
                            </div>
                        </div>
                    </div>
                    {/* CARD 6 */}
                    <div className="col-md-4 col-lg-4">
                        <div className="portfolio-item p-5 d-flex flex-column justify-content-center align-items-center">
                            <div className="image d-flex align-items-center">
                                <img src={feewi} alt="feewi" className='img-fluid mx-auto'  width="200px" height="100px"/>
                            </div>
                            <div className="titre d-flex align-items-center my-4">
                                <h2 className='text-center mt-4'>Mixte feewi</h2>
                            </div>
                            <div className="texte text-center d-flex align-items-center">
                                <p className='text-center'>Créer un équivalent Netflix de <br />
                                    Disney. Pour l'anecdote ce site a <br />
                                    été fait avant la création de Disney+. <br />
                                    #React#API#Redux</p>
                            </div>
                            <div className="bouton text-center d-flex align-items-center">
                                <button type="button" className="btn">Voir le projet github</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Portfolio
