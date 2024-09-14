import type { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux'
import { SearchTermsKeyNames } from '../consts';
import { SearchTermsKeys } from '../interfaces/SearchTermsKeys';
import SearchInput from './SearchInput';
import { changeKeyValue, clearKeyValue } from '../redux/searchTerms';

const SearchBar: React.FC = (): JSX.Element => {
    const searchTermsValues: SearchTermsKeys = useSelector((state: RootState) => state.searchTerms)
    const dispatch = useDispatch();

    const inputKeys = [
        SearchTermsKeyNames.EMAIL,
        SearchTermsKeyNames.NAME,
        SearchTermsKeyNames.USERNAME,
        SearchTermsKeyNames.PHONE,
    ];

    const handleValueChange = (key: SearchTermsKeyNames, value: string) => {
        dispatch(changeKeyValue({ key: SearchTermsKeyNames.NAME, value }))
    }

    const handleValueClear = (key: SearchTermsKeyNames) => {
        dispatch(clearKeyValue({ key }))
    }

    return (
        <div className="SearchBar">
            {inputKeys.map(key =>
                <SearchInput
                    {...{ handleValueChange, handleValueClear, key }}
                    value={searchTermsValues[key]}
                />)}
        </div>
    )
};

export default SearchBar;