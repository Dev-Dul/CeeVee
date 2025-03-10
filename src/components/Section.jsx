import Buttons from './Buttons';
import Block from './Block';
// import Preview from './Preview'
import '../styles/slide.css'
import { useState } from 'react';
import Preview, { Prev, ToHtml, ToImage, toPDF } from './Preview'

function Skills(props){
    return (
      <div className="skills">
        <label>
          <span>Skill: </span>
          <input type="text" data-parent="skills" data-index={props.index} name='skill' onBlur={props.handleInput} />
        </label>
        <button className='delete-skills' onClick={props.onDelete}><i className='fas fa-trash'></i></button>
        <label>
          <span>Proficiency Level: </span>
          <input type="range" min={20} max={100} data-parent='skills' data-index={props.index} name='level' onBlur={props.handleInput} />
        </label>
      </div>
    );
}


function Slide(props){

  const [imgData, setImgData] = useState(null);
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
      props.capsule.updateEd();
    }
  }

  function addBlockTwo(){
    setBlocksTwo(prevBlocks => [...prevBlocks, {id: crypto.randomUUID() }]);
    props.capsule.updateEx();
  }

  function deleteBlock(setFunc, id, inner, outer){
    props.capsule.erase(inner, outer);
    setFunc(prev => prev.filter((field) => field.id !== id));

  }

  function addSkills(){
    if(skills.length < 5){
      setSkills(prevSkills => [...prevSkills, {id: crypto.randomUUID() }]);
      props.capsule.updateSkills();
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
            <Buttons name="first"  next={props.bttn} count={props.cnt} tiTan={props.tiTan} datahub={props.datahub} />
          </section>
        );
    }else if(props.order === 'second'){
        return (
            <section className={`slide ${props.cnt === 2 ? 'active' : 'inactive'} `} >
                <h2>Professional Summary</h2>
                <textarea name="summary" id="summary" cols="40" rows="15" value={props.tiTan.summary} placeholder='Write a brief, compelling and captivating history of your career. ' onChange={props.handleChange}></textarea>
                <Buttons name='second' next={props.bttn} back={props.back} count={props.cnt} tiTan={props.tiTan} datahub={props.datahub} />
            </section>
        )
    }else if(props.order === 'third'){
        return (
          <section className={`slide ${props.cnt === 3 ? 'active' : 'inactive'} `} >
            <h2>Education</h2>
            {blocks.map((block, index) => {
              return (
                <Block
                  name="School"
                  cert="school"
                  id={block.id}
                  key={block.id}
                  handler={props.handleInput}
                  index={index}
                  onDelete={() => deleteBlock(setBlocks, block.id, index, "education")}
                />
              );
            })}
            <button
              type="button"
              className="newBlock"
              onClick={() => addBlock()}
            >Add School</button>
            <Buttons name='third' next={props.bttn} back={props.back} count={props.cnt} tiTan={props.tiTan} datahub={props.datahub} />
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
                  handler={props.handleInput}
                  onDelete={() => deleteBlock(setBlocksTwo, block.id, index, "experience")}
                />
              );
            })}
            <button
              type="button"
              className="newBlock"
              onClick={() => addBlockTwo()}
            >
              Add Experience
            </button>
            <Buttons
              name="fourth"
              next={props.bttn}
              back={props.back}
              count={props.cnt}
              tiTan={props.tiTan}
              datahub={props.datahub}
            />
          </section>
        );
    }else if(props.order === 'fifth'){
        return (
          <section className={ `slide ${props.cnt === 5 ? 'active' : 'inactive'} `} >
            <h2>Skills</h2>
            {skills.map((skill, index) => {
              return (
                <Skills
                  id={skill.id}
                  key={skill.id}
                  handleInput={props.handleInput}
                  index={index}
                  onDelete={() => deleteBlock(setSkills, skill.id, index, "skills")}
                />
              );
            })}
            <button type="button" onClick={() => addSkills() }>Add Skill</button>
            <Buttons name='fifth' next={props.bttn} back={props.back} count={props.cnt} tiTan={props.tiTan} datahub={props.datahub} />
          </section>
        );
    }else{

        async function generatePreview() {
          const img = await ToImage();
          if(img){
            setImgData(img);
          }else{
            console.error("Failed to generate image.");
          }
        }

      console.log(props.handleEdit);
       return (
         <section className={`slide ${props.cnt === 6 ? "active" : "inactive"}`}>
           <h2>CV Preview</h2>
           <button type="button" onClick={generatePreview}>Generate Preview</button>
           {imgData && <p>Everything looks good?</p>}
           {imgData && <Prev src={imgData} />}
           <Buttons name="sixth" handle={props.handleEdit} download={toPDF} />

           <div style={{ position: "absolute", left: "-9999px" }}>
             <Preview
               data={props.datahub}
               pocessor={props.handleInput}
               titan={props.tiTan}
             />
           </div>
         </section>
       );
    }
}

export default Slide;