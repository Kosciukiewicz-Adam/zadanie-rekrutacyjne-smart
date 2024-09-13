import { User } from "../interfaces/Users";

const fetchUsers = async (): Promise<User[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json();
}

export { fetchUsers }