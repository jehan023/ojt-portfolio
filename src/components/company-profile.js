import React from 'react';
import { Card } from 'react-bootstrap';
import LexMeet from '../images/lexmeet_logo.png';
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin, FaHandshake, FaMapMarkerAlt } from 'react-icons/fa';
import { FiTarget } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import CEO from '../images/CEO.jpg';

function CompanyProfile() {
    return (
        <div className='company-profile-container'>
            <h2>Company Profile</h2>
            <div className='company-profile-content d-flex'>
                <img src={LexMeet} alt='company' width={150} height={150} />

                <p>LexMeet is a legal tech company and its name was derived from two words "Lex" and "Meet".
                    <br /><br />
                    "Lex" in Latin means law or related to legal matters while "Meet" is a verb which means to see and speak to (someone) for the first time : to be introduced to or become acquainted with (someone) : to come together in order to talk : to go to a place to be with someone else. : to come together formally : to have a meeting : to come together for a discussion.
                    <br /><br />
                    Thus, LexMeet is the meeting together of lawyers and clients to solve legal problems or discuss legal matters.
                    <br /><br />
                    Our company's tagline is "Legal help in a click". We want to use technology to help our legal professionals and at the same time pave the way to help people at large to solve their legal problems by providing a digital platform for them to meet.
                </p>
            </div>

            <h3 className='text-center text-uppercase my-3'>Mission and Vision</h3>
            <div className='mv-container d-flex'>
                <Card>
                    <Card.Body className='d-flex align-items-center'>
                        <section className='target-icon'>
                            <FiTarget />
                            <p className='icon-name fs-4 fw-bold m-0'>MISSION</p>
                        </section>
                        <div className='vertical-line' />
                        <section className='about-m-content'>
                            <p>Our mission is to bridge the gap between clients and lawyers by giving them the facility and technology to meet and solve their problems.
                                We want to make legal services more accessible and affordable to you.
                            </p>
                        </section>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body className='d-flex align-items-center'>
                        <section className='target-icon'>
                            <FaHandshake />
                            <p className='icon-name fs-4 fw-bold'>VISION</p>
                        </section>
                        <div className='vertical-line' />
                        <section className='about-m-content'>
                            <p>Our vision is to see people seeking legal services without leaving the comforts of their home through technology.
                                Our aim is to make legal services readily available and affordable to our OFWs, SMEs, startups and other people hindered by time,
                                distance and money.
                            </p>
                        </section>
                    </Card.Body>
                </Card>
            </div>

            <div className='d-flex mt-5 justify-content-between company-info'>
                <div className='d-block com-detail'>
                    <div className='company-details d-flex'>
                        <div className='company-address'>
                            <h2><a target='_blank' className='address-map' href='https://g.page/lexmeet-legal-help-in-a-click?share' rel="noreferrer">
                                <FaMapMarkerAlt className='map-icon'/>Address</a>
                            </h2>
                            <p>LexMeet, Inc.</p>
                            <p>Unit 608, 6th floor</p>
                            <p>AIC Burgundy Empire Tower</p>
                            <p>ADB Avenue Corner Garnet Road</p>
                            <p>Ortigas Center, Pasig City</p>
                        </div>
                        <div className='company-contact'>
                            <h2>Contact</h2>
                            <p>(02) 8-451-1594</p>
                            <p>contact@rizallawoffice.com</p>
                            <div className='new-footer-row d-flex'>
                                <div className='new-footer-col'>
                                    <a target='_blank' href="https://www.facebook.com/LexMeet" rel="noreferrer">
                                        <FaFacebook />
                                    </a>
                                </div>

                                <div className='new-footer-col'>
                                    <a target='_blank' href="https://twitter.com/LexMeet" rel="noreferrer">
                                        <FaTwitter />
                                    </a>
                                </div>

                                <div className='new-footer-col'>
                                    <a target='_blank' href="https://www.linkedin.com/company/lexmeet-inc/" rel="noreferrer">
                                        <FaLinkedin />
                                    </a>
                                </div>

                                <div className='new-footer-col'>
                                    <a target='_blank' href="https://www.instagram.com/lexmeet.legal.help/" rel="noreferrer">
                                        <GrInstagram />
                                    </a>
                                </div>

                                <div className='new-footer-col'>
                                    <a target='_blank' href="https://www.youtube.com/channel/UC051N4c-ZryPex0zLDdwdtg" rel="noreferrer">
                                        <FaYoutube />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='company-related-articles mt-5'>
                        <h3>Related Articles/ Awards</h3>
                        <ul>
                            <li>
                                <p>“Getting Legal Help In Covid-19 Times Through LexMeet, Your Everyday Legal App”</p>
                                <p><a href='https://startup.info/marlon-p-valderama-lexmeet/' target='_blank' rel="noreferrer">Read more</a></p>
                            </li>
                            <li>
                                <p>“Legal services made easy for Filipinos via LexMeet mobile app”</p>
                                <p><a href='https://www.manilatimes.net/2020/03/28/public-square/legal-services-made-easy-for-filipinos-via-lexmeet-mobile-app/707380' target='_blank' rel="noreferrer">Read more</a></p>
                            </li>
                            <li>
                                <p>Best Online Legal Services Platform - Philippines</p>
                                <p><a href='https://www.acquisition-international.com/winners/valderama-law-office-e-lawyers-online-and-lexmeet/' target='_blank' rel="noreferrer">Read more</a></p>
                            </li>
                            <li>
                                <p>ASEAN Rice Bowl Startup Awards 2018 Best Life Helper Philippines</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='ceo-container'>
                    <img src={CEO} alt='ceo' className='ceo-img' />
                    <div className='ceo-details'>
                        <p className='ceo-name fw-bold'>Atty. Marlon Valderama</p>
                        <p className='ceo-position'>President and CEO</p>
                        <p className='ceo-position'>LexMeet, Inc.</p>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default CompanyProfile;