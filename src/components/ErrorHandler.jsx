function validateFirst(tiTan){
    if(tiTan.name === '' || tiTan.position === '' || tiTan.email === '' || tiTan.phone === ''){
        return 'All Fields are required.';
    }
    return null;
}

function validateSecond(tiTan){
    if(tiTan.summary === ''){
        return "A Summary adds more weight to your CV. Its advisable you provide one.";
    }
    return null;
}

function validateThird(datahub){
    const third = datahub.education;
    const check = third.some((el) => el.isEmpty());
    return check ? "Education fields are crucial. They can't be empty." : null; 
}

function validateFourth(datahub){
    const third = datahub.experience;
    const check = third.some((el) => el.isEmpty());
    return check ? "Your experience matters. Flaunt it." : null;
}

function validateFifth(datahub){
    const third = datahub.skills;
    const check = third.some((el) => el.isEmpty());
    return check ? "Your skills might be what convince the employer. Don't leave them out." : null;

}


function Validate(name, tiTan, datahub){
    switch(name){
        case "first": return validateFirst(tiTan);
        case "second": return validateSecond(tiTan);
        case "third": return validateThird(datahub);
        case "fourth": return validateFourth(datahub);
        case "fifth": return validateFifth(datahub);
        default: return null;
    }
    
}

export default Validate;