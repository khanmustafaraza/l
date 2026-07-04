import jwt from "jsonwebtoken";

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_KEY, {
    expiresIn: "7d",
  });
};

const generateRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_REFRESH_KEY, {
    expiresIn: "30d",
  });
};

const decodeToken = (token) => {
  return jwt.verify(token, process.env.JWT_KEY);
};

export { generateToken, generateRefreshToken, decodeToken };
