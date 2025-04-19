import React from "react";

const Form = () => {
  return (
    <form className="space-x-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="pb-5">
          <label className="block text-sm text-gray-700 mb-1">Firts Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Last Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
      <div className="pb-5">
        <label className="block text-sm text-gray-700 mb-1">Email</label>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="pb-5">
        <label className="block text-sm text-gray-700 mb-1">Subject</label>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-700 mb-1">Message</label>
        <textarea
          rows="5"
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Leave your message here..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
