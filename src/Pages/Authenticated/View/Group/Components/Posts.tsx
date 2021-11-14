import { Link } from "react-router-dom"
import parseDateToSelectedFormat from "Utils/Functions/parseDateToSelectedFormat"
import { EParseDateMethods } from "Utils/Types/EParseDateMethods"
import IPostsList from "../Types/IPostsList"
import IPost from "../Types/IPost"
import PostComments from "./PostComments"
import CreateComment from "./CreateComment"
import '../Styles/Posts.scss'

interface ISinglePost {
    postProps: IPost;
    postCreatedComment: (content: string, postId: string) => void;
}

const SinglePost = ({ postProps, postCreatedComment }: ISinglePost) => {
    const { author, comments, content, date, title, id } = postProps
    const { lastname, username, name } = author

    return (
        <div className='single-post'>
            <div className='post-info'>
                <p className='title'>{title}</p>
                <div className='date-and-author'>
                    <p>{parseDateToSelectedFormat(date, EParseDateMethods.DDMMMYYYY_HHMM)}</p>
                    <p>by <Link to={`/people/${username}`}>{name} {lastname}</Link></p>
                </div>
            </div>
            <div className='post-content'>
                <p>{content}</p>
            </div>
            <div className='options'>
                <CreateComment
                    postCreatedComment={postCreatedComment}
                    postId={id}
                />
            </div>
            <PostComments list={comments} />
        </div>
    )
}

const Posts = ({ list, postCreatedComment }: IPostsList) => {
    if (!list.length) {
        return null
    }

    return (
        <div className='posts-container'>
            {list.map(postProps => <SinglePost
                postProps={postProps}
                postCreatedComment={postCreatedComment}
                key={postProps.id} />)}
        </div>
    )
}

export default Posts