import { SidebarInset } from "./ui/sidebar";

type AppContentProsp = React.ComponentProps<"main"> & {
  variant: "header" | "sidebar";
};

export default function AppContent({ variant = "header", children, ...props }: AppContentProsp) {
  if (variant === "sidebar") {
    return <SidebarInset {...props}>{children}</SidebarInset>;
  }

  return (
    <main
      className="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl"
      {...props}
    >
      {children}
    </main>
  );
}
