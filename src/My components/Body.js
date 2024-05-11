import React from "react";
import './Body.css';
import { BiBookOpen, BiAlarm } from "react-icons/bi";
import { BsLaptop, BsCalendarCheck, BsBriefcase, BsCheck2} from "react-icons/bs";
import { FaLightbulb, FaUserFriends, FaRegUser } from "react-icons/fa";
import { AiFillSafetyCertificate, AiFillLike } from "react-icons/ai";
import { MdOpenInBrowser, MdTimelapse, MdScreenSearchDesktop } from "react-icons/md";
import { ImFilesEmpty } from "react-icons/im";
import { CgWorkAlt } from "react-icons/cg";

function Body() {
    return (
        <body>
            <div id="firstpagehead">
                <div className="sidehead">
                    <div className="leftcard">
                        <h1>Get Ready to be a Global CA</h1>
                        <p>Acquire the ACCA qualification to join the league of <br />Global Accounting & Finance Professionals</p>
                        <div className="side">
                            <button className="btn">Download Brochure</button>
                            <img className="silverlog" src="https://il-app.s3.ap-south-1.amazonaws.com/images/acca_silver_lp_logo.png" alt="ACCA" />
                        </div>
                    </div>
                    <div className="card">
                        <p>Aspiring to be an ACCA? Get in touch with us!</p>
                        <div className="insidecard">
                            <label for="email"></label>
                            <input
                                type="text"
                                name="name"
                                id="email"
                                placeholder="Email ID" />
                        </div>
                        <div className="insidecard">
                            <label for="Phonenum"></label>
                            <input
                                type="text"
                                name="name"
                                id="Phonenum"
                                placeholder="Phone Number"
                            />
                        </div>
                        <div className="btncls">
                            <button className="btn2">Request Call Back</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* first page end */}

            {/* first page 2nd part start */}
            <div id="middleup">
                <div className="middleup-head">
                    <p className="heading">What is ACCA?</p>
                    <div className="headingbar">            </div>
                </div>
                <div className="middleup-body">
                    <ul className="points-middleup">
                        <li>ACCA (Association of Chartered Certified Accountants) is a globally recognized accounting qualification offered by ACCA Global, UK</li>
                        <li>It provides unlimited career opportunities with MNCs and Big4s</li>
                        <li>A course which you can complete along with your graduation</li>
                        <li>It has 2 lakh + members & 5 lakh + students across 180+ countries</li>
                    </ul>
                </div>
            </div>
            <div id="middleup-box">
                <div className="boxesmiddle">
                    <h2 className=" center">Levels</h2>
                    <p className="center"><BiBookOpen size="1.4em" style={{ margin: '-0.3em 0.4em' }} />Three (13 papers)</p>
                </div>
                <div className="boxesmiddle">
                    <h2 className="center">Duration</h2>
                    <p className="center"><BiAlarm size="1.4em" style={{ margin: '-0.3em 0.4em' }} />6-30 months</p>
                </div>
                <div className="boxesmiddle">
                    <h2 className="center">Exams</h2>
                    <p className="center"><BsLaptop size="1.3em" style={{ margin: '-0.3em 0.4em' }} />Quarterly (Online)</p>
                </div>
                <div className="boxesmiddle">
                    <h2 className="center">Exemptions</h2>
                    <p className="center"><BsCalendarCheck size="1.3em" style={{ margin: '-0.3em 0.4em' }} />Available</p>
                </div>
            </div>

            {/* first page 2nd part end */}
            {/* first page 3rd part start */}
            <div id="middle-secondup-head">
                <div className="middleup-head">
                    <p className="heading">Why ACCA @ 1FIN?</p>
                    <div className="headingbar">            </div>
                </div>
            </div>
            <div id="middle-secondup-box">
                <div className="boxesmiddle">
                    <h2 className=" center"><ul><FaLightbulb size="1.6em" /></ul>Conceptual</h2>
                    <div className="points-middleup ">
                        <p><BsLaptop style={{ margin: '-0.3em 0.4em' }} />Regular Live Classes</p>
                        <p><FaUserFriends style={{ margin: '-0.3em 0.4em' }} />Expert Faculty</p>
                        <p><BsBriefcase style={{ margin: '-0.3em 0.4em' }} />Exam Oriented Content</p>
                        <p><MdScreenSearchDesktop style={{ margin: '-0.3em 0.4em' }} />Dedicated Discussions Forms</p>
                        <p><FaRegUser size="0.8em" style={{ margin: '-0.3em 0.4em' }} />Continous Support</p>
                    </div>
                </div>
                <div className="boxesmiddle">
                    <h2 className="center"><ul><FaUserFriends size="1.6em" /></ul>Comprehensive</h2>
                    <div className="points-middleup ">
                        <p><BsLaptop style={{ margin: '-0.3em 0.4em' }} />Exhaustive Q & A Bank</p>
                        <p><BsBriefcase style={{ margin: '-0.3em 0.4em' }} />1000s of MCQs for practice</p>
                        <p><MdTimelapse style={{ margin: '-0.3em 0.4em' }} />Tests at regular intervals</p>
                        <p><ImFilesEmpty style={{ margin: '-0.3em 0.4em' }} />Mock Exams</p>
                        <p><FaLightbulb style={{ margin: '-0.3em 0.4em' }} />Analysis of Answer Sheets</p>
                    </div>
                </div>
                <div className="boxesmiddle">
                    <h2 className="center"><ul><AiFillSafetyCertificate size="1.6em" /></ul>Career Oriented</h2>
                    <div className="points-middleup ">
                        <p><BsBriefcase style={{ margin: '-0.3em 0.4em' }} />Business Communication</p>
                        <p><CgWorkAlt style={{ margin: '-0.3em 0.4em' }} />Resume Building</p>
                        <p><AiFillLike style={{ margin: '-0.3em 0.4em' }} />Negotiation Skills</p>
                        <p><MdOpenInBrowser style={{ margin: '-0.3em 0.4em' }} />Mock Interviews</p>
                        <p><MdScreenSearchDesktop style={{ margin: '-0.3em 0.4em' }} />Placement Services</p>
                    </div>
                </div>
            </div>
            <div className="middle-secondup-foot">
                <p className="center">Live classes start on 5th September, 2022. <span className="link-enrol"><a href="#">Click here to Enrol Now.</a></span></p>
            </div>
            <div className="center">
                <img className="silverlog" src="https://il-app.s3.ap-south-1.amazonaws.com/images/acca_silver_lp_logo.png" alt="ACCA" />
            </div>
            {/* first page 3rd part end */}
            {/* first page 4rd part start */}
            <div id="eligibility" >
                <div className="middleup-head">
                    <p className="heading">ACCA Eligibility</p>
                    <div className="headingbar">     </div>     
                </div>
                <div className="Eligibal-text">
                <h1>To appear for the ACCA course examination a candidate should have</h1>
                <ul><BsCheck2 size="1.4em"  style={{ margin: '-0.3em 0.4em' }} />Qualified the 10+2 exams</ul>
                <ul><BsCheck2 size="1.4em" style={{ margin: '-0.3em 0.4em' }} />An aggregate of 65% in Mathematics / Accounts and English and a minimum of 50% in other subjects</ul>
                </div>
            </div>
            {/* first page 5th part start */}
            <div id="acca-learn">
      <div className="middleup-head">
        <p className="heading">What will you Learn in ACCA?</p>
        <div className="headingbar"></div>
      </div>
      <div id="middle-secondup-box">
        <div className="boxesmiddle">
          <h2 className="center">Knowledge Level</h2>
          <ul className="points-middlesec">
            <li>Business and Technology (BT)</li>
            <li>Management Accounting (MA)</li>
            <li>Financial Accounting (FA)</li>
          </ul>
          <button className="btn points-middlesec1">Enrol now</button>
        </div>
        <div className="boxesmiddle">
          <h2 className="center">Skill Level</h2>
          <ul className="points-middlesec">
            <li>Corporate and Business Law (LW)</li>
            <li>Performance Management (PM)</li>
            <li>Taxation (TX)</li>
            <li>Financial Reporting (FR)</li>
            <li>Audit and Assurance (AA)</li>
            <li>Financial Management (FM)</li>
            <button className="btn points-middlesec2">Enrol now</button>
          </ul>
        </div>
        <div className="boxesmiddle">
          <h2 className="center">Professional Level</h2>
          <ul className="points-middlesec">
            <h3>Compulsory</h3>
            <li>SBL - Strategic Business Leader</li>
            <li>SBR - Strategic Business Reporting</li>
            <h3>Two out of the following</h3>
            <li>Advanced Financial Management (AFM)</li>
            <li>Advanced Performance Management (APM)</li>
            <li>Advanced Taxation (ATX)</li>
            <li>Advanced Audit and Assurance (AAA)</li>
            <button className="btn points-middlesec3">Enrol now</button>
          </ul>
        </div>
      </div>
    </div>
    {/* 5th part end */}
    <div id="assistance" >
                <div className="middleup-head">
                    <p className="heading">Placement Assistance</p>
                    <div className="headingbar">     </div>     
                </div>
                <div className="assistance-text">
                <h1>Resume Building</h1>
                   <p>1FIN provides professional guidance to help you create an effective resume to help you create a lasting impression.</p>
                   <h1>Career Counselling</h1>
                   <p>We provide career counselling to conducting mock interviews and aptitude tests - we will assist you at every step, all the way, we make you job ready</p>
                   <h1>Jobs</h1>
                   <p>We will give you an edge over others with our direct corporate affiliations which will ensure that you are placed right.</p>
                </div>
            </div>
    {/* 5th END */}
        </body>
    )
}

export default Body;
