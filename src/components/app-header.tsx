"use client";

import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

export default function AppHeader() {
  const pathname = usePathname();
  const breadcrumbs = generateBreadcrumbs(pathname);

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />

        <Separator orientation="vertical" className="mr-2" />

        {breadcrumbs.length > 0 && (
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((breadcrumb, index) => (
                <BreadcrumbItem key={index}>
                  {breadcrumb.isLast ? (
                    <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                  ) : (
                    <>
                      <BreadcrumbLink href={breadcrumb.href ?? "#"}>
                        {breadcrumb.label}
                      </BreadcrumbLink>
                      <BreadcrumbSeparator className="hidden md:block" />
                    </>
                  )}
                </BreadcrumbItem>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        )}
      </div>
    </header>
  );
}

function generateBreadcrumbs(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);

  return segments.map((segment, idenx) => {
    const href = `/${segments.slice(0, idenx + 1).join("/")}`;

    return {
      label: decodeURIComponent(segment)
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase()),
      href,
      isLast: idenx === segments.length - 1,
    };
  });
}
