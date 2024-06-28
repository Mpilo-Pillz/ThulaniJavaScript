let userName = "Thulani";

greetUser(); // Hi Thulani
function greetUser() {
  console.log("Hi ", userName);
}

userName = "Bophelo";
greetUser(); // Hi Bophelo

function greetUserWithLexicalScope() {
  let name = userName;
  console.log("Hi ", name);
}

greetUserWithLexicalScope(); // Hi Bophelo not Hi Thulani

function greetUserWithShadowing() {
  let name = "Botshelo";
  console.log("Hi ", name);
}

let name = "Ginindza";
greetUserWithShadowing(); // Hi Botshelo
