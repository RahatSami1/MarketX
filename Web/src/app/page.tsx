"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuthStore } from "../store/auth";
export default function WelcomePage() {
  const router = useRouter();
  const { accessToken, loadTokens } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      await loadTokens();
      setIsLoading(false);
    };

    initAuth();
  }, []);

  useEffect(() => {
    if (!isLoading && accessToken) {
      router.replace("/home");
    }
  }, [isLoading, accessToken, router]);

  if (isLoading) return null; // Or replace with <SplashScreen />

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Top Logo Section */}
      <div className="bg-gray-200 rounded-b-[100px] flex flex-col items-center justify-center py-12 md:py-16">
        <Image
          src="/logo.png"
          alt="Logo"
          width={300}
          height={300}
          className="mb-4"
        />
      </div>

      {/* Middle Content Section */}
      <div className="flex flex-col items-center justify-center px-4 py-8 flex-1 space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Welcome!
        </h2>

        {/* Sign Up */}
        <button
          onClick={() => router.push("/sign-up")}
          className="w-full max-w-xs py-3 rounded-xl bg-gradient-to-r from-pink-300 to-green-300 text-black font-semibold transition hover:opacity-90"
        >
          Sign up
        </button>

        {/* Sign In */}
        <button
          onClick={() => router.push("/sign-in")}
          className="w-full max-w-xs py-3 rounded-xl border border-white text-white font-semibold transition hover:bg-white hover:text-black"
        >
          Sign in
        </button>

        {/* Social Login */}
        <div className="flex flex-col items-center space-y-3 pt-4">
          <p className="text-sm text-gray-400">Or continue with</p>
          <div className="flex space-x-4">
            <SocialIcon src="/google-icon.png" alt="Google" />
            <SocialIcon src="/apple-icon.png" alt="Apple" />
            <SocialIcon src="/facebook-icon.png" alt="Facebook" />
          </div>
        </div>

        {/* Skip */}
        <button
          onClick={() => router.push("/home")}
          className="text-sm text-gray-400 underline pt-6"
        >
          Skip it later
        </button>
      </div>
    </div>
  );
}

// Reusable Social Icon
const SocialIcon = ({ src, alt }: { src: string; alt: string }) => (
  <button>
    <Image src={src} alt={alt} width={40} height={40} />
  </button>
);
