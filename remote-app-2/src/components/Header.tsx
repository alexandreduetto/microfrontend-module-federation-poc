import React from "react";
import HeaderContentLayout from "frontend-components/HeaderContentLayout";

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <div style={{ height: "20vh" }}>
      <HeaderContentLayout
        header={<div>{text} (on App 2)</div>}
        sideGutters={true}
      >
        {[...Array(20)].map((_, index) => (
          <p key={Math.random()}>Line {index + 1}</p>
        ))}
      </HeaderContentLayout>
    </div>
  );
};

export default Header;
