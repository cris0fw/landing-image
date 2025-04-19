import React from "react";
import Form from "./Form";

const FormOverlay = () => {
  return (
    <div
      className="min-h-[800px] bg-cover relative"
      style={{
        backgroundImage:
          'linear-gradient(0deg, rgba(66,133,244, 0.7), rgba(66,133,244, 0.7)), url("/imageBlog2.webp")',
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* OVERLAY */}
      <div className="relative z-10 flex flex-col items-center justify-evenly min-h-[800px] px-4">
        <h1 className="text-center text-3xl font-bold text-white">
          Contact Form
        </h1>
        {/* Ancho del formulario */}
        <div className="bg-white rounded-lg shadow-lg w-full max-w-xl px-8 py-14 lg:py-3">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Contact Form
          </h2>

          {/* FORMULARIO */}
          <Form />
        </div>
      </div>
    </div>
  );
};

export default FormOverlay;
