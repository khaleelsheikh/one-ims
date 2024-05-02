"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function add_user(formData) {
  const supabase = createClient();

  // Get form data
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const role = formData.get("role");

  // Basic validation for required fields
  if (!username || !email || !password || !role) {
    // Redirect to error page if any field is empty
    redirect("/error");
    return;
  }

  // Additional validation for email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    // Redirect to error page if email format is invalid
    redirect("/error");
    return;
  }

  // Validate password strength (e.g., minimum length)
  if (password.length < 8) {
    // Redirect to error page if password is too short
    redirect("/error");
    return;
  }

  // Create user data object
  const userData = {
    username,
    email,
    password,
    role,
  };

  const { user, error } = await supabase.auth.signUp(userData);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
