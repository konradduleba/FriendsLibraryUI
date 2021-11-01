export default interface IPicture {
    picture: string;
    name: string;
    lastname: string;
    isEditing: boolean;
    profilePicture: File | null;
    setProfilePicture: (value: File) => void;
}