import React, { Suspense } from "react";
import { ErrorBoundary } from "./ErrorBoundary";

const RemoteExampleComponent = React.lazy(
  () => import("remote_app_1/ExampleComponent")
);
const RemoteAnotherExampleComponent = React.lazy(
  () => import("remote_app_2/AnotherExampleComponent")
);

export const RemoteComponentWrapper = () => {
  return (
    <div style={{ marginBottom: "7rem" }}>
      <div style={{ margin: "3rem 2rem" }}>
        <ErrorBoundary componentName="Remote Header (remote-app-1)">
          <Suspense fallback="Loading header...">
            <RemoteExampleComponent
              headerText="Remote Header and Content"
              buttonText="Remote Button"
            />
          </Suspense>
        </ErrorBoundary>
      </div>

      <div style={{ margin: "3rem 2rem" }}>
        <ErrorBoundary componentName="Remote Footer (remote-app-2)">
          <Suspense fallback="Loading button...">
            <RemoteAnotherExampleComponent text="Remote Footer" />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
