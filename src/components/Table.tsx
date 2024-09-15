import { useQuery } from "react-query";
import { QueryKeys, QueryStatus } from "../consts";
import { fetchUsers } from "../query/fetchData";
import { errorHandler } from "../query/errorHandler";
import UserRow from "../elements/UserRow";
import SearchBar from "../elements/SearchBar";
import "../styles/components/Table.scss";
import { RootState } from "../redux/store";
import { SearchTermsKeys } from "../interfaces/SearchTermsKeys";
import { User } from "../interfaces/Users";
import { useSelector } from "react-redux";

const Table: React.FC = (): JSX.Element => {
    const searchTermsValues: SearchTermsKeys = useSelector((state: RootState) => state.searchTerms)
    const { data, status } = useQuery(QueryKeys.USERS, fetchUsers);

    const filteredUsers: User[] = [];

    if (status === QueryStatus.SUCCESS) {
        data.forEach(user => {

            //if (searchTermsValues.name === user.name) {
            filteredUsers.push(user)
            //}
        })
    }




    return errorHandler(status as QueryStatus, (
        <div className="Table">
            <SearchBar></SearchBar>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Phone</th>
                </tr>
                {filteredUsers?.map(user => <UserRow {...user} />)}
            </table>
        </div>
    ))
};

export default Table;