"use client";

import Document from "@/components/Document";
import { use } from "react";

function DocumentPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  // The props come from: The URL segment [id] in your file path (app/doc/[id]/page.tsx) ... In Next.js 13+ (App Router), for a dynamic route like app/doc/[id]/page.tsx, the page component automatically receives props that include the dynamic parameters from the URL.

  const { id } = use(params); // Unwrap the params promise

  return <div className="flex flex-col flex-1 min-h-screen">
    <Document id={id} />
  </div>;
}
export default DocumentPage;
