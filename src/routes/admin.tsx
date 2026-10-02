import { useState } from "react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return (
      <main style={{ padding: 30 }}>
        <h1>لوحة التحكم</h1>
        <p>تم تسجيل الدخول بنجاح.</p>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: 320 }}>
        <h1>تسجيل دخول المسؤول</h1>

        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            marginTop: 15,
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={() => {
            if (password === "12891234321346792522005BM") {
              setLoggedIn(true);
            } else {
              alert("كلمة المرور غير صحيحة");
            }
          }}
          style={{
            width: "100%",
            padding: 12,
            marginTop: 12,
          }}
        >
          دخول
        </button>
      </div>
    </main>
  );
}