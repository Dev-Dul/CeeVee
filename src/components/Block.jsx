
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
  return (
    <div className="ed">
      <label htmlFor="school">
        {name} <input type="text" name="school" id="school" />
      </label>
      <label htmlFor="role" className={cert === "role" ? "active" : "inactive"}>
        Role:{" "}
        <input
          type="text"
          name="role"
          id="role"
          className={cert === "role" ? "active" : "inactive"}
        />
      </label>
      <label
        htmlFor="schools"
        className={cert !== "role" ? "active" : "inactive"}
      >
        {cert}{" "}
      </label>
      <select
        name="schools"
        id="schools"
        className={cert !== "role" ? "active" : "inactive"}
      >
        <option value="Primary">First School Leaving Certificate</option>
        <option value="Secondary">Second School Leaving Certificate</option>
        <option value="Third">Third School Leaving Certificate</option>
        <option value="f-deg">First Degree</option>
        <option value="s-deg">Second Degree</option>
      </select>
      <label htmlFor="duration">Duration </label>
      <div className="dates">
        {/* <Range startYear={1950} />
        <Range startYear={1950} /> */}
      </div>
    </div>
  );
}

export default Block;
