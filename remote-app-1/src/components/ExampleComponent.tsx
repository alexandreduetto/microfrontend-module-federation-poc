import React from "react";
import Button from "frontend-components/Button";
import HeaderContentLayout from "frontend-components/HeaderContentLayout";

interface ComponentProps {
  headerText: string;
  buttonText: string;
  onClick?: () => void;
}

const ExampleComponent: React.FC<ComponentProps> = ({
  headerText,
  buttonText,
  onClick,
}) => {
  return (
    <>
      <HeaderContentLayout
        header={<div>{headerText} (on App 1)</div>}
        sideGutters={false}
      >
        {[...Array(10)].map((_, index) => (
          <p key={Math.random()}>Line {index + 1}</p>
        ))}
      </HeaderContentLayout>

      <div style={{ marginTop: "3rem" }}>
        <Button variant="contained" onClick={onClick}>
          {buttonText} (on App 1)
        </Button>
      </div>
    </>
  );
};

export default ExampleComponent;
