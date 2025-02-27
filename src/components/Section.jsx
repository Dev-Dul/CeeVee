import Buttons from './Buttons';
import Block from './Block';
import '../styles/slide.css'

function Skills(){
    return (
      <div className="skills">
        <label>
          <span>Skill: </span>
          <input type="text" />
        </label>
        <label>
          <span>Proficiency Level: </span>
          <input type="range" min={20} max={100} />
        </label>
      </div>
    );
}


function Slide(props){
    console.log(props.cnt);
    if(props.order === 'first'){
        return (
          <section className={`slide ${props.cnt === 1 ? 'active' : 'inactive'} `} >
            <h2>Personal Info</h2>
            <label htmlFor="name" className='sLabel'>
              <span>Name: </span>
              <input type="text" name="name" id="name" />
            </label>
            <label htmlFor="position" className='sLabel'>
              <span>Position: </span>
              <input type="text" name="position" id="position" />
            </label>
            <label htmlFor="phone" className='sLabel'>
              <span>Phone: </span>
              <input type="text" name="phone" id="phone" />
            </label>
            <label htmlFor="email" className='sLabel'>
              <span>Email: </span>
              <input type="email" name="email" id="email" />
            </label>
            <Buttons name="first"  next={props.bttn} count={props.cnt} />
          </section>
        );
    }else if(props.order === 'second'){
        return (
            <section className={`slide ${props.cnt === 2 ? 'active' : 'inactive'} `} >
                <h2>Professional Summary</h2>
                <textarea name="summary" id="summary" cols="40" rows="15" placeholder='Write a brief, compelling and captivating history of your career. '></textarea>
                <Buttons name='second' next={props.bttn} count={props.cnt} />
            </section>
        )
    }else if(props.order === 'third'){
        return (
          <section className={`slide ${props.cnt === 3 ? 'active' : 'inactive'} `} >
            <h2>Education</h2>
            <Block name="School" cert="school" />
            <Block name="School" cert="school" />
            <Block name="School" cert="school" />
            <button
              type="button"
              className="newBlock"
              onClick={() => <Block name="School" cert="school" />}
            >Add School</button>
            <Buttons name='third' next={props.bttn} count={props.cnt} />
          </section>
        );
    }else if(props.order === 'fourth'){
        return (
          <section className={`slide ${props.cnt === 4 ? 'active' : 'inactive'}`} >
            <h2>Experience</h2>
            <Block name="Organization" cert="role" />
            <Block name="Organization" cert="role" />
            <Block name="Organization" cert="role" />
            <button
              type="button"
              className="newBlock"
              onClick={() => <Block name="Organization" cert="role" />}
            >Add Experience</button>
            <Buttons name='fourth' next={props.bttn} count={props.cnt} />
          </section>
        );
    }else{
        return (
          <section className={ `slide ${props.cnt === 5 ? 'active' : 'inactive'} `} >
            <h2>Skills</h2>
            <Skills />
            <Skills />
            <Skills />
            <button type="button" onClick={() => <Skills />}>Add Skill</button>
            <Buttons name='fifth' next={props.bttn} count={props.cnt} />
          </section>
        );
    }
}

export default Slide;