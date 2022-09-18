import React from 'react';
import { Card } from 'react-bootstrap';
import prevConsentForm from '../images/prevConsentForm.jpg';
import prevInternshipAgreement from '../images/prevInternshipAgreement.jpg';
import prevLexMeetAgreement from '../images/prevLexMeetAgreement.jpg'
import prevResume from '../images/prevResume.jpg';

import ConsentForm from '../pdf/HadjisaidJehan_ConsentForm.pdf';
import InternshipAgreement from '../pdf/HadjisaidJehan_InternshipAgreement.pdf';
import LexMeetAgreement from '../pdf/HadjisaidJehan_LexMeetAgreement.pdf';
import Resume from '../pdf/Hadjisaid_Jehan_Resume.pdf';

import Trello1 from '../images/trello1.jpeg';
import Trello2 from '../images/trello2.jpg';
import Trello3 from '../images/trello3.jpg';
import Neutral from '../images/Neutral_LexWeb.jpeg';

function Evidences() {
    return (
        <div className='evidences-container'>
            <h2>Evidences</h2>
            <h3 className='text-center'>Documents</h3>
            <div className='d-flex evidences-content'>
                <Card className='docx-card'>
                    <Card.Body className='position-relative text-center'>
                        <a target='_blank' href={Resume} rel="noreferrer">
                            <img src={prevResume} alt='resume' />
                        </a>
                        <div className='position-absolute docx-name'>
                            <p className='h4 m-0 py-2'>Resume</p>
                        </div>
                    </Card.Body>
                </Card>

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

            <h3 className='text-center mt-4'>Tasks and Output</h3>
            <div className='d-flex evidences-content'>
                <Card className='docx-card task-cards'>
                    <Card.Body className='position-relative text-center'>
                        <a target='_blank' href={Trello1} rel="noreferrer">
                            <img src={Trello1} alt='trello task' />
                        </a>
                    </Card.Body>
                </Card>

                <Card className='docx-card task-cards'>
                    <Card.Body className='position-relative text-center'>
                        <a target='_blank' href={Trello2} rel="noreferrer">
                            <img src={Trello2} alt='trello task' />
                        </a>
                    </Card.Body>
                </Card>

                <Card className='docx-card task-cards'>
                    <Card.Body className='position-relative text-center'>
                        <a target='_blank' href={Trello3} rel="noreferrer">
                            <img src={Trello3} alt='trello task' />
                        </a>
                    </Card.Body>
                </Card>

                <Card className='docx-card task-cards'>
                    <Card.Body className='position-relative text-center align-items-center'>
                        <img src={Neutral} alt='neutral template lexweb' />
                        <button className='project-btn'>
                            <a target='_blank' href='https://lexweb.vercel.app/templates/neutral' rel='noreferrer'>View Project</a>
                        </button>
                    </Card.Body>
                </Card>
            </div>

            <p className='mt-5 fw-bold'>**Some photos are included in the Weekly Reports</p>
        </div>
    )
}

export default Evidences;