"use client";

import { usePathname } from "next/navigation";

import PreFooter from "@/app/components/layout/Prefooter/PreFooter";

import type {
  PreFooterSettings,
} from "@/app/types/global";

type PreFooterWrapperProps = {
  settings: PreFooterSettings;
};

export default function PreFooterWrapper({
  settings,
}: PreFooterWrapperProps) {
  const pathname = usePathname();

  const normalizedPath =
    pathname.replace(/\/+$/, "");

  if (normalizedPath === "/contact") {
    return null;
  }

  return (
    <PreFooter
      settings={settings}
    />
  );
}