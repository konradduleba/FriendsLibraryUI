export default interface IComment {
    author: {
        name: string;
        lastname: string;
        username: string;
    };
    content: string;
    date: Date;
    id: string;
}