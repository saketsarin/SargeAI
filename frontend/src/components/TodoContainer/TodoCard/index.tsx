import React from "react";
import ReactMarkdown from "react-markdown";
import "./styles.scss";

interface TodoCardProps {
  todo: TodoItem;
}

const TodoCard: React.FC<TodoCardProps> = ({ todo }) => {
  return (
    <div className="todo__card">
      <h2>{todo.title}</h2>
      <ReactMarkdown>{todo.content}</ReactMarkdown>
    </div>
  );
};

export default TodoCard;

export interface TodoItem {
  id: number;
  title: string;
  content: string;
  category: "study" | "writing" | "sendEmail";
}
