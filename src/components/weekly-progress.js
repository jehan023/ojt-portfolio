import React from 'react';

import prevWeek1 from '../images/prevWeek1.jpg';
import prevWeek2 from '../images/prevWeek2.jpg';
import prevWeek3 from '../images/prevWeek3.jpg';
import prevWeek4 from '../images/prevWeek4.jpg';
import prevWeek5 from '../images/prevWeek5.jpg';
import prevWeek6 from '../images/prevWeek6.jpg';

import Week1pdf from '../pdf/Hadjisaid, Jehan_Week 1 Report.pdf';
import Week2pdf from '../pdf/Hadjisaid, Jehan_Week 2 Report.pdf';
import Week3pdf from '../pdf/Hadjisaid, Jehan_Week 3 Report.pdf';
import Week4pdf from '../pdf/Hadjisaid, Jehan_Week 4 Report.pdf';
import Week5pdf from '../pdf/Hadjisaid, Jehan_Week 5 Report.pdf';
import Week6pdf from '../pdf/Hadjisaid, Jehan_Week 6 Report.pdf';

import { Card } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';

function WeeklyProgress() {
    const report = [
        {
            image: prevWeek1,
            pdf: Week1pdf,
            title: 'Week 1'
        },
        {
            image: prevWeek2,
            pdf: Week2pdf,
            title: 'Week 2'
        },
        {
            image: prevWeek3,
            pdf: Week3pdf,
            title: 'Week 3'
        },
        {
            image: prevWeek4,
            pdf: Week4pdf,
            title: 'Week 4'
        },
        {
            image: prevWeek5,
            pdf: Week5pdf,
            title: 'Week 5'
        },
        {
            image: prevWeek6,
            pdf: Week6pdf,
            title: 'Week 6'
        }
    ];

    const ReportCards = report.map((report) =>
        <Col className='px-auto'>
            <Card className='mb-3 report-cards'>
                <Card.Body>
                    <img src={report.image} alt='Weekly Report' />
                </Card.Body>
                <Card.Footer className='text-center'>
                    <button className='pdf-view-btn'><a href={report.pdf} target="_blank" rel="noreferrer">{report.title}</a></button>
                </Card.Footer>
            </Card>
        </Col>

    );


    return (
        <div className='weekly-progress-container'>
            <h2>Weekly Progress Report</h2>
            <Row>
                {ReportCards}
            </Row>
        </div>
    )
}

export default WeeklyProgress;