function Ed(props){
    return(
        <>
            <aside>
                <h2 className="year">{props.year}</h2>
            </aside>
            <div className="deets">
                <p className="school">{props.school}</p>
                <h2 className="deg">{props.deg}</h2>
                <p className="duration">{props.start} - {props.end}</p>
            </div>
        </>
    )
}


function Preview(){
    return(
        <article>
            <div className="header">
                <h2 className="name"></h2>
                <p className="title"></p>
            </div>
            <div className="main-part">
                <aside>
                    <div className="first">
                        <h2 className="lines">CONTACT</h2>
                        <p className="num"></p>
                        <p className="email"></p>
                        <p className="address"></p>
                    </div>
                    <div className="second">
                        <h2 className="lines">EDUCATION</h2>
                        <Ed />
                        <Ed />
                        <Ed />
                    </div>
                    <div className="thid">
                        <h2 className="lines">SKILLS</h2>
                    </div>
                </aside>
                <div>

                </div>
            </div>
        </article>
    )
}