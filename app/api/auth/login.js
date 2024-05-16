// pages/api/auth/login.js

import { sign } from "jsonwebtoken";
import { setTokenCookie } from "@/utils/auth";
import { supabase } from "@/services/supabaseClient";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { id, password } = req.body;

  try {
    const { id, error } = await supabase.auth.signIn({
      id,
      password,
    });

    if (error || !user) {
      return res.status(401).json({ message: "Invalid id or password" });
    }

    // Generate JWT token for the authenticated user
    const token = sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d", // Token expires in 1 day
    });

    // Set the token in a cookie
    setTokenCookie(res, token);

    res.status(200).json({ token });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
