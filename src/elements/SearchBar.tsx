import type { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux'
import { SearchTermsKeyNames } from '../consts';
import { SearchTermsKeys } from '../interfaces/SearchTermsKeys';
import SearchInput from './SearchInput';
import { changeKeyValue, clearKeyValue } from '../redux/searchTerms';
import "../styles/elements/SearchBar.scss";

const SearchBar: React.FC = (): JSX.Element => {
    const searchTermsValues: SearchTermsKeys = useSelector((state: RootState) => state.searchTerms)
    const dispatch = useDispatch();

    const searchInputsValues: { keyName: SearchTermsKeyNames, label: string }[] = [
        { keyName: SearchTermsKeyNames.NAME, label: "Name" },
        { keyName: SearchTermsKeyNames.EMAIL, label: "Email" },
        { keyName: SearchTermsKeyNames.USERNAME, label: "User name" },
        { keyName: SearchTermsKeyNames.PHONE, label: "Phone number" },
    ];

    const handleValueChange = (key: SearchTermsKeyNames, value: string) => {
        dispatch(changeKeyValue({ key: key, value }))
    }

    const handleValueClear = (key: SearchTermsKeyNames) => {
        dispatch(clearKeyValue({ key }))
    }

    return (
        <div className="SearchBar">
            <p className='heading'>Search by:</p>
            <div className='inputWrapper'>
                {searchInputsValues.map(({ keyName, label }) =>
                    <SearchInput
                        {...{ handleValueChange, handleValueClear, keyName, label }}
                        value={searchTermsValues[keyName]}
                        key={keyName}
                    />)}
            </div>
        </div>
    )
};

export default SearchBar;