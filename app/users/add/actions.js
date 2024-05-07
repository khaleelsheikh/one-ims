"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function add_user(formData) {
  const supabase = createClient();

  // Get form data
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("cpassword"); // Get confirm password

  // Basic validation for required fields
  if (!username || !email || !password || !confirmPassword) {
    redirect("/error");
    return;
  }

  // Additional validation for email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    redirect("/error");
    return;
    // NextResponse.json({
    //   status: "error",
    //   message: "Invalid Email Address",
    // });
  }

  // Validate password strength (e.g., minimum length)
  if (password.length < 8) {
    redirect("/error");
    return;
    // NextResponse.json({
    //   status: "error",
    //   message: "Password is less than 8 characters",
    // });
  }

  // Validate that password and confirm password match
  if (password !== confirmPassword) {
    redirect("/error");
    return;
    // NextResponse.json({
    //   status: "error",
    //   message: "Password and confirm password do not match",
    // });
  }

  // Map role value to specific strings
  let userRole;
  if (role === "1") {
    userRole = "administrator";
  } else if (role === "2") {
    userRole = "accountant";
  } else if (role === "3") {
    userRole = "salesman";
  } else {
    redirect("/error");
    return;
  }

  // Create user data object with mapped role
  const userData = {
    username,
    email,
    password,
    role: userRole, // Save mapped role
  };

  // Sign up user with Supabase
  const { user, error } = await supabase.auth.signUp(userData);

  if (error) {
    redirect("/error");
    return;
  }

  revalidatePath("/", "layout");
  // Redirect to home page on successful sign up
  redirect("/");
}
