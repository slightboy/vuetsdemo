type Todo = {
	id: string;
	name: string;
	description: string;
	status: TodoStatusType
	ts: number;
};

export enum TodoStatusType {
	normal,
	completed
}

export default Todo;