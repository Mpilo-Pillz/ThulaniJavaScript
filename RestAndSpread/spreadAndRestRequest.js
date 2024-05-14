const adminUser = {
  username: "admin",
  password: "admin",
  name: "Admin",
  email: "admin@admin.co.za",
  firstName: "Admin",
  lastName: "Admin",
};

const requestBody = {
  ...adminUser,
};

const { password, ...withoutPassword } = adminUser;

console.log(withoutPassword);
