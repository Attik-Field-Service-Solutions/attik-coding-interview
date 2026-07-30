import { NextResponse } from "next/server";

/**
 * Local todos API used in the interview debugging step.
 * Fetches from JSONPlaceholder and returns the first 10 todos.
 */
export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch todos" },
      { status: 502 },
    );
  }

  const data: Array<{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }> = await res.json();

  const todos = data.slice(0, 10).map((todo) => ({
    userId: todo.userId,
    id: todo.id,
    title: todo.title,
    completed: todo.completed ? "true" : "false",
  }));

  return NextResponse.json(todos);
}
