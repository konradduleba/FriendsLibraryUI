import IContentMobile from "../Types/IContentMobile";

const ContentMobile = ({ options }: IContentMobile) => {
    if (!options || !options.length) {
        return null
    }

    return (
        <div className='settings-container-wrapper-mobile'>
            {options.map(({ content, name }) => (
                <div className='single-option-mobile' key={name}>
                    {content}
                </div>
            ))}
        </div>
    )
}

export default ContentMobile