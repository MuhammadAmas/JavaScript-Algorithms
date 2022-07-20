function Person(name, dob){
    this.name = name;
    this.birthDay = new Date(dob);
    this.calculateAge = function(){
        const difference = Date.now() - this.birthDay.getTime();
        const ageDate = new Date(difference);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
}

const amas = new Person('Amas', '7-15-2002');
console.log(amas.calculateAge());