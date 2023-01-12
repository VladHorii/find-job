import { PropsWithChildren } from "react";

export interface LayoutProps extends PropsWithChildren {
  header: React.ReactNode;
  footer: React.ReactNode;
}
