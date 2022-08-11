import './footer.css';
import { AiFillGithub } from 'react-icons/ai'
import './footer.css'


const Footer = () => {

  return (
    <div id="footer">

      <div id='footer-container'>
            <div className="each">
                <a className="feet" href="https://github.com/jackmtran">
                    Jack Tran <AiFillGithub className="githubby" href="https://github.com/jackmtran" />
                </a>
            </div>
      </div>
   </div>
  );
}

export default Footer;
