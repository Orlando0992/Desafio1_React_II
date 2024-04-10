import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import imagen1 from '../img/imagen1.jpg'
import imagen2 from '../img/imagen2.jpg'
import imagen3 from '../img/imagen3.jpg'
import MyCard from '../components/MyCard';

function Inicio() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <Image
                        className='d-block w-100'
                        src={imagen1}
                        alt='Imagen 13'
                        style={{ maxHeight: '800px' }}
                    />
                    <Carousel.Caption>
                        <h3>Distintos sabores, para diferentes ocaciones</h3>
                        <p>Conoce nuestros nuevos sabores de temporada.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className='d-block w-100'
                        src={imagen2}
                        alt='Imagen 2'
                        style={{ maxHeight: '800px' }}
                    />
                    <Carousel.Caption>
                        <h3>Nuestro compromiso es buscar tu felicidad</h3>
                        <p>Descubre nuestras promociones.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className='d-block w-100'
                        src={imagen3}
                        alt='Imagen 3'
                        style={{ maxHeight: '800px' }}
                    />
                    <Carousel.Caption>
                        <h3>Nuevo Chocolate intenso</h3>
                        <p>
                            Conoce el nuevo saber del chocolate.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <MyCard />

        </div>

    );
}

export default Inicio;