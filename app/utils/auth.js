import { serialize, parse } from "cookie";

export const setTokenCookie = (res, token) => {
  const cookie = serialize("token", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24, // 1 day
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  res.setHeader("Set-Cookie", cookie);
};

export const removeTokenCookie = (res) => {
  const cookie = serialize("token", "", {
    httpOnly: true,
    expires: new Date(0),
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  res.setHeader("Set-Cookie", cookie);
};

export const getTokenCookie = (req) => {
  const cookies = parse(req.headers.cookie || "");
  return cookies.token;
};
