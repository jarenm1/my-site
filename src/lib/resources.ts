export type Resource = {
    title: string;
    url: string;
    description: string;
    dateAdded: string; // Format: YYYY-MM-DD
};

export const resources: Resource[] = [
    {
        title: "Rustlings",
        url: "https://rustlings.rust-lang.org/",
        description: "First resource that really got me into programming and Rust.",
        dateAdded: "12-03-2025"
    }
];

