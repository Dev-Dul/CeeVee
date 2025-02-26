import '../styles/block.css';
function Range({ startYear }) {

  const sel = document.createElement("select");
  const endYear = new Date().getFullYear();
  for(let year = endYear; year >= startYear; year--) {
    let option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    sel.appendChild(option);
  }

  console.log(sel);

  return sel;
}

function Block({ name, cert }) {
  console.log(name)
  console.log(cert)
  if(cert !== 'role'){
    return (
      <div className="ed">
        <div className="inputBox">
          <label htmlFor="school">{name}</label>
          <input type="text" name="school" id="school" />
        </div>
        <div className="inputBox">
          <label htmlFor="schools" className="bLabel">
            Certification
          </label>
          <select name="schools" id="schools" className="bSelect">
            <option value="Primary">First School Leaving Certificate</option>
            <option value="Secondary">Second School Leaving Certificate</option>
            <option value="Third">Third School Leaving Certificate</option>
            <option value="f-deg">First Degree</option>
            <option value="s-deg">Second Degree</option>
          </select>
        </div>
        <div className="inputBox">
            <label htmlFor="duration">Duration </label>
            <div className="dates">
              {/* <Range startYear={1950} />
            <Range startYear={1950} /> */}
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="xp">
      <div className="inputBox">
        <label htmlFor="org">{name}</label>
        <input type="text" name="org" id="org" />
      </div>
      <div className="inputBox">
        <label htmlFor="role" className="bLabel">
          Role:
        </label>
        <input type="text" name="role" id="role" className="bInput" />
      </div>
      <div className="inputBox">
        <label htmlFor="accomp">Any Notable Accomplishments?</label>
        <textarea
          name="accomp"
          id="accomp"
          cols="45"
          rows="7"
          className="bText"
        ></textarea>
      </div>
      <div className="inputBox">
        <label htmlFor="duration">Duration </label>
        <div className="dates">
          {/* <Range startYear={1950} />
        <Range startYear={1950} /> */}
        </div>
      </div>
    </div>
  );
}

export default Block;
