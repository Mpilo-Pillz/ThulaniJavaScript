const adminUser = {
  id: 18,
  username: "admin",
  password: "admin",
  name: "Admin",
  email: "admin@admin.co.za",
  firstName: "Admin",
  lastName: "Admin",
};

const adminSkillz = {
  adminId: 18,
  skillz: ["JavaScript", "React", "Node"],
  yearsOfExperience: 10,
};

const requestBody = {
  ...adminUser,
};

const adminCompleteProfile = { ...adminSkillz, ...adminUser };

const { password, ...withoutPassword } = adminUser;

console.log(withoutPassword);
console.log("AdminComplete", adminCompleteProfile);
