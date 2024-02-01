"use client";
import React, { useState } from "react";
import Modal from "../UI/Modal";

const CreateDocumentModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [title, setTitle] = useState("");

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleChange = (e) => setTitle(e.target.value);

  const handleSubmit = async () => {
    const response = await fetch("https://dummyapi.com/new-document", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    const data = await response.json();
    console.log(data);

    setTitle("");
    handleClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      header={<h2>Create New Document</h2>}
      body={
        <input
          type="text"
          value={title}
          onChange={handleChange}
          placeholder="Enter document title"
          className="border p-2 w-full"
        />
      }
      footer={
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create
        </button>
      }
    />
  );
};
export default CreateDocumentModal;
