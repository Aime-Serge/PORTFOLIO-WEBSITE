"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState("");

  function checkStrength(pw: string) {
    if (!pw) return "";
    if (pw.length < 6) return "Weak";
    if (pw.match(/[A-Z]/) && pw.match(/[0-9]/) && pw.match(/[^a-zA-Z0-9]/)) {
      return "Strong";
    }
    return "Medium";
  }

  function handlePasswordChange(value: string) {
    setPassword(value);
    setStrength(checkStrength(value));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      window.location.href = "/admin";
    } else {
      const data = await res.json();
      setError(data.error || "Login failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-80"
      >
        <h1 className="text-lg font-bold mb-4 text-center">Admin Login</h1>

        {/* Password Input with Toggle */}
        <div className="relative mb-2">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            className="w-full p-2 pr-10 border rounded"
            placeholder="Password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Password Strength Feedback */}
        {strength && (
          <p
            className={`text-sm mb-2 ${
              strength === "Weak"
                ? "text-red-500"
                : strength === "Medium"
                ? "text-yellow-600"
                : "text-green-600"
            }`}
          >
            Strength: {strength}
          </p>
        )}

        {/* Error Feedback */}
        {error && (
          <p className="text-red-500 text-sm mb-2 text-center">{error}</p>
        )}

        {/* Submit */}
        <a>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
        </a>
      </form>
    </div>
  );
}
