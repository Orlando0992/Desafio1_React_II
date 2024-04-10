import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../components/mycard.css'
import Bolsa_Mazapan from '../img/Bolsa_Mazapan.jpeg'
import Bolsa_Naranjitas from '../img/Bolsa_Naranjitas.jpeg'
import Bolsa_Confit from '../img/Bolsa_Confit.jpeg'
import Bolsa_Confit_salado from '../img/Bolsa_Confit_salado.jpeg'

const MyCard = () => {


    return (
        <div className='galeria'>
            <div>
                <h2>Nuestros Favoritos</h2>
            </div>
            <div className='row justify-content-center p-3'>
                <div className='col-md-3'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Bolsa_Mazapan} />
                        <Card.Body>
                            <Card.Title>2030 - Bolsa de mazapán 200 gr</Card.Title>
                            <Card.Text>
                                Frutas de mazapán elaboradas con almendras chilenas.
                            </Card.Text>
                            <Button>Ver producto</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-md-3'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Bolsa_Naranjitas} />
                        <Card.Body>
                            <Card.Title>2022 - Bolsa Naranjitas 200 Gr.</Card.Title>
                            <Card.Text>
                                Bolsa con naranjitas confitadas bañadas en chocolate bitter 57% cacao
                            </Card.Text>
                            <Button variant="primary">Ver producto</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-md-3'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Bolsa_Confit} />
                        <Card.Body>
                            <Card.Title>2039 - Bolsa Confit Avellana Frambuesa 100 Gr.</Card.Title>
                            <Card.Text>
                                Bolsa de comfits de avellanas bañadas en chocolate blanco y frambuesa 100gr
                            </Card.Text>
                            <Button variant="primary">Ver producto</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-md-3'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Bolsa_Confit_salado} />
                        <Card.Body>
                            <Card.Title>2038 - Bolsa Confit Maní Salado Chocolate Blanco 100 Gr.</Card.Title>
                            <Card.Text>
                                Bolsa de comfit de maní salado bañado en chocolate blanco 100 gr.
                            </Card.Text>
                            <Button variant="primary">Ver producto</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>

    )
}

export default MyCard
