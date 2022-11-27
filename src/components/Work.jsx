import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaChalkboardTeacher} from "react-icons/fa"
import {IoIosSchool} from "react-icons/io"



const Work = () => {
    


  return (
    <div name='work' className='w-full h-full bg-[#0a192f] flex justify-center items-center p-4 z-5'>
    <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(24,124,188)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(24,124,188)' }}
            date="2022 August - present"
            iconStyle={{ background: 'rgb(24,124,188)', color: '#fff' }}
            icon={<IoIosSchool />}
        >
            <h3 className="vertical-timeline-element-title">TA for Interaction Design and Prototyping (IS211)</h3>
            <h4 className="vertical-timeline-element-subtitle">Singapore Management University</h4>
            <p>
            Helped mentor students about software design process, requirements, principals and UI/UX.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 May - present"
            iconStyle={{ background: 'rgb(24,124,188)', color: '#fff' }}
            icon={<FaChalkboardTeacher />}
        >
            <h3 className="vertical-timeline-element-title">Tuition Center Coding Teacher</h3>
            <h4 className="vertical-timeline-element-subtitle">Logiscool Singapore</h4>
            <p>
                Teach young children to code. Introduce coding to them in a fun and interesting way by doing projects with them.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021"
            iconStyle={{ background: 'rgb(24,124,188)', color: '#fff' }}
            icon={<IoIosSchool />}
        >
            <h3 className="vertical-timeline-element-title">TA for Introduction to Programming (IS111)</h3>
            <h4 className="vertical-timeline-element-subtitle">Singapore Management University</h4>
            <p>
            Helped mark students' homework and answer questions related to Python.
            </p>
        </VerticalTimelineElement>
        
    </VerticalTimeline>
    </div>
  )
}

export default Work