const statusButton = document.querySelector("button"); //Show pet status button
const pets = document.querySelector(".all-pets"); //empty <ul> in html file

//create a factory function w/ 2 parameters and an object literal
const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5, // Scale from 1 (refreshed) to 10 (exhausted)
    sleep: function () {
      this.isTired = 1;
      return `${this.name} needs a nap. Zzz...`;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play.");
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

//console.log(sora, clover, baxter, cleo, francine);

//below we call the methods (sleep for clover & play for baxter)
//clover.sleep();
//baxter.play();

//using console log for multiple objects
//console.log(clover, baxter);

//changing isTired values for clover and francine
clover.isTired = 8;
francine.isTired = 9;

//create an array with all pets
const allPetsArray = [sora, clover, baxter, cleo, francine];
//console.log(allPetsArray);

//Create a function called showPets to display the pet status
//Use pet array as an argument.
const showPets = function (petArray) {
  //here we empty the list
  pets.innerHTML = "";
  for (let pet of petArray) {
    let status = "ready to play!";
    if (pet.isTired >= 7) {
      status = "sleeping";
    }
    let li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}.`;
    //below we attach or save the value of li inside <li>
    pets.append(li);
  }
};

//add event listener
statusButton.addEventListener("click", function () {
  showPets(allPetsArray);
});
