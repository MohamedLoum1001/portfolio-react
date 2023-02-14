import React from 'react'

const Experience = () => {
    return (
        <section id='experiences' className='experiences mb-5'>
            <div className="container">
                <div className="row g-3 mt-5 justify-content-center">
                    <div className="text-center">
                        <h1  className='fs-1 fw-bold'>MES EXPERIENCES</h1>
                    </div>
                    <div className="col-sm-12">
                        <div className="col-item mx-4 px-4 py-2">
                            <h1 className='fs-3 fw-semibolder'>Développeur Front-End en alternance ( RNCP Niv 6),</h1>
                            <p className='fs-5'>Janvier 2021</p>
                            <p className="fs-6 text-dark p mb-5">Pédagogie bassée sur la réalisation des projets concrets avec l'accompagnement d'un expert chaque semaine. L'alternance peut <br />
                                débuter à tout moment dans l'année avec 4 jours en entreprise et un jour de formation modulables dans la semaine</p>
                        </div>
                    </div>

                    <div className="col-sm-12">
                        <div className="col-item mx-4 px-4 py-2">

                            <h1 className='fs-3 fw-semibolder'>CS50, Harvard</h1>
                            <p className='fs-5'>Aout-Octobre 2020</p>
                            <p className="fs-6 text-dark p mb-5">Formation en ligne exclusivement dispensée en anglais. Les sujets comprennent l'abstraction, les algorithmes, les structures de données,<br />
                                l'encapsulation, la gestion des ressources, la sécurité, l'ingénierie logicielle et le développement web. L'ensemble des problemes est <br />
                                inspiré des domaines du mondes r&elde la biologie, de la cryptographie, de la finance et des jeux
                            </p>

                        </div>

                    </div>

                    <div className="col-sm-12">
                        <div className="col-item mx-4 px-4 py-2">
                            <h1 className='fs-3 fw-semibolder'>Développeur junior, M2I formation</h1>
                            <p className='fs-5'>Mars-Juillet 2020</p>
                            <p className="fs-6 text-dark p mb-5">Formation à raison de 35h/s à distance. Ce cursus comprend HTML, CSS, Bootstrap, Algorithme, React JS, Redux, LESS/SAAS,<br />
                                Git, Github enseigné par un expert toujours en activité. Cette formation m'a permis de vailder ces enseignements par la pratique de pls <br />
                                des douzaines deprojets</p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Experience
