import React, { Suspense } from "react";
import { ErrorBoundary } from "./ErrorBoundary";

const RemoteHeader = React.lazy(() => import("remote_app_2/Header"));
const RemoteButton = React.lazy(() => import("remote_app_1/Button"));

export const RemoteComponentWrapper = () => {
  return (
    <div>
      <ErrorBoundary componentName="Remote Header (remote-app-2)">
        <Suspense fallback="Loading header...">
          <RemoteHeader text="Remote Header" />
        </Suspense>
      </ErrorBoundary>

      <div style={{ marginTop: "5rem" }}>
        <ErrorBoundary componentName="Remote Button (remote-app-1)">
          <Suspense fallback="Loading button...">
            <RemoteButton
              text="Remote Button"
              onClick={() => alert("Remote button triggered")}
            />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
