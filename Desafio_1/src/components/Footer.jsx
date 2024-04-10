import React from 'react'
import '../components/footer.css'

const Footer = () => {
    return (
        <div className='container-fluid'>
            <div className='row p-5 bg="light" data-bs-theme="light"'>
                <div className='col-xs-12 col-md-6 col-lg-3'>
                    <p className='h3'>Happy Cake</p>

                </div>
                <div className='col-xs-12 col-md-6 col-lg-3'>
                    <p className='h5 mb-3'>Conócenos</p>
                    <div className='mb-2'>
                        <a className='h6 text-decoration-none' href='#'>Nuestras Tiendas</a>
                    </div>
                    <div className='mb-2'>
                        <a className='h6 text-decoration-none' href='#'>+56 223 72 14 19</a>
                    </div>
                    <div className='mb-2'>
                        <a className='h6 text-decoration-none' href='#'>Informacion Legal</a>
                    </div>
                    <div className='mb-2'>
                        <a className='h6 text-decoration-none' href='#'>Terminos y condiciones</a>
                    </div>
                    <div className='mb-2'>
                        <a className='h6 text-decoration-none' href='#'>Politica de privacidad</a>
                    </div>
                </div>
                <div className='col-xs-12 col-md-6 col-lg-3'>
                    <p className='h5 mb-3'>Redes Sociales</p>
                    <div className='mb-2'>
                        <a className='h6 text-decoration-none' href='#'>Instagram</a>
                    </div>
                    <div className='mb-2'>
                        <a className='h6 text-decoration-none' href='#'>Facebook</a>
                    </div>
                </div>
                <div className='col-xs-12 col-md-6 col-lg-3'>
                    <p className='h5 mb-3'>Mi cuenta</p>
                    <div className='mb-2'>
                        <a className='h6 text-decoration-none' href='#'>Pedir</a>
                    </div>
                    <div className='mb-2'>
                        <a className='h6 text-decoration-none' href='#'>Iniciar Sesion</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
