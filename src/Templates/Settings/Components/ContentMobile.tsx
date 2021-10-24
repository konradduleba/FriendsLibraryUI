import Button from "Components/Button";
import EButtonTypeList from "Components/Button/Types/EButtonTypeList";
import IContentMobile from "../Types/IContentMobile";

const ContentMobile = ({ options, onSubmitClickMobile }: IContentMobile) => {
    if (!options || !options.length) {
        return null
    }

    return (
        <div className='settings-container-wrapper-mobile'>
            {options.map(({ content, name, page }) => (
                <div className='single-option-mobile' key={name}>
                    {content}
                    {page === 'settings' && <Button
                        onClick={onSubmitClickMobile}
                        type={EButtonTypeList.PRIMARY}
                        value='Submit'
                    />}
                </div>
            ))}
        </div>
    )
}

export default ContentMobile