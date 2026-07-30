# Next.js Todo List - Coding Interview

## Overview

Build a simple task list application using Next.js and TypeScript. You'll fetch todos from an external API, manage state, and implement basic CRUD operations.

Use an AI-based IDE to code.

- Cursor
- Claude Code

Tab complete allowed for all tasks.

**Time Estimate:** 45 minutes

---

## Part 1: Project Setup

This repo is already set up with Next.js, TypeScript, Tailwind, and the App Router.

```bash
git clone https://github.com/christo9090/attik-coding-interview.git
cd attik-coding-interview
npm install
npm run dev
```

Confirm the app loads at [http://localhost:3000](http://localhost:3000), then continue.

---

## Part 2: Types

Create a type for the Todo object. The API returns data in this shape:

```typescript
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

**Task:** Define a `Todo` type and apply it where necessary throughout your application.

---

## Part 3: Component Architecture

**Discussion Point:** Before coding, explain how you would split up the component structure.

Consider:

- What components would you create?
- What props would each component receive?
- Where would state live?

_Take a few minutes to sketch out your component hierarchy, then implement it._

---

## Part 4: Data Fetching

Fetch todos from the JSONPlaceholder API:

```
GET https://jsonplaceholder.typicode.com/todos
```

**Requirements:**

- Fetch data
- Limit results to **10 todos**
- Store todos in component state
- Prefer app router principles

---

## Part 5: CRUD Operations

Implement the following operations (client-side only, no API calls needed for mutations):

### Create

- Add an input field and button to create new todos
- New todos should be added to state
- Generate a unique ID for new todos

### Delete

- Add a delete button to each todo item
- Remove the todo from state when clicked

### Edit

- Allow editing a todo's title
- Update the title in state
- Complete button for the todo

### Toggle Complete (Bonus)

- Toggle the `completed` status when clicking on a todo

---

## Part 6: Use Tailwind CSS for styling

Use Tailwind CSS for styling the application.

Do some basic styling to make the todo list look presentable.

---

## Part 7: ! AI Agent Challenge !

Use an AI coding agent (Cursor, Copilot, etc.) to implement **drag-and-drop reordering** for the todos.

**Prompt the agent to:**

- Add drag handles to each todo item
- Allow reordering by dragging
- Update state to reflect the new order

_Observe how you interact with the AI, how you refine prompts, and how you validate/modify the generated code._

Ability to use context and planning will be valuable to see.

Walk us through what the AI did after it completes.

---

## Evaluation Criteria

| Area                 | What We're Looking For                 |
| -------------------- | -------------------------------------- |
| **TypeScript**       | Proper typing, no `any` types          |
| **React Patterns**   | Correct use of hooks, state management |
| **Component Design** | Logical separation of concerns         |
| **Code Quality**     | Clean, readable, maintainable code     |
| **Problem Solving**  | How you approach and debug issues      |
| **AI Collaboration** | Effective use of AI tools              |

---

## Starter Reference

Here's the expected data structure from the API (first 3 items):

```json
[
  { "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis",
    "completed": false
  },
  { "userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": false }
]
```

---

## Tips

- Start simple, then iterate
- Think aloud as you code
- Ask clarifying questions if needed
- It's okay to Google/reference docs

Thanks!
