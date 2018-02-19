var amazingCars = [ "BMW", "Lexus", "Ford", "Mercedes" ];

amazingCars.push("Mclaren");

var awesomeBirds = [ "Bluebird", "Roadrunner", "Desert Dove", "Pigeon" ];

awesomeBirds.pop();
awesomeBirds.sort();

alert(awesomeBirds.length);

for (var i = 0; i < awesomeBirds.length; i++) {
  if (awesomeBirds[i] === "Bluebird") {
    alert("Bluebirds are so beautiful");
  }else {
    alert("Not as beautiful as Bluebirds");
  }
}
