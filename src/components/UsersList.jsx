import { useState, useEffect } from "react";
import { FolderSimplePlus, Robot } from "phosphor-react";

function UsersList() {
    const [users, setUsers] = useState([]);
    const [filterUsers, setFilterUsers] = useState([]);
    const [search, setSearch] = useState("");

    const lowerSearch = search.toLowerCase();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setFilterUsers(users))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        const searches = filterUsers.filter((response) =>
            response.name.toLowerCase().includes(lowerSearch)
        );
        setUsers(searches);
    }, [search]);

    return (
        <div>
            <div className="m-6 grid grid-cols-3 gap-5 justify-center items-center">
                <input
                    type="text"
                    placeholder="Search by name..."
                    className="w-full h-10 p-3 text-sm text-zinc-900 rounded-lg"
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                />

                <div className="flex justify-center items-center gap-3">
                    <Robot size={26} />
                    <span>Technologies: JavaScript, React, Tailwind </span>
                </div>

                <div className="flex justify-center items-center gap-3">
                    <FolderSimplePlus size={26} />
                    <span>Application developed from the API data: <a href="https://jsonplaceholder.typicode.com/users" className="text-zinc-500">Users</a></span>
                </div>
            </div>

            <table className="w-full divide-y divide-zinc-700">
                <thead className="bg-zinc-800 text-left">
                    <tr>
                        <th className="px-6 py-3 uppercase">Name</th>
                        <th className="px-6 py-3 uppercase">Username</th>
                        <th className="px-6 py-3 uppercase">Email</th>
                        <th className="px-6 py-3 uppercase">Phone</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-zinc-700">
                    {users.map(user => {
                        return (
                            <tr key={user.id}>
                                <td className="px-6 py-3">{user.name}</td>
                                <td className="px-6 py-3">{user.username}</td>
                                <td className="px-6 py-3">{user.email}</td>
                                <td className="px-6 py-3">{user.phone}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UsersList