import { useState } from "react";

function UserSearch() {
  const [users, setUser] = useState([]);
  const [query, setQuery] = useState("");

  function findUser(event) {
    event.preventDefault();
    const url = `https://jsonplaceholder.typicode.com/users?username=${query}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUser(data);
      });
  }

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <section>
        <form onSubmit={findUser}>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Ketik untuk mencari"
            className="p-2 border border-2 rounded-md border-blue-300 shadow-amber-100 shadow-2xl"
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
          <ul>
            {users.map((item, index) => (
              <li key={index}>
                <p>Name: {item.name}</p>
                <p>Website: {item.website}</p>
                <p>Username: {item.username}</p>
                <p>Phone: {item.phone}</p>
                <address>
                  {item.address.street},{item.address.suite},{" "}
                  {item.address.zipcode}
                </address>
              </li>
            ))}
          </ul>
        ) : (
          <p>Data tidak ditemukan</p>
        )}
      </section>
    </>
  );
}

export default UserSearch;
