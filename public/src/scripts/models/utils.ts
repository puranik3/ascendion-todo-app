export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

export type IFilter = "all" | "active" | "completed";
