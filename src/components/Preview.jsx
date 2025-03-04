import '../styles/preview.css'

function Ed(props){
    return(
        <div className="ed-wrapper">
            <aside className='yr'>
                <h2 className="year">{props.year}</h2>
            </aside>
            <div className="dts">
                <p className="school">{props.school}</p>
                <h2 className="deg">{props.deg}</h2>
                <p className="duration">{props.start} - {props.end}</p>
            </div>
        </div>
    )
}

function Sk(props){
    return (
      <div className="skill-wrapper">
        <h3>{props.skill}</h3>
        <input type="range" name="skill-range" defaultValue={props.level} />
      </div>
    );
}

function Exp(props){
    return (
        <div className="work-wrapper">
            <h3>Job Title</h3>
            <p className="comp-name"> <span>{props.org}</span> <span>2000 - 2000</span></p>
            <p className="role">{props.role}</p>
            <p className="accom">{props.accomp}</p>
        </div>
    );
}


function Preview(props){
    return(
        <article>
            <div className="header">
                <h2 className="name">{props.titan.name}</h2>
                <p className="title">{props.titan.position}</p>
            </div>
            <div className="main-part">
                <aside>
                    <div className="first">
                        <h2 className="lines">CONTACT</h2>
                        <p className="deets num">{props.titan.phone}</p>
                        <p className="deets email">{props.titan.email}</p>
                    </div>
                    <div className="second">
                        <h2 className="lines">EDUCATION</h2>
                        {props.data.education.map((ed) => {
                            const details = ed.getData();
                            return <Ed year={details.start} school={details.school} start={details.start} end={details.end} deg={details.cert} key={details.id} />
                        })}
                    </div>
                    <div className="third">
                        <h2 className="lines">SKILLS</h2>
                        {props.data.skills.map((sk) => {
                            const details = sk.getData();
                            return <Sk skill={details.skill} level={details.level} key={details.id} />
                        })}
                    </div>
                </aside>
                <div className='details'>
                    <div className="summary">
                        <h2>Professional Summary</h2>
                        <p className="summ">{props.titan.summary}</p>
                    </div>
                    <div className="experience">
                        <h2>Work Experience</h2>
                        {props.data.experience.map((exp) => {
                            const details = exp.getData();
                            return <Exp org={details.org} role={details.role} accomp={details.accomp} key={details.id} />
                        })}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Preview;