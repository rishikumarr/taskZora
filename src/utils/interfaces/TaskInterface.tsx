export interface TaskInterface{
    id: string;
    title: string;
    description: string;
    statue: "todo" | "inProgress" | "done";
    dueDate: string;
    assignedUser: number;
    priority: "high" | "low";
    tags: string[]
}