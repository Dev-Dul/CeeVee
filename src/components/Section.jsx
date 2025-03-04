import Buttons from './Buttons';
import Block from './Block';
import Preview from './Preview'
import { Education, Experience, Skil } from './Classes';
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
          <input type="range" min={20} max={100} data-parent='skills' data-index={props.index} name='level' onBlur={props.handleInput} />
        </label>
      </div>
    );
}


function Slide(props){

  const [datahub, setDatahub] = useState({
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

    // console.log(datahub);

  function handleInput(e){
    if(e.target.value !== ''){
      const parent = e.target.dataset.parent;
      const index = Number(e.target.dataset.index);
      const field = e.target.name;
      const newValue = e.target.value;
      setDatahub((prev) =>({
        ...prev,
        [parent]: prev[parent].map((item, i) => (i === index ? item.update(field, newValue) : item)),
      }));
    }
  }

  
  

  function updateEd(){
    setDatahub((prev) => ({
      ...prev,
      education: [...prev.education, new Education() ]
    }));
  }

  function updateEx(){
    setDatahub((prev) => ({
      ...prev,
      experience: [...prev.experience, new Experience() ]
    }));
  }


  function updateSkills(){
    setDatahub((prev) => ({
      ...prev,
      skills: [...prev.skills, new Skil() ]
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
              <input type="text" name="name" id="name" value={props.tiTan.name} onChange={props.handleChange} />
            </label>
            <label htmlFor="position" className='sLabel'>
              <span>Position: </span>
              <input type="text" name="position" id="position" value={props.tiTan.position} onChange={props.handleChange} />
            </label>
            <label htmlFor="phone" className='sLabel'>
              <span>Phone: </span>
              <input type="text" name="phone" id="phone" value={props.tiTan.phone} onChange={props.handleChange} />
            </label>
            <label htmlFor="email" className='sLabel'>
              <span>Email: </span>
              <input type="email" name="email" id="email" value={props.tiTan.email} onChange={props.handleChange} />
            </label>
            <Buttons name="first"  next={props.bttn} count={props.cnt} />
          </section>
        );
    }else if(props.order === 'second'){
        return (
            <section className={`slide ${props.cnt === 2 ? 'active' : 'inactive'} `} >
                <h2>Professional Summary</h2>
                <textarea name="summary" id="summary" cols="40" rows="15" value={props.tiTan.summary} placeholder='Write a brief, compelling and captivating history of your career. ' onChange={props.handleChange}></textarea>
                <Buttons name='second' next={props.bttn} back={props.back} count={props.cnt} />
            </section>
        )
    }else if(props.order === 'third'){
        return (
          <section className={`slide ${props.cnt === 3 ? 'active' : 'inactive'} `} >
            <h2>Education</h2>
            {blocks.map((block, index) => {
              return <Block name="School" cert="school" id={block.id} key={block.id} handler={handleInput} index={index} />;
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
            {blocksTwo.map((block, index) => {
              return (
                <Block
                  name="Organization"
                  cert="role"
                  id={block.id}
                  key={block.id}
                  index={index}
                  handler={handleInput}
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
            {skills.map((skill, index) => {
              return <Skills id={skill.id} key={skill.id} handleInput={handleInput} index={index} />
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
          <Preview data={datahub} processor={handleInput} titan={props.tiTan} />

        </section>
      )
    }
}

export default Slide;