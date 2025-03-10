import '../styles/block.css';

function Range({ name, startYear, handler, index }) {
  const endYear = new Date().getFullYear();
  let parent = name === 'School' ? 'education' : 'experience'
  let field = startYear === 1940 ? 'start' : 'end';
  
  return (
    <select onBlur={handler} data-index={index} data-parent={parent} name={field} >
      {Array.from({ length: endYear - startYear + 1 }, (_, i) => {
        const year = (endYear + 1) - i;
        if(year === (endYear + 1)){
          return (
            <option key={year} value={'default'} > Select A Year </option>
          );
        }

        return (
          <option key={year} value={year}> {year} </option>
        );
      })}
    </select>
  );
}

function Block({ name, cert, handler, index, onDelete }) {
  if(cert !== 'role'){
    return (
      <div className="ed">
        <button className='delete-block' onClick={onDelete} ><i className='fas fa-trash'></i></button>
        <div className="inputBox">
          <label htmlFor="school">{name}</label>
          <input type="text" name="school" id="school" data-parent="education" data-index={index} onBlur={handler} />
        </div>
        <div className="inputBox">
          <label htmlFor="schools" className="bLabel">
            Certification
          </label>
          <select name="cert" id="schools" className="bSelect"  data-parent='education' data-index={index} onBlur={handler}>
            <option value="default" defaultValue={'Select an Option'}>Select an Option</option>
            <option value="First School Leaving Certificate">First School Leaving Certificate</option>
            <option value="Second School Leaving Certificate">Second School Leaving Certificate</option>
            <option value="Third School Leaving Certificate">Third School Leaving Certificate</option>
            <option value="First Degree">First Degree</option>
            <option value="Second Degree">Second Degree</option>
          </select>
        </div>
        <div className="inputBox">
            <label htmlFor="duration">Duration </label>
            <div className="dates">
              <div className="rng">
                <span>Year Started</span>
                <Range  name={name} startYear={1940} handler={handler} index={index} />
              </div>
              <div className="rng">
                <span>Year Ended</span>
                <Range name={name} startYear={1950} handler={handler} index={index} />
              </div>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="xp">
        <button className='delete-block' onClick={onDelete} ><i className='fas fa-trash'></i></button>
      <div className="inputBox">
        <label htmlFor="org">{name}</label>
        <input type="text" name="org" data-parent='experience' data-index={index} id="org" onBlur={handler}/>
      </div>
      <div className="inputBox">
        <label htmlFor="role" className="bLabel">
          Role:
        </label>
        <input type="text" name="role" id="role" className="bInput"  data-parent='experience' data-index={index} onBlur={handler}/>
      </div>
      <div className="inputBox">
        <label htmlFor="accomp">Any Notable Accomplishments?</label>
        <textarea
          name="accomp"
          id="accomp"
          cols="45"
          rows="7"
          data-parent='experience'
          data-index={index}
          className="bText"
          onBlur={handler}
        ></textarea>
      </div>
      <div className="inputBox">
        <label htmlFor="duration">Duration </label>
        <div className="dates">
          <div className="rng">
            <span>Year Started</span>
            <Range name={name} startYear={1940} handler={handler} index={index} />
          </div>
          <div className="rng">
            <span>Year Ended</span>
            <Range name={name} startYear={1950} handler={handler} index={index} />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Block;
