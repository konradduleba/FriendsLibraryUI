import Button from "Components/Button"
import EButtonTypeList from "Components/Button/Types/EButtonTypeList"
import FormInput from "Components/Form/Input"
import EInputTypes from "Components/Form/Input/Types/EInputTypes"
import { useState } from "react"

interface ICreatePost {
    onCreatePost: (title: string, content: string) => void;
}

const CreatePost = ({ onCreatePost }: ICreatePost) => {
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')

    const onClickCreate = () => {
        if (!title || !content) {
            return null
        }

        onCreatePost(title, content)

        setTitle('')

        return setContent('')
    }

    return (
        <div className='create-post-container'>
            <div className='creation-container'>
                <FormInput
                    type={EInputTypes.TEXT}
                    value={title}
                    onChange={setTitle}
                    header='Title'
                />
                <FormInput
                    type={EInputTypes.TEXT}
                    value={content}
                    onChange={setContent}
                    header='Content'
                />
            </div>
            <div className='creation-post-options'>
                <Button
                    onClick={onClickCreate}
                    type={EButtonTypeList.PRIMARY}
                    value='Create'
                />
            </div>
        </div>
    )
}

export default CreatePost