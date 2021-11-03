export default interface IHeader {
    title?: string;
    searchQuery?: string;
    setSearchQuery?: (value: string) => void;
    isSearchActive?: boolean;
}