import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { HiLightBulb } from "react-icons/hi";
import { FaReact, FaGithub } from "react-icons/fa";
import { DiGit } from "react-icons/di";
import { AiFillReconciliation } from "react-icons/ai";
import { MdLiveHelp } from "react-icons/md";
import GitCheatSheet from '../images/Git Cheat Sheet.jpg'
import { Lightbox } from "react-modal-image";

function Assessment() {
    const [close, setClose] = useState(false);
    const closeLightbox = () => {
        setClose(false);
    };

    return (
        <div className='assessment-container'>
            <h2>Assessment</h2>
            <Card className='question-card'>
                <Card.Body>
                    <h5>What you've learned from this experience?</h5>
                    <div className='d-flex card-content'>
                        <div className='target-icon'>
                            <HiLightBulb className='icon-logo' />
                        </div>
                        <div className='vertical-line' />
                        <p>In this internship program, I learned a lot, especially in the specialization of my course, System Development.
                            I become a front-end web developer, creating webpages using ReactJS, HTML, and CSS.
                            Also, I practice my coding skills efficiently.
                            Working on a team makes me responsible for what I have done so that it will not bother others' work.
                            Communication is a must. You can be a much more effective learner if you never indulge in the illusion that you know something.
                            All knowledge is provisional, temporary, and incomplete.
                            Keep in mind that if you don't know something or are curious about it, ask somebody or do something like research to find out the answer you want.
                        </p>
                    </div>
                </Card.Body>
            </Card>

            <Card className='question-card'>
                <Card.Body>
                    <h5>Important Theories/Concepts acquired from the OJT Station</h5>
                    <div className='d-flex card-content' >
                        <div className='target-icon '>
                            <FaReact className='react-logo icon-logo' />
                        </div>
                        <div className='vertical-line' />
                        <div>
                            <p>
                                React is JavaScript Library which is declarative in nature and works great with dynamic data(unlike HTML).
                                The React library is used for User Interfaces.
                            </p>
                            <em>React being a library and not a framework is good. But Why?</em>

                            <h6>Here's why:</h6>
                            <ol>
                                <li>Frameworks are not flexible as they require you to follow rules.</li>
                                <li>Frameworks are full of features and difficult to customize.</li>
                            </ol>

                            <h6>Prerequisites for React:</h6>
                            <ul>
                                <li>The ability to work with a friendlier and optimized VIrtual Browser (Virtual-DOM) as compared to Real DOM.</li>
                                <li>You just need JavaScript knowledge to work with React.</li>
                                <li>React Native allows you to create Mobile Applications (iOS and Andriod).</li>
                                <li>React team at Facebook tests all features and versions of React on Facebook.com as a result the React Library is battle-ready.</li>
                                <li>React allows developers to declare stateful user interfaces.</li>
                            </ul>

                            <h5>Basic Concepts of React</h5>
                            <p>The following are fundamental concepts of React.</p>

                            <h6>React Components</h6>
                            <p>There are two types of Components in React.</p>

                            <ol>
                                <li><b>Function Component:</b> Simple JavaScript functions which are commonly used. Syntax of Function Components is specified below:
                                    <section className='sample-codes'>
                                        <pre>
                                            {`import React from "react";

function FunctionalComponent() {
return <h1>Hello, world</h1>;
}`}
                                        </pre>
                                    </section>
                                </li>

                                <li><b>Class Component:</b> These components are simple classes (made up of multiple functions that add functionality to the application). Syntax of Class Components is specified below:
                                    <section className='sample-codes'>
                                        <pre>
                                            {`import React from "react";

class ClassComponent extends React.Component {
 render() {
   return <h1>Hello, world</h1>;
 }
}`}
                                        </pre>
                                    </section>
                                </li>
                            </ol>

                            <p className='fst-italic fs-6 js-question'>A question that many JavaScript and HTML coders might ask… How is HTML code working inside a JavaScript syntax? And the answer is: It is not JavaScript but a syntax extension to JavaScript called JSX.</p>

                            <p>Behind the scenes, there is a special compiler named Babel working to convert JSX into React API calls.</p>
                            <p>Both types of React components have the following similarities</p>
                            <ul>
                                <li>The components receive inputs which are called “props”.</li>
                                <li>The components output a User Interface Code which is later rendered.</li>
                                <li>The React components are reusable and composable.</li>
                                <li>You can use a React component as a regular HTML element.</li>
                            </ul>

                            <h6>React Hooks</h6>
                            <p>The react hooks let you use state and other React features without writing a component.</p>
                            <p>Lets take <i>useState()</i> function as an example.</p>
                            <p>useState function returns two items</p>
                            <ol>
                                <li>State Object (<i>getter</i>)</li>
                                <li>Updater function (<i>setter</i>)</li>
                            </ol>
                            <p>Example of useState():</p>
                            <section className='sample-codes'>
                                <pre>
                                    {`import {useState}
function Random() 
{
  //count is getter object
  //setCount is setter function which sets new state
  //0 in useState(0) is default value
  const [count, setCount] = useState(0)
  return <button onClick={()=> console.log(Math.random())}> </button>
}`}
                                </pre>
                            </section>
                        </div>
                    </div>

                    <div className='d-flex mt-3 card-content'>
                        <div className='target-icon '>
                            <DiGit className='git-logo icon-logo' />
                        </div>
                        <div className='vertical-line' />
                        <div className='image-holder'>
                            <img src={GitCheatSheet} alt='git codes' onClick={() => setClose(true)} />

                            {close && 
                                (<Lightbox
                                    medium={GitCheatSheet}
                                    large={GitCheatSheet}
                                    alt="Git Cheat Sheet"
                                    onClose={closeLightbox}
                                    hideZoom={true}
                                />)
                            }
                        </div>
                    </div>
                </Card.Body>
            </Card>

            <Card className='question-card'>
                <Card.Body>
                    <h5>Memorable Event During the Internship Period</h5>
                    <div className='d-flex card-content' >
                        <div className='target-icon '>
                            <FaGithub className='icon-logo' />
                        </div>
                        <div className='vertical-line' />
                        <div className='position-relative'>
                            <p>During the first week of the internship, we assign to build a simple application implementing CRUD (Create, Read, Update, Delete) operation.
                                Setting up the working environment in VS Code, installing nodeJS, and many more dependencies needed for the project.
                                I also learned how to deploy the project using GitHub, which will be helpful for future projects.
                            </p>
                            <div className='d-flex gh-buttons'>
                                <button className='demo-btn'>
                                    <a target='_blank' href='https://jehan023.github.io/React-To-Do-App/' rel='noreferrer'>View Demo</a>
                                </button>
                                <button className='demo-btn ms-3'>
                                    <a target='_blank' href='https://github.com/jehan023/React-To-Do-App' rel='noreferrer'>Source Code</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>

            <Card className='question-card'>
                <Card.Body>
                    <h5>Recommendation for the Improvement of the Internship Program</h5>
                    <div className='d-flex card-content' >
                        <div className='target-icon '>
                            <AiFillReconciliation className='icon-logo' />
                        </div>
                        <div className='vertical-line' />

                        <ul>
                            <li>Providing the student with a company/organization orientation that includes establishment of learning objectives for the experience with the site supervisor and student;</li>
                            <li>Insuring that the student has access to the appropriate work space, computer, telephone and technology to perform the functions and duties of their experience; </li>
                            <li>Introducing the student to the other staff and interns/pathways students within the department/office and explaining how the student's role fits within the larger organizational structure;</li>
                            <li>Scheduling regular supervision meetings with your intern/pathways student to provide ongoing feedback and to respond to questions;</li>
                            <li>Encouraging the student to ask questions and seek out assistance when needed;</li>
                            <li>Allowing the student to attend office, departmental or company wide meetings;</li>
                            <li>Providing opportunities for the student to provide input into decisions;</li>
                            <li>Assigning the intern/pathway student a project that allows individual responsibility and ownership for the task;</li>
                            <li>Developing networking and mentoring opportunities;</li>
                            <li>Discussing future career goals with the intern/pathway student;</li>
                            <li>Explaining any problems or concerns with your intern/pathway student directly; and</li>
                            <li>Completing an overall evaluation of the student at the end of the experience and sharing this feedback with the student.</li>
                        </ul>

                    </div>
                </Card.Body>
            </Card>

            <Card className='question-card'>
                <Card.Body>
                    <h5>Advices to those who will be taking the Internship Program in the future</h5>
                    <div className='d-flex card-content' >

                        <div>

                            <ol>
                                <li><b>Don't be afraid to ask questions—and ask a lot of them</b>
                                    <p>Numerous interns who took our survey recommend that “interns lose their fear of asking questions.” This might be the best piece of advice interns can take heading into any internship, and one interns need to keep with them all times. Survey takers also stress the importance that interns need to remember that “people at the company are there to help you”—and “they want to help you.” Also, as one intern notes, “It’s important to know that everyone within the organization is always willing to take the time to talk with you and help you learn.”</p>
                                    <p>In addition, it’s important to “ask as many questions as you can,” since “the people you work with all have very valuable advice and insight to offer.” Another intern offers: “Reach out to people when you need help, as everyone I met went out of their way to be helpful, no matter how busy they were.” As far as how to go about asking questions, one interns says: “I’d introduce my questions by letting my manager or peers know what I understood about my responsibilities, and then asking them whether I was understanding correctly. This sparked a lot of conversation and questions. Asking questions early on will save you so much time.”</p>
                                    <br />
                                </li>

                                <li><b>Network, network, network—meet as many as people as possible</b>
                                    <p>Taking advantage of internships’ networking opportunities can’t be stressed enough by our survey takers, who recommend that interns attend every networking event they can, meet with as many people in and outside their team as possible, and be proactive with respect to any chance to interact with a member of the organization they intern with. According to one intern, “Employees here really do want to talk with interns and get to know them, so my advice would be to take advantage of that. It took me a while to appreciate how helpful speaking to them was, and I wish I’d started reaching out sooner.”</p>
                                    <p>Indeed, it’s important to always be outgoing and eager to meet your fellow colleagues, interns, coordinators, and mentors—they’ll help improve your experience and teach you. As one intern says, “Definitely network! There are so many cool people here willing to talk to interns. Don’t be afraid to throw time on people’s calendars and talk to them about anything, work-related or otherwise.” Interns also say don’t be afraid to meet with the higher-ups and people outside your department—and “it doesn't have to be formal, but just a quick chat to get to know others in the company.” As one intern says, “Network more than you think.”</p>
                                    <br />
                                </li>

                                <li><b>Be open-minded and ready to learn</b>
                                    <p>In significant numbers, interns advise future interns to “be curious,” “be open to learning and picking up skills even if they’re not in your fields of expertise,” “try to gain a breadth of knowledge and pick up insights,” and “be ready to learn and soak up a lot of information.” Indeed, it’s highly important to enter an internship “with your eyes and ears open.”</p>
                                    <p>It’s also important (and perhaps comforting) to remember that “most full-time employees understand that you haven’t worked or gained extensive experience on the job yet, and are more than willing to be supportive and helpful. With that said, my advice is go into the internship with an optimistic mindset and ready to learn.”</p>
                                    <p>Another intern recommends: “Be a sponge! There are incredible people here with incredible knowledge, so take it all in!” Yet another advises that “it’s important to stay open-minded—and to think of the internship as a 10-week interview process.”</p>
                                    <br />
                                </li>

                                <li><b>Be proactive—say “yes” to everything</b>
                                    <p>It’s not only important to be ready to learn but also ready to take initiative and take control of your learning experience. According to one intern, “Anyone looking to start here should know that they need to take every opportunity given to them. The firm is very willing to let interns go outside their set assignments to learn something new if the intern believes it will be beneficial to their own growth. Another thing to know is that interns who take initiative and want to work will flourish and grow.”</p>
                                    <p>Indeed, it’s important that interns make the most of their experiences and understand that “they get out what they put in.” Interns recommend to “make sure that you utilize all the opportunities and chances to learn what you can over the course of your internship,” and “if you have free time, take advantage of it by setting up calls or asking your team if they need help with anything—even if they don't need help, they'll appreciate it and remember you for your tenacity.” As one intern simply notes: “Say yes to everything,”</p>
                                    <br />
                                </li>

                                <li><b>Be yourself</b>
                                    <p>“Be yourself” was another extremely common piece of advice, and one that should hopefully put a lot of future interns at ease. This piece of advice holds true for the interview process as well as for the internship itself. One intern says, “Trust yourself enough to be who you are during the interview.” Another advises to “be authentic in interviews—and during your internship. The company chose YOU, so show them who you are and what you can bring to the table. When given a voice, use it.”</p>
                                    <p>Yet another intern wants future interns to remember this: “Don’t sell yourself short! Don’t waste any time considering yourself as just an intern. You have so much value and so many skills and unique experiences of your own to share with colleagues at more levels than you think.” And yet another intern, echoing similar sentiments, has this advice: “Don't be afraid to speak up, share your expertise, and be yourself. The company sees its interns just as it sees its full-time employees: valuable to its business.”</p>
                                </li>
                            </ol>

                        </div>
                        <div className='vertical-line' />
                        <div className='target-icon '>
                            <MdLiveHelp className='icon-logo' />
                        </div>

                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Assessment;