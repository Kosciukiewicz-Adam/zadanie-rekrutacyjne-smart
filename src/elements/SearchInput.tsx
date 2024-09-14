import { SearchTermsKeyNames } from '../consts';

interface Props {
    key: SearchTermsKeyNames,
    value: string;
    handleValueChange: (key: SearchTermsKeyNames, value: string) => void;
    handleValueClear: (key: SearchTermsKeyNames) => void;
}

const SearchInput: React.FC<Props> = ({ key, value, handleValueChange, handleValueClear }): JSX.Element => {

    return (
        <div className=''>
            <input type="text"
                onChange={(event) => handleValueChange(key, event.target.value)}
                value={value}
            />
            <p>clear</p>
        </div>
    )
};

export default SearchInput;