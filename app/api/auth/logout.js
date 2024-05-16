// pages/api/auth/logout.js

import { removeTokenCookie } from "@/utils/auth";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // Clear the token cookie
  removeTokenCookie(res);

  res.status(200).json({ message: "Logout successful" });
}
