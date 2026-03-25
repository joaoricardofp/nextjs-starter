import AppContent from "@/components/app-content";
import AppHeader from "@/components/app-header";
import AppShell from "@/components/app-shell";
import AppSidebar from "@/components/app-sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell variant="sidebar">
      <AppSidebar />
      <AppContent variant="sidebar">
        <AppHeader />
        {children}
      </AppContent>
    </AppShell>
  );
}
