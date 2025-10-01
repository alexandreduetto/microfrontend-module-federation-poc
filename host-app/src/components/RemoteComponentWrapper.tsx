import React, { Suspense } from "react";

const RemoteHeader = React.lazy(() => import("remote_app_2/Header"));
const RemoteButton = React.lazy(() => import("remote_app_1/Button"));

export const RemoteComponentWrapper = () => {
  return (
    <div>
      <Suspense fallback="Loading header...">
        <RemoteHeader text="Remote Header" />
      </Suspense>

      <div style={{ marginTop: "5rem" }}>
        <Suspense fallback="Loading button...">
          <RemoteButton
            text="Remote Button"
            onClick={() => alert("Remote button triggered")}
          />
        </Suspense>
      </div>
    </div>
  );
};
