"use client";

import { useState } from "react";

export default function QuotePage() {
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const formEl = e.currentTarget; // ✅ keep a stable reference

  setLoading(true);
  setMsg("");

  const form = new FormData(formEl);

  const payload = {
    name: String(form.get("name") || ""),
    email: String(form.get("email") || ""),
    phone: String(form.get("phone") || ""),
    location: String(form.get("location") || ""),
    projectType: String(form.get("projectType") || ""),
    message: String(form.get("message") || ""),
  };

  try {
    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    let data: any = {};
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      data = {};
    }

    if (!res.ok || data.ok === false) {
      throw new Error(data.error || `Request failed (${res.status})`);
    }

    setMsg("✅ Your request has been sent successfully.");
    formEl.reset(); // ✅ use saved reference
  } catch (err: any) {
    setMsg(`❌ ${err.message || "Failed to send"}`);
  } finally {
    setLoading(false);
  }
}

    return (
        <main style={{ padding: 20, maxWidth: 700, margin: "0 auto" }}>
            <h1 style={{ fontSize: 32, marginBottom: 10 }}>Get a Quote</h1>

            <p style={{ color: "var(--text-muted)", marginBottom: 24 }}>
                Tell us about your project and we’ll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 14 }}>
                <input
                    name="name"
                    placeholder="Full Name *"
                    required
                    style={inputStyle}
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Email Address *"
                    required
                    style={inputStyle}
                />

                <input
                    name="phone"
                    placeholder="Phone Number"
                    style={inputStyle}
                />

                <input
                    name="location"
                    placeholder="Project Location"
                    style={inputStyle}
                />

                <select name="projectType" defaultValue="" style={inputStyle}>
                    <option value="" disabled>
                        Project Type
                    </option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Renovation">Renovation</option>
                    <option value="Fit-out">Fit-out</option>
                </select>

                <textarea
                    name="message"
                    placeholder="Briefly describe your project *"
                    rows={4}
                    required
                    style={inputStyle}
                />

                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        padding: "14px",
                        borderRadius: 12,
                        border: "1px solid var(--brand-blue)",
                        background: "var(--brand-blue)",
                        color: "white",
                        fontWeight: 700,
                        cursor: loading ? "not-allowed" : "pointer",
                    }}
                >
                    {loading ? "Sending..." : "Submit Request →"}
                </button>

                {msg && (
                    <div style={{ fontWeight: 600 }}>
                        {msg}
                    </div>
                )}
            </form>
        </main>
    );
}

const inputStyle: React.CSSProperties = {
    padding: 12,
    borderRadius: 10,
    border: "1px solid var(--border)",
    background: "var(--card)",
    fontSize: 14,
};