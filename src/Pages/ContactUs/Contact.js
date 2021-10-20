import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-form">
            <br />
                  <h1 className="text-danger">Contact with us</h1>
            <div className="">
                {/* <div>
                <p>Good dental or oral care is important to <br />
                          maintaining healthy teeth, gums and tongue. <br />
                           Oral problems, including bad breath, dry mouth,<br />
                            canker or cold sores, TMD, tooth decay, or thrush are <br />
                             all treatable with proper diagnosis and care.</p>
                </div> */}

                <div>
                    <h4>Location</h4>
                    <p>House: SW (I), 1/A, Road: 108, Banani, Dhaka-1212. </p>
                    <h6>Email</h6>
                    <p>dentalcare@gmail.com</p>
                    <h6>Phone</h6>
                    <p> 02-5693630 <br />
                    +880 158 547 547  
                     </p>
                </div>
            </div>

            <div className="form">
                {/* <h6>Enter your Email</h6>
                <input type="email" name="email" placeholder="Email Here" id="" /> <br /> */}
                {/* <h6>Enter your Password</h6>
                <input type="password" name="password" placeholder="Password" id="" /> <br /> */}
                <h6>Send your message</h6>
                <textarea rows="3" cols="30" name="comment" form="usrform" placeholder="Express your opinion">
                </textarea> <br />
                <input className="bg-warning" type="submit" value="Submit" />
                <br /><br />
            </div>
        </div>
    
    );
    
};

export default Contact;