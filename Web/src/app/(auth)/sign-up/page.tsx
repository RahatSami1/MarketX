"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../../../store/auth";
import { toast } from "react-hot-toast";
export default function SignUpPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = useAuthStore((state) => state.signup);

  const handleSignUp = async () => {
    try {
      await signup(username, email, password);
      toast.success("Signup successful! Please log in.");
      router.push("/sign-in");
    } catch (error) {
      console.error("Signup failed:", error);
      toast.error("Signup failed. Please check your details.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Logo Section */}
      <div className="bg-gray-200 rounded-b-[300px] flex flex-col items-center justify-center py-10">
        <Image
          src="/logo.png"
          alt="Logo"
          width={300}
          height={300}
          className="mb-4"
        />
      </div>

      {/* Form Section */}
      <div className="flex flex-col flex-1 items-center justify-center px-6 py-10 space-y-6">
        <h2 className="text-2xl font-bold">Create Account</h2>
        <p className="text-gray-400">Start your Trading Journey</p>

        {/* Username */}
        <div className="w-full max-w-sm">
          <label className="block text-sm mb-1">User Name</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full py-3 pl-10 pr-4 bg-gray-900 text-white rounded-xl border border-gray-700 focus:outline-none"
            />
            <span className="absolute left-3 top-3.5 text-gray-500">👤</span>
          </div>
        </div>

        {/* Gmail */}
        <div className="w-full max-w-sm">
          <label className="block text-sm mb-1">Gmail</label>
          <div className="relative">
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 pl-10 pr-4 bg-gray-900 text-white rounded-xl border border-gray-700 focus:outline-none"
            />
            <span className="absolute left-3 top-3.5 text-gray-500">📧</span>
          </div>
        </div>

        {/* Password */}
        <div className="w-full max-w-sm">
          <label className="block text-sm mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 pl-10 pr-10 bg-gray-900 text-white rounded-xl border border-gray-700 focus:outline-none"
            />
            <span className="absolute left-3 top-3.5 text-gray-500">🔑</span>
            <button
              type="button"
              className="absolute right-3 top-3.5 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        {/* Sign Up Button */}
        <button
          onClick={handleSignUp}
          className="w-full max-w-sm py-3 rounded-xl bg-gradient-to-r from-pink-300 to-green-300 text-black font-semibold transition hover:opacity-90"
        >
          Sign Up
        </button>

        {/* Already have an account */}
        <p className="text-sm">
          Already have an account?{" "}
          <span
            className="text-green-400 font-medium cursor-pointer"
            onClick={() => router.push("/sign-in")}
          >
            Login Now
          </span>
        </p>

        {/* Social Login */}
        <div className="flex flex-col items-center pt-4 space-y-3">
          <p className="text-sm text-gray-400">Or continue with</p>
          <div className="flex space-x-4">
            <SocialIcon src="/google-icon.png" alt="Google" />
            <SocialIcon src="/apple-icon.png" alt="Apple" />
            <SocialIcon src="/facebook-icon.png" alt="Facebook" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Social Icon Component
const SocialIcon = ({ src, alt }: { src: string; alt: string }) => (
  <button>
    <Image src={src} alt={alt} width={40} height={40} />
  </button>
);
