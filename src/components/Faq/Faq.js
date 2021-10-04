import React from 'react';
import { Accordion } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Faq = () => {
    const history = useHistory()
    const handleContact = () => {
        history.push('/contact')
    }

    return (
        <div className='mb-5 pb-5'>
            <h2> Frequently Asked Questions</h2>
            <div className='p-5'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How much can I expect to earn?</Accordion.Header>
                        <Accordion.Body>
                            That’s totally up to you. Your earning potential completely depends on your learning. If you learned well you will get oppurtunity to work in a world class company. The more you learn, the more you earn.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What is the payment process?</Accordion.Header>
                        <Accordion.Body>
                            You can pay to us in various way. Supported payment methods are currently Bkash, DBBL Rocket ,Nagad.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Need more help?</Accordion.Header>
                        <Accordion.Body>
                            <span onClick={handleContact} className='text-danger'> Contact</span> us with more questions!
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Faq;