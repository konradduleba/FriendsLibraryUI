import FormSearch from "Components/Form/Search";
import IHeader from "../Types/IHeader";

const PersonListHeader = ({ isSearchActive, searchQuery, setSearchQuery, title }: IHeader) => (
    <div className='list-header'>
        <p className='title'>{title}</p>
        {isSearchActive && <FormSearch
            searchQuery={searchQuery!}
            setSearchQuery={setSearchQuery!}
        />}
    </div>
)

export default PersonListHeader