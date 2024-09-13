import { User } from "../interfaces/Users";

const UserRow: React.FC<User> = ({ name, email, username, phone }): JSX.Element => {
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{username}</td>
            <td>{phone}</td>
        </tr>
    )
};

export default UserRow;