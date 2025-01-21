export interface TaskInterface{
    id?: string;
    title: string;
    description: string;
    status: "todo" | "inProgress" | "done";
    dueDate: string;
    assignedUser: number;
    priority: "high" | "low";
    tags: string[]
}