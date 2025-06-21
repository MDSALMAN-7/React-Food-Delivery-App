
import { assets } from '../../assets/assets'
import './Footer.css'
export function Footer(){
    return(
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, dolores tempora. Quos suscipit sed dolore id dignissimos nulla maxime sapiente corrupti quas delectus enim, porro dolor, rerum minus ipsam accusamus!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon}  alt="" />
                        <img src={assets.linkedin_icon}  alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 9876543210</li>
                        <li>lapato@gmial.com</li>
                    </ul>
                </div>
                <hr />
                <p className="footer-copyright">
                    Copyright 2024 @ Lapeto.com - All Right Reserved
                </p>
            </div>
        </div>
    )
}