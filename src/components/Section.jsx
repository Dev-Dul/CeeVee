import Buttons from './Buttons';
import Block from './Block';
import '../styles/slide.css'
import { useState } from 'react';

function Skills(props){
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
  const [blocks, setBlocks] = useState([
    {id: crypto.randomUUID()},
    {id: crypto.randomUUID()},
    {id: crypto.randomUUID()}
  ]);

  const [blocksTwo, setBlocksTwo] = useState([
    {id: crypto.randomUUID()},
    {id: crypto.randomUUID()},
    {id: crypto.randomUUID()}
  ]);

  const [skills, setSkills] = useState([
    { id: crypto.randomUUID() },
    { id: crypto.randomUUID() },
    { id: crypto.randomUUID() }
  ]);

  function addBlock(){
    setBlocks(prevBlocks => [...prevBlocks, {id: crypto.randomUUID() }]);
  }

  function addBlockTwo(){
    setBlocksTwo(prevBlocks => [...prevBlocks, {id: crypto.randomUUID() }]);
  }

  function addSkills(){
    setSkills(prevSkiils => [...prevSkiils, {id: crypto.randomUUID() }])
  }

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
                <Buttons name='second' next={props.bttn} back={props.back} count={props.cnt} />
            </section>
        )
    }else if(props.order === 'third'){
        return (
          <section className={`slide ${props.cnt === 3 ? 'active' : 'inactive'} `} >
            <h2>Education</h2>
            {blocks.map(block => {
              return <Block name="School" cert="school" id={block.id} key={block.id} />;
            })}
            <button
              type="button"
              className="newBlock"
              onClick={() => addBlock()}
            >Add School</button>
            <Buttons name='third' next={props.bttn} back={props.back} count={props.cnt} />
          </section>
        );
    }else if(props.order === 'fourth'){
        return (
          <section
            className={`slide ${props.cnt === 4 ? "active" : "inactive"}`}
          >
            <h2>Experience</h2>
            {blocksTwo.map((block) => {
              return (
                <Block
                  name="Organization"
                  cert="role"
                  id={block.id}
                  key={block.id}
                />
              );
            })}
            <button
              type="button"
              className="newBlock"
              onClick={() => addBlockTwo() }
            >
              Add Experience
            </button>
            <Buttons
              name="fourth"
              next={props.bttn}
              back={props.back}
              count={props.cnt}
            />
          </section>
        );
    }else{
        return (
          <section className={ `slide ${props.cnt === 5 ? 'active' : 'inactive'} `} >
            <h2>Skills</h2>
            {skills.map(skill => {
              return <Skills id={skill.id} key={skill.id} />
            })}
            <button type="button" onClick={() => addSkills() }>Add Skill</button>
            <Buttons name='fifth' next={props.bttn} back={props.back} count={props.cnt} />
          </section>
        );
    }
}

export default Slide;