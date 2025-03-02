import Buttons from './Buttons';
import Block from './Block';
import Preview from './Preview'
import { Education, Experience, Skil } from './Classes';
import '../styles/slide.css'
import { useState } from 'react';

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

  const [ datahub, setDatahub] = useState({
      education: [
        new Education(),
        new Education(),
        new Education(),
      ],

      experience: [
        new Experience(),
        new Experience(),
        new Experience(),
      ],

      skills: [
        new Skil(),
        new Skil(),
        new Skil(),
      ]
    });

  function handleInput(e){
    if(e.target.value !== ''){
      const parent = e.target.dataset.parent;
      const index = Number(e.target.dataset.index);
      const newValue = e.target.value;
      setDatahub((prev) =>({
        ...prev,
        [parent]: prev.parent.map((item, i) => (i === index ? item.update(newValue) : item)),
      }));
    }
  }
  
  const [tiTan, setTitan] = useState([
    {
      name: "",
      position: "",
      email: "",
      phone: "",
      summary: "",
      education: [
        { id: crypto.randomUUID() },
        { id: crypto.randomUUID() },
        { id: crypto.randomUUID() },
      ],
      experience: [
        { id: crypto.randomUUID() },
        { id: crypto.randomUUID() },
        { id: crypto.randomUUID() },
      ],
      skills: [
        { id: crypto.randomUUID() },
        { id: crypto.randomUUID() },
        { id: crypto.randomUUID() },
      ],
    },
  ]);

  function handleChange(e){
    setTitan((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function updateEd(){
    setTitan((prev) => ({
      ...prev,
      education: [...prev.education, {id: crypto.randomUUID()}]
    }));
  }

  function updateEx(){
    setTitan((prev) => ({
      ...prev,
      experience: [...prev.education, {id: crypto.randomUUID()}]
    }));
  }
  function updateEx(){
    setTitan((prev) => ({
      ...prev,
      experience: [...prev.education, {id: crypto.randomUUID()}]
    }));
  }

  function updateSkills(){
    setTitan((prev) => ({
      ...prev,
      skills: [...prev.education, {id: crypto.randomUUID()}]
    }));
  }


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
    if(blocks.length < 5){
      setBlocks(prevBlocks => [...prevBlocks, {id: crypto.randomUUID() }]);
      updateEd();
    }
  }

  function addBlockTwo(){
    setBlocksTwo(prevBlocks => [...prevBlocks, {id: crypto.randomUUID() }]);
    updateEx();
  }

  function addSkills(){
    if(skills.length < 5){
      setSkills(prevSkiils => [...prevSkiils, {id: crypto.randomUUID() }]);
      updateSkills();
    }
  }

    if(props.order === 'first'){
        return (
          <section className={`slide ${props.cnt === 1 ? 'active' : 'inactive'} `} >
            <h2>Personal Info</h2>
            <label htmlFor="name" className='sLabel'>
              <span>Name: </span>
              <input type="text" name="name" id="name" onChange={handleChange} />
            </label>
            <label htmlFor="position" className='sLabel'>
              <span>Position: </span>
              <input type="text" name="position" id="position" onChange={handleChange} />
            </label>
            <label htmlFor="phone" className='sLabel'>
              <span>Phone: </span>
              <input type="text" name="phone" id="phone" onChange={handleChange} />
            </label>
            <label htmlFor="email" className='sLabel'>
              <span>Email: </span>
              <input type="email" name="email" id="email" onChange={handleChange} />
            </label>
            <Buttons name="first"  next={props.bttn} count={props.cnt} />
          </section>
        );
    }else if(props.order === 'second'){
        return (
            <section className={`slide ${props.cnt === 2 ? 'active' : 'inactive'} `} >
                <h2>Professional Summary</h2>
                <textarea name="summary" id="summary" cols="40" rows="15" placeholder='Write a brief, compelling and captivating history of your career. ' onChange={handleChange}></textarea>
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
    }else if(props.order === 'fifth'){
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
    }else{
      return (
        <section className= {`slide ${props.cnt === 6 ? 'active' : "inactive"}`}>
          <h2>CV Preview</h2>
          <p>Does everything look good?</p>
          <Preview data={tiTan} />

        </section>
      )
    }
}

export default Slide;