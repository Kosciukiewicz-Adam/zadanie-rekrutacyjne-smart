import SearchIcon from '../icons/SearchIcon';
import { SearchTermsKeyNames } from '../consts';
import "../styles/elements/SearchInput.scss";

interface Props {
    handleValueChange: (key: SearchTermsKeyNames, value: string) => void;
    handleValueClear: (key: SearchTermsKeyNames) => void;
    keyName: SearchTermsKeyNames,
    value: string;
    label: string;
}

const SearchInput: React.FC<Props> = ({ keyName, value, label, handleValueChange, handleValueClear }): JSX.Element => {

    return (
        <div className='SearchInput'>
            <p className='label'>{label}</p>
            <div className='contentWrapper'>
                <SearchIcon />
                <input type="text"
                    onChange={(event) => handleValueChange(keyName, event.target.value)}
                    value={value}
                />
                <p onClick={() => handleValueClear(keyName)} className='clearButton'>clear</p>
            </div>
        </div>
    )
};

export default SearchInput;