import { useState } from "react";
import { SiteHeader } from "./sideHeader";
import { Outlet } from "@tanstack/react-router";

export const SiteLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};
