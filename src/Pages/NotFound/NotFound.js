import React from 'react';
import { Card } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>
            <>
  <Card className="rounded mx-auto d-block">
    <Card.Img variant="top" src="https://www.prestashop.com/sites/default/files/styles/blog_750x320/public/blog/2019/10/banner_error_404.jpg?itok=eAS4swln" />
    <Card.Body>
      <Card.Text>
       <h6> Search by a valid name, please.</h6>
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
 
</>
        </div>
    );
};

export default NotFound;