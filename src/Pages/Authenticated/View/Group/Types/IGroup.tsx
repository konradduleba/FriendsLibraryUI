import IOwner from "./IOwner";
import IPost from "./IPost";

export default interface IGroup {
    belong: boolean;
    description: string;
    name: string;
    owner: IOwner;
    picture: string;
    posts: IPost[] | []
}