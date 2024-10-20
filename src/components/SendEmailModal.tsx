import { useState } from "react";

export default function SendEmailModal({
  isOpen,
  onClose,
  recipient,
}: {
  isOpen: boolean;
  onClose?: () => void;
  recipient: string;
}) {
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSend = () => {
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50 ">
      <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg relative">
        <h2 className="text-2xl font-semibold mb-4">Send to: {recipient}</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-32 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:border-black"
            placeholder="Write your message here..."
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleSend}
            className="bg-black text-white py-2 px-6 rounded-lg font-semibold"
          >
            Send
          </button>
          <button
            onClick={onClose}
            className="bg-gray-400 text-white py-2 px-6 rounded-lg font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
