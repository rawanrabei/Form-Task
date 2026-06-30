import React, { useState } from "react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    console.log("Register:", name, email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-80 flex flex-col gap-1"
        noValidate
      >
        <h2 className="text-2xl text-blue-900 font-bold text-center mb-4">
          Register
        </h2>

        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded p-2"
        />
        <p className="text-red-500 text-sm h-5">{errors.name || ""}</p>

        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded p-2"
        />
        <p className="text-red-500 text-sm h-5">{errors.email || ""}</p>

        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded p-2"
        />
        <p className="text-red-500 text-sm h-5">{errors.password || ""}</p>

        <label className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full border rounded p-2"
        />
        <p className="text-red-500 text-sm h-5">
          {errors.confirmPassword || ""}
        </p>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mt-2"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
