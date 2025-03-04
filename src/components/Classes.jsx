class Education{
    constructor(school='', cert='', start='', end=''){
        this.school = school;
        this.cert = cert;
        this.start = start;
        this.end = end;
        this.id = crypto.randomUUID();
    }

    update(field, data){
        return new Education(
            field === 'school' ? data : this.school,
            field === 'cert' ? data : this.cert,
            field === 'start' ? data : this.start,
            field === 'end' ? data : this.end
        );
    }


    getData(){
        return {
            school: this.school,
            cert: this.cert,
            start: this.start,
            end: this.end,
            id: this.id
        };
    }
}

class Experience {
  constructor(org='', role='', accomplishment='') {
    this.org = org;
    this.role = role;
    this.accomplishment = accomplishment;
    this.id = crypto.randomUUID();
  }

  update(field, data) {
    return new Experience(
      field === "org" ? data : this.org,
      field === "role" ? data : this.role,
      field === "accomp" ? data : this.accomplishment
    );
  }

  getData(){
    return {
        org: this.org,
        role: this.role,
        accomp: this.accomplishment,
        id: this.id
    }
  }
  
}

class Skil{
    constructor(skill='', level=''){
        this.skill = skill;
        this.level = level;
        this.id = crypto.randomUUID();
    }

    update(field, data){
        return new Skil(
            field === 'skill' ? data : this.skill,
            field === 'level' ? data : this.level
        )
    }

    getData(){
        return {
            skill: this.skill,
            level: this.level,
            id: this.id
        }
    }
}

export { Education, Experience, Skil };