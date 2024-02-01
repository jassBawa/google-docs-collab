import React from "react";
import Button from "../UI/Button";

interface Props {}

const CreateDocument: React.FC<Props> = ({}) => {
  return (
    <section className="bg-[#f2f3f4]  mx-auto px-12 py-12">
      <Button>Creata document </Button>
    </section>
  );
};

export default CreateDocument;
