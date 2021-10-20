import React, { useEffect, useState } from 'react';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Row } from 'react-bootstrap';
import Body from '../Body/Body';


const Home = () => {
    const [infos, setInfos] = useState([]);
    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setInfos(data))
    }, [])
    return (
        <div className="home">
           
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    width={500} height={500}
                    className="slider w-100"
                    src="https://cdn-caimh.nitrocdn.com/yYKLjJHXYJzwvfGYwbksgHLtEXQTAPwb/assets/static/optimized/wp-content/uploads/2019/05/8f440c4ce0b0eadf3f5dba838c9e10e9.Order-4411-_-Image-7-750x400.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption className="text-info bg-dark">
                    <h3>Child Care</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    width={500} height={500}
                    className="slider w-100"
                    src="https://images.squarespace-cdn.com/content/v1/57e01f4c2e69cf3a18c52ac1/1478019001930-XMM5QRUHYRC67INH0JW4/Tooth+-+01.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption className="text-light bg-dark">
                    <h3>Baby Care</h3>
                    <p>Whatever the reason, dental office names are on your mind.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    width={500} height={500}
                    className="slider w-100"
                    src="https://cdn.shoutlo.com/uploads/media/top-5-dental-clinics-in-chandigarh_1500376159.jpeg"
                    alt="Third slide"
                    />
                    <Carousel.Caption className="text-warning bg-dark">
                    <h3>Adult Care</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
            
            <h2 className="mt-5 text-light bg-dark">Take a Service</h2>

            <div>
                <div className="show-cards row">
                    <Row xs={1} md={2} className="g-4">
                        {
                        infos.slice(0,6).map(info => <Body  
                            key= {info._id}
                            info={info}                                                    
                            ></Body>)
                        }                            
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Home;