import jwt from "jsonwebtoken";

export const signJwt = (payload: object): string => {
  return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "1d" });
};

export const verifyJwt = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET!);
};
