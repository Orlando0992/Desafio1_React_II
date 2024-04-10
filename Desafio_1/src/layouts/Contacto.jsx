import '../components/contacto.css'

function Contacto() {
    return (
        <div className="contacto">
            <div className='container-form'>
                <div className='info-form'>
                    <h2> Contactanos</h2>
                    <p>¿Tienes dudas? Contactanos directamente escribiendo al formulario de contacto.</p>
                </div>
            </div>

            <form className='container-datos' action='#' autoComplete='off'>
                <label>Nombre</label>
                <input type='text' name='nombre' placeholder='Escribe tu nombre' className='campo'></input>
                <label>Correo</label>
                <input type='email' name='email' placeholder='Escribe tu correo ' className='campo'></input>
                <label>Mensaje</label>
                <textarea name='mensaje' placeholder='Escribe tu mensaje'>
                </textarea>
                <input type='submit' name='enviar' value='enviar mensaje' className='btn-enviar'>

                </input>
            </form>
        </div>
    );
}

export default Contacto;