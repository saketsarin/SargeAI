import { TodoItem } from "../components/TodoContainer/TodoCard";

export const sampleTodos: TodoItem[] = [
  {
    id: 1,
    title: "Email your teacher",
    content:
      "Send an **email** to your teacher regarding the project update. Refer to the [project guidelines](https://example.com/guidelines).",
    category: "sendEmail",
  },
  {
    id: 2,
    title: "Study for the exam",
    content:
      "Prepare thoroughly for the upcoming exam by reviewing all the necessary materials. Here are some steps to help you:\n\n1. **Review Notes**: Go through your class notes and highlight key points.\n2. **Practice Problems**: Solve practice problems to test your understanding.\n3. **Group Study**: Join a study group to discuss and clarify doubts.\n\nFor additional resources, refer to the [study material](https://example.com/study-material) for a comprehensive understanding.",
    category: "study",
  },
  {
    id: 3,
    title: "Write a blog post",
    content: `Write a blog post on the topic **"The importance of learning new technologies"**. Consider the following points:\n\n1. **Introduction**: Define what new technologies are and why they are important.\n2. **Benefits**: Discuss the benefits of learning new technologies, such as staying relevant in the job market, improving problem-solving skills, and fostering innovation.\n3. **Challenges**: Mention the challenges one might face while learning new technologies and how to overcome them.\n4. **Conclusion**: Summarize the key points and encourage readers to embrace continuous learning.\n\nFor more insights, refer to the [technology trends](https://example.com/technology-trends).`,
    category: "writing",
  },
];
