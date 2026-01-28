class Click {
  // no polymorphism here
  locator;

  click() {
    console.log(`findByid ${this.locator}`);
    console.log(`dot click ${this.locator}`);
  }
}

const loginButton = new Click();
loginButton.locator = "loginBtn";
loginButton.click();

const buyButton = new Click();
buyButton.locator = "buyBtn";
buyButton.click();

const socialSignIn = new Click();
socialSignIn.locator = "socialSignInBtn";
socialSignIn.click();

class TypeText {
  locator;

  type(text) {
    console.log(`findByid ${this.locator}`);
    console.log(`dot type ${text} into ${this.locator}`);
  }

  type(text, clickToSelectCountCode, addiontalLcator) {
    console.log(`findByid dropdown ${addiontalLcator}`);
    console.log(
      `dot clic to select country code ${text} into ${clickToSelectCountCode}`,
    );
    console.log(`findByid text ${this.locator}`);
    console.log(`dot type ${text} into ${this.locator}`);
  }

  type(text, clickToSelectCountCode) {
    console.log(`findByid dropdown ${this.locator}`);
    console.log(
      `dot clic to select country code ${text} into ${clickToSelectCountCode}`,
    );
    console.log(`findByid text ${this.locator}`);
    console.log(`dot type ${text} into ${this.locator}`);
  }
}

class AssertText {
  locator;

  assert(expectedText, actualText) {
    console.log("Actual text should match expected text");
  }

  assert(expectedText) {
    console.log("Expected text should be visible");
  }
}

const usernameField = new TypeText();
usernameField.locator = "usernameInput";
usernameField.type("myUsername");

const passwordField = new TypeText();
passwordField.locator = "passwordInput";
passwordField.type("myPassword");

const emailField = new TypeText();
emailField.locator = "emailInput";
emailField.type("myEmail");

const phoneNumberWithDropDown = new TypeText();
phoneNumberWithDropDown.locator = "phoneNumberInput";
phoneNumberWithDropDown.type(
  "1234567890",
  "countryCodeDropdown",
  "countryCodeDropdown",
);

class tap extends Click {}
