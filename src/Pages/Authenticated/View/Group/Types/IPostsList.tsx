import IPost from "./IPost";

export default interface IPostsList {
    list: IPost[] | [];
    postCreatedComment: (content: string, postId: string) => void;
}