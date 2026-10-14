import { useState } from "react";

function UserSearch() {
  const [users, setUser] = useState([]);
  const [query, setQuery] = useState("");

  async function findUser(event) {
    event.preventDefault();
    const url = query
      ? `https://jsonplaceholder.typicode.com/users?username=${query}`
      : `https://jsonplaceholder.typicode.com/users`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <section className="realtive mx-2">
        <div className="flex py-2 ">
          <h1 className="text-xl">Looking for a user?</h1>
        </div>
        <form onSubmit={findUser} className="flex">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Ketik untuk mencari"
            className="p-2 border-2 rounded-md border-blue-300 shadow-amber-100 shadow-2xl"
            id=""
          />
          <button
            type="submit"
            className="rounded-sm bg-red-200 px-2 py-2 text-red-800"
          >
            Find
          </button>
        </form>

        {users.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {users.map((item, index) => (
              <div
                key={index}
                class="bg-white p-6 rounded-sm shadow-xs border border-gray-100"
              >
                <h3 class="font-bold text-lg text-gray-800">{item.name}</h3>
                <p class="text-gray-600 mt-2">Username: {item.username}</p>
                <p class="text-gray-600 mt-2">Website: {item.website}</p>
                <p class="text-gray-600 mt-2">Phone: {item.phone}</p>

                <address>
                  {item.address.street},{item.address.suite},{" "}
                  {item.address.zipcode}
                </address>
              </div>
            ))}
          </div>
        ) : (
          <p>Data tidak ditemukan</p>
        )}
      </section>
    </>
  );
}

export default UserSearch;
