import { useState } from "react"
import AddCommentIcon from 'Assets/Icons/plus-in-circle-blue.svg'
import FormInput from "Components/Form/Input"
import EInputTypes from "Components/Form/Input/Types/EInputTypes"
import Button from "Components/Button"
import EButtonTypeList from "Components/Button/Types/EButtonTypeList"

interface ICreateComment {
    postCreatedComment: (content: string, postId: string) => void;
    postId: string;
}

const CreateComment = ({ postCreatedComment, postId }: ICreateComment) => {
    const [isCreationActive, setIsCreationActive] = useState<boolean>(false)
    const [commentValue, setCommentValue] = useState<string>('')

    const onClickAdd = async () => {
        if (!commentValue) {
            return null
        }

        setIsCreationActive(false)
        setCommentValue('')

        return postCreatedComment(commentValue, postId)
    }

    if (!isCreationActive) {
        return (
            <div className='add-comment' onClick={() => setIsCreationActive(true)}>
                <img src={AddCommentIcon} alt='Add comment' />
                <p>Add comment</p>
            </div>
        )
    }

    return (
        <div className='add-comment-input-wrapper'>
            <FormInput
                value={commentValue}
                onChange={setCommentValue}
                type={EInputTypes.TEXT}
                placeholder='Write something here'
            />
            <div className='creation-options'>
                <Button
                    type={EButtonTypeList.PRIMARY}
                    value='Add'
                    onClick={onClickAdd}
                />
                <Button
                    type={EButtonTypeList.SECONDARY}
                    value='Cancel'
                    onClick={() => setIsCreationActive(false)}
                />
            </div>
        </div>
    )
}

export default CreateComment