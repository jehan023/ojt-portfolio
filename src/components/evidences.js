import React from 'react';
import { Card } from 'react-bootstrap';
import prevConsentForm from '../images/prevConsentForm.jpg';
import prevInternshipAgreement from '../images/prevInternshipAgreement.jpg';
import prevLexMeetAgreement from '../images/prevLexMeetAgreement.jpg'

import ConsentForm from '../pdf/HadjisaidJehan_ConsentForm.pdf';
import InternshipAgreement from '../pdf/HadjisaidJehan_InternshipAgreement.pdf';
import LexMeetAgreement from '../pdf/HadjisaidJehan_LexMeetAgreement.pdf';

function Evidences() {
    return (
        <div className='evidences-container'>
            <h2>Evidences</h2>

            <div className='d-flex evidences-content'>
                <Card className='docx-card'>
                    <Card.Body className='position-relative text-center'>
                        <a target='_blank' href={ConsentForm} rel="noreferrer">
                            <img src={prevConsentForm} alt='consent form' />
                        </a>
                        <div className='position-absolute docx-name'>
                            <p className='h4 m-0 py-2'>Consent Form</p>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='docx-card'>
                    <Card.Body className='position-relative text-center'>
                        <a target='_blank' href={InternshipAgreement} rel="noreferrer">
                            <img src={prevInternshipAgreement} alt='internship agreement' />
                        </a>
                        <div className='position-absolute docx-name'>
                            <p className='h4 m-0 py-2'>Internship Agreement</p>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='docx-card'>
                    <Card.Body className='position-relative text-center'>
                        <a target='_blank' href={LexMeetAgreement} rel="noreferrer">
                            <img src={prevLexMeetAgreement} alt='lexmeet agreement' />
                        </a>
                        <div className='position-absolute docx-name'>
                            <p className='h4 m-0 py-2'>LexMeet Agreement</p>
                        </div>
                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}

export default Evidences;