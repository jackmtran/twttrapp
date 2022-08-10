import { FaTwitter } from 'react-icons/fa'
import './splash.css'
import LoginModal from '../auth/LoginModal.js'
import SignUpModal from '../auth/SignUpModal.js'


function Splash() {




    return (
        <>
        <div>

                <img className="splashimg" src="https://i.imgur.com/Qfj09lS.png"/>

            <div className="wholeform">
                <div> <FaTwitter className="frontbird" size="45px"/></div>
                    <h1 className="topwords">Happening now</h1>
                    <h2 className="join"> Join Twttr today.</h2>
                    <button className="signupbutton" type="button"> <SignUpModal/></button>
                    <div className="bottomwords">Already a member? <LoginModal/> </div>
                </div>
        </div>
        </>
    )

}

export default Splash
