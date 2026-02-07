"use client";

import { useState } from "react";

const BLOCKED_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "icloud.com",
];

const MIN_REASON = 20;

export default function Page() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [emailError, setEmailError] = useState("");
  const [done, setDone] = useState(false);

  const reasonLen = reason.length;
  const reasonOk = reasonLen >= MIN_REASON;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmailError("");

    const trimmed = email.trim();
    if (!trimmed) {
      setEmailError("Business emails only.");
      return;
    }
    const parts = trimmed.split("@");
    const domain = parts.length === 2 ? parts[1].toLowerCase() : "";
    if (domain && BLOCKED_DOMAINS.includes(domain)) {
      setEmailError("Business emails only.");
      return;
    }
    if (!reasonOk) return;

    setDone(true);
  }

  if (done) {
    return (
      <main
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#f3f4f6" }}
      >
        <div className="bg-white rounded-lg shadow-md px-8 py-10 w-full max-w-md text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Internal Tools Access
          </h1>
          <p className="text-gray-700">You have been added to the queue.</p>
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#f3f4f6" }}
    >
      <div className="bg-white rounded-lg shadow-md px-8 py-10 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Internal Tools Access
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <input
              type="email"
              placeholder="Work email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            />
            {emailError && (
              <p className="mt-1 text-sm text-red-600">{emailError}</p>
            )}
          </div>

          <div>
            <textarea
              placeholder="Why do you need access?"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent resize-none"
            />
            <p
              className={`mt-1 text-sm ${
                reasonLen > 0 && !reasonOk ? "text-red-600" : "text-gray-500"
              }`}
            >
              {reasonLen}/{MIN_REASON} characters
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Request Access Token
          </button>
        </form>
      </div>
    </main>
  );
}
