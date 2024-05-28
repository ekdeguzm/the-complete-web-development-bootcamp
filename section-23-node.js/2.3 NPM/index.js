// var generateName = require("sillyname");

import generateName from "sillyname";
import superheroes from "superheroes";
import { randomSuperhero } from "superheroes";

var sillyName = generateName();

var superheroName = randomSuperhero();

console.log(`My name is ${sillyName}.`);
console.log(`I am the superhero ${superheroName}`);
