import { useState } from "react";
import styles from "../styles/LaunchPartyForm.module.css";

export default function LaunchPartyForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", profession: "" });
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  function update(field) {
    return (e) => setForm({ ...form, [field]: e.target.value });
  }

  function validate() {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return "A valid email is required";
    }
    const phone = form.phone.replace(/[\s\-]/g, "");
    if (!/^(0\d{9}|\+\d{7,15})$/.test(phone)) {
      return "Enter a valid phone number (10 digits starting with 0, or +country code)";
    }
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const error = validate();
    if (error) {
      setStatus("error");
      setMessage(error);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/launch-party", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong");
        return;
      }

      setStatus("success");
      setMessage("You're registered. See you there!");
      setForm({ name: "", phone: "", email: "", profession: "" });
    } catch {
      setStatus("error");
      setMessage("Something went wrong");
    }
  }

  const disabled = status === "loading";

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {status === "success" ? (
        <p className={styles.success}>{message}</p>
      ) : (
        <>
          <div className={styles.field}>
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={update("name")}
              required
              className={styles.input}
              disabled={disabled}
            />
          </div>
          <div className={styles.field}>
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={update("email")}
              required
              className={styles.input}
              disabled={disabled}
            />
          </div>
          <div className={styles.field}>
            <input
              type="tel"
              placeholder="Phone"
              value={form.phone}
              onChange={update("phone")}
              required
              className={styles.input}
              disabled={disabled}
            />
          </div>
          <div className={styles.field}>
            <input
              type="text"
              placeholder="Profession"
              value={form.profession}
              onChange={update("profession")}
              required
              className={styles.input}
              disabled={disabled}
            />
          </div>
          <button
            type="submit"
            className={styles.button}
            disabled={disabled}
          >
            {disabled ? "..." : "Register Now"}
          </button>
          {status === "error" && (
            <p className={styles.error}>{message}</p>
          )}
        </>
      )}
    </form>
  );
}
