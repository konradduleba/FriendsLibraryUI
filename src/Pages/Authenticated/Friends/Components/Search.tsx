import FormInput from "Components/Form/Input"
import EInputTypes from "Components/Form/Input/Types/EInputTypes"
import ISearch from "../Types/ISearch"

const FriendsSearch = ({ searchQuery, setSearchQuery }: ISearch) => (
    <div className='search-wrapper'>
        <FormInput
            onChange={setSearchQuery}
            type={EInputTypes.TEXT}
            value={searchQuery}
            placeholder='Search'
        />
    </div>
)

export default FriendsSearch