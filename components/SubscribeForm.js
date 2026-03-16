import { useState } from "react";
import styles from "../styles/SubscribeForm.module.css";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong");
        return;
      }

      setStatus("success");
      setMessage("You're in. Welcome aboard.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {status === "success" ? (
        <p className={styles.success}>{message}</p>
      ) : (
        <>
          <div className={styles.inputRow}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
              disabled={status === "loading"}
            />
            <button
              type="submit"
              className={styles.button}
              disabled={status === "loading"}
            >
              {status === "loading" ? "..." : "Subscribe"}
            </button>
          </div>
          {status === "error" && (
            <p className={styles.error}>{message}</p>
          )}
        </>
      )}
    </form>
  );
}
