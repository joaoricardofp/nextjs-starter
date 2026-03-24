import { SidebarProvider } from "./ui/sidebar";

type Props = React.ComponentProps<"div"> & {
  children: React.ReactNode;
  variant: "header" | "sidebar";
};

export default function AppShell({ children, variant = "header", ...props }: Props) {
  if (variant === "header") {
    return (
      <div className="w-full min-h-screen flex flex-col" {...props}>
        {children}
      </div>
    );
  }

  return <SidebarProvider {...props}>{children}</SidebarProvider>;
}
