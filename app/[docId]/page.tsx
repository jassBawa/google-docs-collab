"use client";
import TextEditor from "@/components/doc/TextEditor";
import { useParams } from "next/navigation";

export default function DocPage() {
  const params = useParams<{ docId: string }>();
  console.log(params);

  return (
    <main className="h-full bg-slate-100 overflow-auto pb-12">
      <TextEditor documentId={params.docId} />
    </main>
  );
}
