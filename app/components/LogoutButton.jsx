import React from "react";
import { useRouter } from "next/router";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        throw error;
      }

      // Clear token cookie
      document.cookie = "token=; Max-Age=0; path=/;";

      toast.success("Logout successful");
      router.push("/login"); // Redirect to the login page
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed: " + error.message);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#70afef] hover:bg-[#4295ea] focus:outline-none"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
