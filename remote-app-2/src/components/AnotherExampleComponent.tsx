import React from "react";

interface ComponentProps {
  text: string;
}

const AnotherExampleComponent: React.FC<ComponentProps> = ({ text }) => {
  return (
    <footer
      style={{
        height: "5rem",
        position: "fixed",
        left: "2rem",
        right: "2rem",
        bottom: 0,
        zIndex: 1000,
        background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
        color: "#fff",
        borderRadius: "0.5rem",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.125rem",
        fontWeight: 600,
        letterSpacing: "0.02em",
      }}
    >
      {text} (on App 2)
    </footer>
  );
};

export default AnotherExampleComponent;
