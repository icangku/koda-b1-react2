import React, { useEffect, useState } from "react";

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
    age: 0,
  });

  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem("contactMessages");
      const data = saved ? JSON.parse(saved) : [];

      return Array.isArray(data) ? data : [];
    } catch (error) {
      return [error];
    }
  });

  useEffect(() => {
    localStorage.setItem("contactMessages", JSON.stringify(messages));
  }, [messages]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMessage = {
      id: crypto.randomUUID(),
      name: contact.name,
      email: contact.email,
      message: contact.message,
      age: contact.age,
    };

    setMessages((prev) => [newMessage, ...prev]);

    setContact({
      name: "",
      email: "",
      message: "",
      age: 0,
    });
  };

  return (
    <>
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="">
          <h1 className="text-3xl text-center font-bold tracking-tight text-gray-300 sm:text-4xl">
            Contact
          </h1>
          <form on onSubmit={handleSubmit} className="mt-5 px-3">
            <label htmlFor="name" className="input-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="input-custom"
              onChange={handleChange}
              value={contact.name}
              required
            />
            <label htmlFor="name" className="input-label">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="input-custom"
              onChange={handleChange}
              value={contact.email}
              required
            />
            <label htmlFor="name" className="input-label">
              Message
            </label>
            <input
              type="text"
              name="message"
              className="input-custom"
              onChange={handleChange}
              value={contact.message}
              required
            />
            <label htmlFor="age" className="input-label">
              Age
            </label>
            <select
              name="age"
              onChange={handleChange}
              value={contact.age}
              className="input-custom"
              required
            >
              <option value="20">20</option>
              <option value="23">23</option>
              <option value="22">22</option>
              <option value="21">21</option>
            </select>

            <button className="p-3 rounded-2xl my-2 text-white bg-blue-400 hover:bg-blue-500">
              Save
            </button>
          </form>
        </div>

        {messages.length === 0 ? (
          <p>No message yet.</p>
        ) : (
          <div className="mx-2 my-2">
            <h2 className="text-xl">Messages</h2>
            {messages.map((item) => (
              <div
                key={item.id}
                className="rounded-lg border border-slate-200 p-4"
              >
                <h3 className="font-semibold">
                  {item.name} ({item.age}yrs)
                </h3>
                <p className="text-sm text-slate-500">{item.email}</p>
                <p className="mt-2 whitespace-pre-wrap wrap-break-word text-slate-700">
                  {item.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Contact;
