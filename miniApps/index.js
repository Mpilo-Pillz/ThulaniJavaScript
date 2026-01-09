function isOlderThan18(idNumber) {
  if (!/^\d{13}$/.test(idNumber)) {
    throw new Error("Invalid SA ID number");
  }

  const yy = parseInt(idNumber.substring(0, 2), 10);
  const mm = parseInt(idNumber.substring(2, 4), 10) - 1; // JS months are 0-based
  const dd = parseInt(idNumber.substring(4, 6), 10);

  const currentYear = new Date().getFullYear();
  const currentYY = currentYear % 100;

  //   const fullYear = yy > currentYY ? 1900 + yy : 2000 + yy;
  let fullYear;

  debugger;
  if (yy > currentYY) {
    fullYear = 1900 + yy;
  } else {
    debugger;
    fullYear = 2000 + yy;
  }

  const birthDate = new Date(fullYear, mm, dd);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  return age >= 18;
}

isOlderThan18("9901015009087"); // true
isOlderThan18("0801015009087"); // false
