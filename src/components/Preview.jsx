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
        <h3>Python</h3>
        <input type="range" name="skill-range" />
      </div>
    );
}

function Exp(props){
    return (
        <div className="work-wrapper">
            <h3>Job Title</h3>
            <p className="comp-name"> <span>Company</span> <span>2000 - 2000</span></p>
        </div>
    );
}


function Preview(props){
    return(
        <article>
            <div className="header">
                <h2 className="name">{props.name}</h2>
                <p className="title">{props.position}</p>
            </div>
            <div className="main-part">
                <aside>
                    <div className="first">
                        <h2 className="lines">CONTACT</h2>
                        <p className="deets num">{props.phone}</p>
                        <p className="deets email">{props.email}</p>
                    </div>
                    <div className="second">
                        <h2 className="lines">EDUCATION</h2>
                        {/* {props.education.map(ed => {
                            return <Ed />
                        })} */}
                        <Ed year={2000} school="Islamic Center" deg="First School Leaving Cert"  start={2000} end={2005}/>
                        <Ed year={2000} school="Islamic Center" deg="First School Leaving Cert"  start={2000} end={2005}/>
                        {/* <Ed year={2000} school="Islamic Center" deg="First School Leaving Cert"  start={2000} end={2005}/> */}
                        {/* <Ed />
                        <Ed /> */}
                    </div>
                    <div className="third">
                        <h2 className="lines">SKILLS</h2>
                        <Sk />
                        <Sk />
                        <Sk />
                    </div>
                </aside>
                <div className='details'>
                    <div className="summary">
                        <h2>Professional Summary</h2>
                        <p className="summ"></p>
                    </div>
                    <div className="experience">
                        <h2>Work Experience</h2>
                        <Exp />
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Preview;