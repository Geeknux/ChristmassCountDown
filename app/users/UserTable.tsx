interface User {
    id: number;
    name: string;
    email: string;
    website: string;
}

interface Props {
    sortOrder: string;
}

const UserTable =async ({ sortOrder }: Props) => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users`, { cache: "no-store" });
    const users: User[] = await res.json();

    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                {users.sort((a, b) => {
                    if (sortOrder === "asc") {
                        return a.id - b.id;
                    } else {
                        return b.id - a.id;
                    }
                }).map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UserTable;
