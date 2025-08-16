import React from 'react'
import './footer.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
const Footer: React.FC = () => {
    return (
        <div className='container-fluid bg_color'>
            <div className='row justify-content-center align-items-end gap-4'>
                <div className='col-12 col-md-5  mt-3'>
                    <ul className='remove_style'>
                        <li className='mb-3'><a href="">Home</a></li>
                        <li className='mb-3'><a href="">About us</a></li>
                        <li className='mb-3'><a href="">Contact us</a></li>
                    </ul>
                    <div>
                        <h4>Address</h4>
                        <pre>
                            #32, John Jacobs Road,<br/>
                            Middle East, Florida,<br />
                            United States.
                        </pre>
                    </div>
                </div>
                <div className='col-12 col-md-5 text-end  mt-3'>
                    <a href="https://facebook.com" target='_blank'> <FacebookIcon fontSize="large" color="inherit" sx={{ mr: 2 }} /></a>
                    <a href="https://instagram.com" target='_blank'><InstagramIcon fontSize="large" color="inherit" sx={{ mr: 2 }} /></a> 
                    <a href="https://linkedIn.com" target='_blank'><LinkedInIcon fontSize="large" color="inherit" sx={{ mr: 2 }} /></a>
                    <a href="https://twitter.com" target='_blank'><XIcon fontSize="large" color="inherit" /></a>
                </div>

            </div>

        </div>
    )
}

export default Footer