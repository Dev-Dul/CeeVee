class Education{
    constructor(){
        this.store = new Array(4);
    }

    update(data){
        this.store.push(data);
    }


    getData(){
        return [{
            school: this.school,
            cert: this.cert,
            start: this.start,
            end: this.end,
        }];
    }
}

class Experience{
    constructor(){
        this.org = '';
        this.role = '';
        this.accomplishment = '';
    }

    updateOrg(org){
        this.org = org;
    }

    updateRole(role){
        this.role = role;
    }

    updateAccomp(accomp){
        this.accomplishment = accomp;
    }
}

class Skil{
    constructor(){
        this.skill = '';
        this.level = '';
    }

    updateSkill(skill){
        this.skill = skill;
    }

    updateLevel(lvl){
        this.level = lvl;
    }
}

export { Education, Experience, Skil };