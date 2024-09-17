import { useQuery } from "react-query";
import { QueryKeys, QueryStatus, SearchTermsKeyNames } from "../consts";
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
    const allSearchKeys = [
        SearchTermsKeyNames.USERNAME,
        SearchTermsKeyNames.EMAIL,
        SearchTermsKeyNames.PHONE,
        SearchTermsKeyNames.NAME,
    ]

    const checkIfValueMatchesSearchTerm = (key: SearchTermsKeyNames, value: string): boolean => {
        const searchTerm = searchTermsValues[key].toLocaleLowerCase();
        const searchTermLength = searchTerm.length;
        const formatedValues = value.split(" ").map(part => part.slice(0, searchTermLength).toLocaleLowerCase());

        if (!searchTermLength || formatedValues.some(part => part === searchTerm)) {
            return true
        }

        return false;
    }

    if (status === QueryStatus.SUCCESS) {
        data.forEach(user => {
            const passesAllSearchConditions = allSearchKeys.every(searchKey => checkIfValueMatchesSearchTerm(searchKey, user[searchKey]));

            if (passesAllSearchConditions) {
                filteredUsers.push(user);
            }
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