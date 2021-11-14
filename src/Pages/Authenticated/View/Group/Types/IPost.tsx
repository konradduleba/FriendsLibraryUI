import IComment from "./IComment";

export default interface IPost {
    author: {
        name: string;
        lastname: string;
        username: string;
    };
    content: string;
    date: Date;
    id: string;
    title: string;
    comments: IComment[] | []
}