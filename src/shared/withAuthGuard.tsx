import { ComponentType } from "react";
import { useRouter } from "next/dist/client/router";
import { getToken } from "src/shared/utils";

export function withAuthGuard<T>(WrappedComponent: ComponentType<T>) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithAuthGuard = (props: T) => {
    const router = useRouter();
    const { token } = getToken();

    // redirect to login page in CSR mode
    if (typeof window !== "undefined" && !token) {
      router.replace("/login");
    }

    if (token) {
      return <WrappedComponent {...props} />;
    }
    return null;
  };

  ComponentWithAuthGuard.displayName = `withAuthGuard(${displayName})`;

  return ComponentWithAuthGuard;
}
