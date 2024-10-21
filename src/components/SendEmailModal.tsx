import { useAuth } from "@/context/AuthProvider";
import { Instructor } from "@/models/CourseProps";
import { useState } from "react";

type Email = {
  from_name: string;
  to_email: string;
  header: string;
  body: string;
};

export async function sendEmail(email: Email) {
  try {
    const response = await fetch(
      "http://localhost:8080/api/v1/instructors/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(email),
      }
    );

    if (!response.ok) {
      throw new Error("can't send email");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export default function SendEmailModal({
  isOpen,
  onClose,
  instructors,
}: {
  isOpen: boolean;
  onClose: () => void;
  instructors: Instructor[];
}) {
  const [headerMessage, setHeaderMessage] = useState("");
  const [message, setMessage] = useState("");
  const [selectedInstructor, setSelectedInstructor] = useState<Instructor>(
    instructors[0]
  );
  const { user } = useAuth();
  if (!isOpen) return null;

  const handleSend = async () => {
    const email: Email = {
      from_name: user.name + " " + user.surname,
      to_email: selectedInstructor.email
        ? selectedInstructor.email
        : "", //change this to your email
      header: headerMessage,
      body: message,
    };
    const res = await sendEmail(email);
    console.log(res);
    onClose();
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = Number(event.target.value);
    const inst = instructors.find(
      (instructor) => instructor.instructor_id === selectedId
    );
    setSelectedInstructor(inst!);
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50 ">
      <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg relative">
        <h2 className="text-2xl font-semibold mb-4">
          Send to:
          <select onChange={handleSelectChange}>
            {instructors.map((instructor) => (
              <option
                key={instructor.instructor_id}
                value={instructor.instructor_id}
              >
                {instructor.display_name}
              </option>
            ))}
          </select>
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Header
          </label>
          <input
            type="text"
            value={headerMessage}
            onChange={(e) => setHeaderMessage(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:border-black"
            placeholder="Write your header here..."
          />
        </div>
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
