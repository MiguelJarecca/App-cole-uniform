
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import logo from '/src/images/logo.jpeg'

export const Footer = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    }

    return(
        <footer className='footer'>
            <div className="footer-content">

                <div className="footer-info">
                    <div className="logo-div">
                        <img src={logo} alt="logo" />
                    </div>

                    <div className='text-div'>
                        <p>
                            ksjdvnjsnvdjsd
                        </p>
                    </div>

                </div>
                <div className="footer-contact">
                    <h6>Contactame</h6>

                    <h5>Telefono</h5>
                        <a 
                            href="https://wa.me/51970449496" 
                            target='_blank' 
                            title='https://wa.me/51970449496'
                        >
                            +51 970449496
                        </a>

                    <h5>Correo</h5>
                        <a href="mailto:miguel.jarecca@gmail.com">
                            miguel.jarecca@gmail.com
                        </a>
                </div>

                <div className="footer-social-media">
                    <a href="https://web.facebook.com/miguel.jareccaccallo.1/?locale=es_LA" 
                    target="_blank">
                    <FontAwesomeIcon icon={faFacebookF}/></a>  
                    <a href="https://www.linkedin.com/in/migueljarecca"
                    target="_blank">
                    <FontAwesomeIcon icon={faLinkedinIn}/></a>  
                    <a href="https://github.com/MiguelJarecca" 
                    target="_blank">
                    <FontAwesomeIcon icon={faGithub}/></a>  
                </div>

                <div className="footer-home">
                    <button type="button" onClick={handleScrollToTop}>
                        inicio
                    </button>
                </div>  
            </div>

            <span></span>
            
            <div className="footer-design">
                <h3>Tienda de uniformes escolares {new Date().getFullYear()}</h3>
                <span>|</span>

                <a href="https://migueljarecca.github.io/portafolio-miguel/" 
                    target="_blank">
                     Sitio web creado por MIGUEL JARECCA
                </a>  
            </div>

        </footer>
    )
}