


function Skills(){
    return (
        <div className="skills">
            <label>
                Skill Name: {' '}
                <input type="text" />
            </label>
            <label>
                Proficiency Level: {' '}
                <input type="range" min={20} max={100} />
            </label>
        </div>
    );
}


function Slide(props){
    if(props.order === 'first'){
        return(
            <section>
                <label htmlFor="name">
                    Name: {' '}
                    <input type="text" name="name" id="name" />
                </label>
                <label htmlFor="position">
                    Position: {' '}
                    <input type="text" name="position" id="position" />
                </label>
                <label htmlFor="phone">
                    Phone: {' '}
                    <input type="text" name="phone" id="phone" />
                </label>
                <label htmlFor="email">
                    Email: {' '}
                    <input type="email" name="email" id="email" />
                </label>
                <Buttons />
            </section>
        )
    }else if(props.order === 'second'){
        return (
            <section>
                <h2>Professional Summary</h2>
                <textarea name="summary" id="summary" cols="30" rows="15"></textarea>
                <Buttons />
            </section>
        )
    }else if(props.order === 'third'){
        return (
          <section>
            <h2>Education</h2>
            <Block name="School" cert="Certifications" />
            <Block name="School" cert="Certifications" />
            <Block name="School" cert="Certifications" />
            <button
              type="button"
              className="newBlock"
              onClick={() => <Block name="School" cert="Certifications" />}
            >Add School</button>
            <Buttons />
          </section>
        );
    }else if(props.order === 'fourth'){
        return (
          <section>
            <h2>Experince</h2>
            <Block name="Organization" cert="role" />
            <Block name="Organization" cert="role" />
            <Block name="Organization" cert="role" />
            <button
              type="button"
              className="newBlock"
              onClick={() => <Block name="Organization" cert="role" />}
            >Add Expeience</button>
            <Buttons />
          </section>
        );
    }else{
        return (
          <section>
            <h2>Skills</h2>
            <Skills />
            <Skills />
            <Skills />
            <button type="button" onClick={() => <Skills />}>Add Skill</button>
            <Buttons />
          </section>
        );
    }
}