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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function WeeklyProgress() {
    const report = [
        {
            image: prevWeek1,
            pdf: Week1pdf,
            title: 'Week 1 Report'
        },
        {
            image: prevWeek2,
            pdf: Week2pdf,
            title: 'Week 2 Report'
        },
        {
            image: prevWeek3,
            pdf: Week3pdf,
            title: 'Week 3 Report'
        },
        {
            image: prevWeek4,
            pdf: Week4pdf,
            title: 'Week 4 Report'
        },
        {
            image: prevWeek5,
            pdf: Week5pdf,
            title: 'Week 5 Report'
        },
        {
            image: prevWeek6,
            pdf: Week6pdf,
            title: 'Week 6 Report'
        }
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    const ReportCards = report.map((report) =>
        <Card className='mb-5 report-cards'>
            <Card.Body className='position-relative text-center'>
                <a target='_blank' href={report.pdf} rel="noreferrer">
                    <img src={report.image} alt={report.title} />
                </a>
                <div className='position-absolute report-name py-4'>
                    <p className='h1 m-0'>{report.title}</p>
                </div>
            </Card.Body>
        </Card>

    );


    return (
        <div className='weekly-progress-container'>
            <h1 className='mb-4'>Weekly Progress Report</h1>

            <Carousel className='text-center'
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1500}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {ReportCards}
            </Carousel>

        </div>
    )
}

export default WeeklyProgress;