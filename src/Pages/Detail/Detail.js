import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Data from './Data/Data';
import './Detail.css'

const Detail = () => {
    const [probs, setProbs] = useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setProbs(data))

    }
    ,[]);
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {
                    probs.map(para => <Data
                    key={para._id}
                    data={para}
                    ></Data>)
                }
                
            </Row>
        </div>
    );
};

export default Detail;