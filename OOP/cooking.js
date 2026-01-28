// the whole point of this is to help people create cooking utentsils
// Cooking stygg need to follow a standard
// must with stand high heat
// mut be abale to hold food

class CookingUtensil {
  maxiumCookingTmep = 100;
  size = 30;
  material = "metal";

  cook(food) {
    console.log(`${food} is boiled until ready`);
  }
}

class ThreeLeggedPot extends CookingUtensil {
  maxiumCookingTmep = 1000; //overide
  material = " strongermetal"; // override
}

class fryinPan extends CookingUtensil {
  cook(food, oil) {
    console.log(`${food} is fried until crispy, using ${oil}`); // override the function
  }
  // overload the function
  cook(food, oil, hasLid) {
    if (hasLid) {
      console.log(`${food} is stirfried wit a lid, using ${oil}`);
    } else {
      console.log(`${food} is fried until crispy, using ${oil}`);
    }
  }
}

// class fryingPan

const pot = new CookingUtensil();
const threeLeggedPot = new ThreeLeggedPot();
const fryingPan = new fryinPan();
const stirFryPan = new fryinPan();

pot.cook("noodles");
threeLeggedPot.cook("poijies", "water");
fryingPan.cook("eggs", "olive oil");
stirFryPan.cook("vegetables", "sesame oil", true);
