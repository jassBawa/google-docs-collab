import Link from "next/link";
import React from "react";
import DocumentItem from "./DocumentItem";

interface Props {}

const DocumentsList: React.FC<Props> = ({}) => {
  return (
    <section className="max-w-6xl mx-auto mt-8">
      <h3 className="text-xl font-semibold">Document list</h3>
      <div className="document__list bg-slate-100 mt-4 grid grid-cols-1 divide-y divide-gray-200 gap-4">
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
      </div>
    </section>
  );
};

export default DocumentsList;
