import "./footer.css"
import LocalPhone from '@mui/icons-material/LocalPhone'
import Email from '@mui/icons-material/Email'

export function FooterComponent() {
    return (
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-description">
              <h5 className="white-text">Obrigado pela visita!</h5>
              <p className="grey-text text-lighten-4">Caso deseje entrar em contato, aqui estão algumas formas:</p>
            </div>
            <section className="links-container">
              <div className="links">
                <h5 className="links-header">Menu</h5>
                <ul>
                  <li><a className="link" href="#quemSou">Quem sou</a></li>
                  <li><a className="link" href="#oQueFaco">O que faço</a></li>
                  <li><a className="link" href="#minhaStack">Minha Stack</a></li>
                  <li><a className="link" href="#apis">APIs</a></li>
                  <li><a className="link" href="#aplicacoesWeb">Aplicações Web</a></li>
                </ul>
              </div>
              <div className="links social-media-links">
                <h5 className="links-header">Redes Sociais</h5>
                <ul>
                  <li><a className="link" target="_blank" href="https://www.linkedin.com/in/henrique-florencio-b04b5b198/">LinkedIn</a></li>
                  <li><a className="link" target="_blank" href="https://twitter.com/FlorencioHenri">Twitter</a></li>
                </ul>
              </div>
            </section>
          </div>
          <section className="contacts">
            <div className="phone-contact contact">
              <div className="contact-icons-container">
                <LocalPhone className="phone-icon contact-icon"/>
                <span className="phone-span contact-span">Telefone</span>
              </div>
              <span className="contact-info">21 99086-8835</span>
            </div>
            <div className="email-contact contact">
              <div className="contact-icons-container">
                <Email className="email-icon contact-icon"/>
                <span className="email-span contact-span">Email</span>
              </div>
              <span className="contact-info">Henrique.florencio307@gmail.com</span>
            </div>
          </section>
          <div className="footer-copyright">
            <div className="footer-copyright-container">
            © 2024 Henrique Florencio Todos os direitos reservados
            </div>
          </div>
        </footer>
    )
}