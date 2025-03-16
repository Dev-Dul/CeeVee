import ReactDOM from "react-dom/client";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useState, useEffect, useRef } from "react";
import "../styles/preview.css";

function Ed(props) {
  return (
    <div className="ed-wrapper">
      <aside className="yr">
        <h2 className="year">{props.year}</h2>
      </aside>
      <div className="dts">
        <p className="school">{props.school}</p>
        <h2 className="deg">{props.deg}</h2>
        <p className="duration">
          {props.start} - {props.end}
        </p>
      </div>
    </div>
  );
}

function Sk(props) {
  return (
    <div className="skill-wrapper">
      <h3>{props.skill}</h3>
      <div className="level-wrapper" style={{height: "2px", width: "50%" }}>
        <div className="lvl" style={{ height: "100%", width: `${props.level}%`, background: "#fff" }}></div>
      </div>
    </div>
  );
}

function Exp(props) {
  return (
    <div className="work-wrapper">
      <h3>{props.org}</h3>
      <p className="comp-name">
        <span>{props.role}</span>{" "}
        <span>
          {props.start} - {props.end}
        </span>
      </p>
      <p className="accom">{props.accomp}</p>
    </div>
  );
}

export default function Preview(props) {
  return (
    <article id="cv-preview">
      <div className="header">
        <h2 className="name">{props.titan.name}</h2>
        <p className="title">{props.titan.position}</p>
      </div>
      <div className="main-part">
        <aside>
          <div className="first">
            <h2 className="lines">
              <span>CONTACT</span> <i className="fa-solid fa-id-badge"></i>
            </h2>
            <p className="deets num">
              <i className="fa-solid fa-phone"></i>{" "}
              <span>{props.titan.phone}</span>
            </p>
            <p className="deets email">
              <i className="fa-solid fa-envelope"></i>{" "}
              <span>{props.titan.email}</span>
            </p>
          </div>
          <div className="second">
            <h2 className="lines">
              <span>EDUCATION</span>{" "}
              <i className="fa-solid fa-graduation-cap"></i>
            </h2>
            {props.data.education.map((ed) => {
              const details = ed.getData();
              return (
                <Ed
                  year={details.start}
                  school={details.school}
                  start={details.start}
                  end={details.end}
                  deg={details.cert}
                  key={details.id}
                />
              );
            })}
          </div>
          <div className="third">
            <h2 className="lines">
              <span>SKILLS</span> <i className="fa-solid fa-lightbulb"></i>
            </h2>
            {props.data.skills.map((sk) => {
              const details = sk.getData();
              return (
                <Sk
                  skill={details.skill}
                  level={details.level}
                  key={details.id}
                />
              );
            })}
          </div>
        </aside>
        <div className="details">
          <div className="summary">
            <h2 className="right">
              <span>Professional Summary</span>{" "}
              <i className="fa-solid fa-user"></i>
            </h2>
            <p className="summ">{props.titan.summary}</p>
          </div>
          <div className="experience">
            <h2 className="right">
              <span>Work Experience</span>{" "}
              <i className="fa-solid fa-briefcase"></i>
            </h2>
            {props.data.experience.map((exp) => {
              const details = exp.getData();
              return (
                <Exp
                  org={details.org}
                  role={details.role}
                  accomp={details.accomp}
                  start={details.start}
                  end={details.end}
                  key={details.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}

export function ToHtml(element){
  const container = document.createElement("div");
  const root = ReactDOM.createRoot(container);
  root.render(element);
  return container;
}


export async function ToImage() {
  const element = document.querySelector("#cv-preview"); // Ensure this is the correct selector for your Preview
  if (!element) {
    console.error("Preview element not found!");
    return null;
  }

  try {
    const canvas = await html2canvas(element, { useCORS: true, scale: 2 });
    return canvas.toDataURL("image/png");
  } catch (error) {
    console.error("Error capturing element:", error);
    return null;
  }
}


export function Prev( {src} ){
  const [isZoomed, setIsZoomed] = useState(false);
  const toggleZoom = () => setIsZoomed(prev => !prev);
  const body = document.body;
  if(isZoomed){
    body.style.overflow = "scroll";
  }else{
    body.style.overflow = "hidden";

  }
  
  return (
    <div className="prev-wrapper">
      <img
        className="img-preview"
        src={src}
        alt="CV Preview"
        onDoubleClick={toggleZoom}
        style={{ transform: isZoomed ? "scale(3)" : "scale(1)" }}
      />
      <div className="tooltip" style={{display: isZoomed ? "none": "block"}}>Double Click On Image To Zoom In.</div>
    </div>
  );
}


export async function toPDF() {
  const element = document.querySelector("#cv-preview");
  if (!element) {
    console.error("Preview element not found!");
    return;
  }

  const imageData = await ToImage(); // ToImage does not accept arguments

  if (!imageData) {
    console.error("Failed to generate image data");
    return;
  }

  // Create a PDF document
  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();

  // Get element dimensions instead of undefined canvas
  const { width, height } = element.getBoundingClientRect();
  const pdfHeight = (height * pdfWidth) / width;

  pdf.addImage(imageData, "PNG", 0, 0, pdfWidth, pdfHeight);

  // Convert PDF to Blob and create a download link
  const pdfBlob = pdf.output("blob");
  const pdfURL = URL.createObjectURL(pdfBlob);

  // Create a download link
  const link = document.createElement("a");
  link.href = pdfURL;
  link.download = "document.pdf";
  link.click();

  // Clean up the object URL
  URL.revokeObjectURL(pdfURL);
}



