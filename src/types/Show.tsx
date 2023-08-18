
export interface Show {
    name: string;
    start: number;
    finish: number;
    id: string;
    type: "daytime" | "after-dark" | "news" | "sport" | "culture";
    parent: {
        day: string;
    };
}
