let person={
  female:{
    Name: "Marie",
    Lastname: "Curie",
    Inventions: {
      first: "Theory of Radioactivity",
      second: "Radium",
      third: "Polonium" 
      }
  },
  male:{
    Name: "Thomas",
    Surname: "Edison",
    Inventions: {
      first: "Electronic lightbulb",
      second: "Motion picture camera"
      }
  }

}

for (let gender in person) {
        console.log(gender);
    for (let pavadinimai in person[gender]){
        if (typeof person[gender][pavadinimai]!="object") {
            console.log(pavadinimai + ":" + person[gender][pavadinimai]);
        }
        else {
          console.log(pavadinimai + ":")
            for(let isradimai in person[gender][pavadinimai]){
                console.log(isradimai + ":" + person[gender][pavadinimai][isradimai]);
                }
            }
        }
}
