"use client";

import { useAuthStore } from "../../../store/auth";
import { useRouter } from "next/navigation";

export default function Profile() {
  const username = useAuthStore((s) => s.username);
  const logout = useAuthStore((s) => s.logout);
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  const handleRedirectToHome = () => {
    router.push("/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {username ? (
          <>
            <h1 style={styles.title}>Welcome</h1>
            <p style={styles.username}>{username}</p>
            <button onClick={handleLogout} style={styles.logoutButton}>
              Logout
            </button>
          </>
        ) : (
          <>
            <h1 style={styles.title}>You are not logged in</h1>
            <div style={styles.buttonGroup}>
              <button
                style={{ ...styles.authButton, backgroundColor: "#4CAF50" }}
                onClick={handleRedirectToHome}
              >
                Login
              </button>
              <button
                style={{ ...styles.authButton, backgroundColor: "#2196F3" }}
                onClick={handleRedirectToHome}
              >
                Sign Up
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#000", // Match your black theme
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#1a1a1a",
    padding: 40,
    borderRadius: 12,
    boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
    textAlign: "center",
    maxWidth: 400,
    width: "100%",
  },
  title: {
    color: "#bbb",
    fontSize: 22,
    marginBottom: 12,
  },
  username: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 30,
  },
  logoutButton: {
    backgroundColor: "#ff3b30",
    border: "none",
    color: "#fff",
    padding: "12px 30px",
    borderRadius: 8,
    fontSize: 16,
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonGroup: {
    display: "flex",
    gap: 16,
    justifyContent: "center",
    marginTop: 20,
  },
  authButton: {
    border: "none",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: 8,
    fontSize: 16,
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};
