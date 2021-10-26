export default interface IGroups {
    groups: {
        id: string;
        name: string;
        picture: string;
    }[];
    onClickGroup: (value: string) => void;
}