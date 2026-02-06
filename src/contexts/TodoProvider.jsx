import { TodoContext } from "./TodoContext";


export const TodoProvider = ({ children, value }) => {
    return (
        <TodoContext.Provider value={value}>{children}</TodoContext.Provider>);
}