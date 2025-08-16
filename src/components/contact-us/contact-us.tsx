import { TextField } from '@mui/material';
import Topnav from '../topnav/topnav';
import './contact-us.scss'


const ContactUs: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent page refresh
        const data = new FormData(e.currentTarget);
        console.log("Form submitted", data);
    };
    return (
        <div>
            <Topnav />
            <div className="col-12 col-md-4 m-auto text-center">
                <div className="full-height">
                    <div className="contactBox">
                        <div className="mb-5"><h4>Contact Us</h4></div>

                        <form onSubmit={handleSubmit}>
                            <TextField className="w-100" id="full-name" label="Full Name" variant="outlined" />
                            <TextField className="mt-4 w-100" id="email" label="Email" variant="outlined" />
                            <TextField className="mt-4 w-100" id="phone" label="Phone Number" variant="outlined" />
                            <TextField className="mt-4 w-100" id="linkedin" label="LinkedIn URL" variant="outlined" />

                            <div>
                                <button type="submit" className="mt-3 btn btn-primary">Contact</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;