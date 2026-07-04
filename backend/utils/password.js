import bcryptjs from "bcryptjs";

const SALT_ROUNDS = 15;

const generatePassword = async (password) => {
  const hashedPassword = await bcryptjs.hash(password, SALT_ROUNDS);
  return hashedPassword;
};

const comparePassword = async (password, hash) => {
  return await bcryptjs.compare(password, hash);
};

export { generatePassword, comparePassword };
