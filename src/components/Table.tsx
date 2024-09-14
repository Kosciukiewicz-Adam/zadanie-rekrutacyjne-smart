import { useQuery } from "react-query";
import { QueryKeys, QueryStatus } from "../query/consts";
import { fetchUsers } from "../query/fetchData";
import { errorHandler } from "../query/errorHandler";
import UserRow from "../elements/UserRow";
import SearchBar from "../elements/SearchBar";

const Table: React.FC = (): JSX.Element => {
    const { data, status } = useQuery(QueryKeys.USERS, fetchUsers);


    return errorHandler(status as QueryStatus, (
        <div>  
            <SearchBar></SearchBar>
            <table>
                <tr>
                    <th>Name</th>
                    <th>email</th>
                    <th>username</th>
                    <th>phone</th>
                </tr>
                {data?.map(user => <UserRow {...user} />)}
            </table>
        </div>
    ))
};

export default Table;