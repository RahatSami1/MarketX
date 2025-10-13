"use client";

import React from "react";

export default function NotificationPage() {
  const notifications = [
    {
      id: 1,
      title: "New Message",
      message: "You received a new message from John.",
      time: "2h ago",
    },
    {
      id: 2,
      title: "Stock Alert",
      message: "Tesla stock has increased by 5%.",
      time: "4h ago",
    },
    {
      id: 3,
      title: "Appointment Reminder",
      message: "You have a doctor appointment tomorrow at 10 AM.",
      time: "1d ago",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Notifications</h1>
      <div style={styles.list}>
        {notifications.map((notification) => (
          <div key={notification.id} style={styles.card}>
            <h3 style={styles.title}>{notification.title}</h3>
            <p style={styles.message}>{notification.message}</p>
            <span style={styles.time}>{notification.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#000", // Black background
    color: "#fff",
    minHeight: "100vh",
    padding: "2rem",
    fontFamily: "sans-serif",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1.5rem",
  },
  list: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1rem",
  },
  card: {
    backgroundColor: "#1a1a1a",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 2px 8px rgba(255, 255, 255, 0.1)",
  },
  title: {
    margin: 0,
    fontSize: "1.25rem",
    fontWeight: "bold",
  },
  message: {
    margin: "0.5rem 0",
    fontSize: "1rem",
  },
  time: {
    fontSize: "0.85rem",
    color: "#888",
  },
};
