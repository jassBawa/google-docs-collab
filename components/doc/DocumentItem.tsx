import Link from "next/link";

const DocumentItem = ({}) => {
  return (
    <Link
      href={"/doc"}
      className="document__item px-4 py-2 justify-center grid grid-cols-6 items-center gap-4"
    >
      <p className="col-span-3 text-lg font-medium">Title</p>
      <p className="text-gray-500">Richa Roarah</p>
      <p className="text-gray-500">Jan 25, 2024</p>
      <p className="options text-gray-500 cursor-pointer">...</p>
    </Link>
  );
};

export default DocumentItem;
