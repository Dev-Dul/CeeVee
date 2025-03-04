import { useState } from "react";
import { Education, Experience, Skil } from "./Classes";

export default function Colossus(){

    const [datahub, setDatahub] = useState({
      education: [new Education(), new Education(), new Education()],
    
      experience: [new Experience(), new Experience(), new Experience()],
    
      skills: [new Skil(), new Skil(), new Skil()],
    });
    
    function handleInput(e) {
      if (e.target.value !== "") {
        const parent = e.target.dataset.parent;
        console.log(parent);
        const index = Number(e.target.dataset.index);
        const field = e.target.name;
        const newValue = e.target.value;
        setDatahub((prev) => ({
          ...prev,
          [parent]: prev[parent].map((item, i) =>
            i === index ? item.update(field, newValue) : item
          ),
        }));
      }
    }

    const capsule = (function(){

        function updateEd() {
          setDatahub((prev) => ({
            ...prev,
            education: [...prev.education, new Education()],
          }));
        }
    
        function updateEx() {
          setDatahub((prev) => ({
            ...prev,
            experience: [...prev.experience, new Experience()],
          }));
        }
    
        function updateSkills() {
          setDatahub((prev) => ({
            ...prev,
            skills: [...prev.skills, new Skil()],
          }));
        }

        return { updateEd, updateEx, updateSkills };
    })();


    return { datahub, handleInput, capsule };
}

