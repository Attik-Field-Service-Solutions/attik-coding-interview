import { NextResponse } from "next/server";

/**
 * Local todos API used in the interview debugging step.
 */
export async function GET() {
  const todos = [
    { userId: 1, id: 1, title: "delectus aut autem", completed: false },
    { userId: 1, id: 1, title: "quis ut nam facilis", completed: false },
    { userId: 1, id: 1, title: "fugiat veniam minus", completed: false },
    { userId: 1, id: 1, title: "et porro tempora", completed: true },
    {
      userId: 1,
      id: 1,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      userId: 1,
      id: 1,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
    {
      userId: 1,
      id: 1,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      userId: 1,
      id: 1,
      title: "quo adipisci enim quam ut ab",
      completed: true,
    },
    {
      userId: 1,
      id: 1,
      title: "molestiae perspiciatis ipsa",
      completed: false,
    },
    {
      userId: 1,
      id: 1,
      title: "illo est ratione doloremque quia maiores aut",
      completed: true,
    },
  ];

  return NextResponse.json(todos);
}
