import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutContainer = ()=>{

    return (
        <>
            <Container>
                <Row>
                    <Col className='pd50'>
                        <p>About Page</p>
                        <h1>ABHINAV SHUKLA</h1>
                       
                        <p> A skilled React developer with 1 year of experience building user interfaces for web applications. 
                            I am very much passionate about creating fast, responsive, and intuitive interfaces that provide the best user experience.</p>

                        <hr ></hr>
                        <h1>RAHUL PANDIT</h1>
                        <p>
                        As a proactive and collaborative team player, I work well with designers, product managers, and other developers to deliver 
                        high-quality applications. I am committed to write clean, maintainable, and reusable code, and have a keen eye for detail when 
                        it comes to testing and debugging.


                        </p>

                        


                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutContainer;