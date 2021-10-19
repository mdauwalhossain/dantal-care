import React from 'react';

const Contact = () => {
    return (
        <div className="contact-form">
            <h1>Contact with us</h1>
            <p><small>Good dental or oral care is important to maintaining healthy teeth, gums and tongue. <br /> Oral problems, including bad breath, dry mouth, canker or cold sores, TMD, tooth decay, or thrush are all treatable with proper diagnosis and care.</small></p>
            <br />
            <h4>Location</h4>
            <p>House: SW (I), 1/A, Road: 108, Banani, Dhaka-1212. </p>
            <h4>Email</h4>
            <p>dentalcare@gmail.com</p>
            <h4>Phone</h4>
            <p> 02-5693630 <br />
                +880 158 547 547              
               
            </p>
            <div className="form">
                <h6>Enter your Email</h6>
                <input type="email" name="email" placeholder="Email Here" id="" /> <br />
                <h6>Enter your Password</h6>
                <input type="password" name="password" placeholder="Password" id="" /> <br />
                <h6>Send your message</h6>
                <textarea rows="3" cols="30" name="comment" form="usrform" placeholder="Message Here">
                </textarea> <br />
                <input type="submit" value="Submit" />
            </div>


            

        </div>
    );
};

export default Contact;