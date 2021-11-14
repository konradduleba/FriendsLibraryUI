import { Link } from "react-router-dom";
import IComment from "../Types/IComment";
import IPostComments from "../Types/IPostComments";
import '../Styles/Comment.scss'

const SingleComment = ({ author, date, content }: IComment) => {
    const { username, name } = author

    return (
        <div className='single-comment-wrapper'>
            <Link to={`/people/${username}`}>{name}</Link>
            <p>
                <span>:</span>
                <span>{content}</span>
            </p>
        </div>
    )
}

const PostComments = ({ list }: IPostComments) => {
    if (!list || !list.length) {
        return null
    }

    return (
        <div className='post-comment-wrapper'>
            {list.map(commentProps => <SingleComment {...commentProps} key={commentProps.id} />)}
        </div>
    )
}

export default PostComments;