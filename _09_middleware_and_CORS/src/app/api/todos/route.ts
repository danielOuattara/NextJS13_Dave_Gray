const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

export async function GET() {
  const secret = process.env.DATA_API_KEY;
  console.log("secret = ", secret);

  const response = await fetch(DATA_SOURCE_URL);
  const todos: Todo[] = await response.json();
  console.log("todos = ", todos);

  return Response.json({ todos });
}

//--------------------------------------------------------------------------
// export async function DELETE(request: Request) {
//   const { id }: Partial<Todo> = await request.json();
//   if (!id) {
//     return Response.json({ message: "Id is required from the body request" });
//   }

//   await fetch(`${DATA_SOURCE_URL}/${id}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       "API-Key": process.env.DATA_API_KEY as string,
//     },
//   });

//   return Response.json({ message: `Todo ${id} is deleted` });
// }

//---------------
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return Response.json({ message: "Id is required from the url" });
  }

  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY as string,
    },
  });

  return Response.json({ message: `Todo ${id} is deleted` });
}

//--------------------------------------------------------------------------
export async function POST(request: Request) {
  const { userId, title }: Partial<Todo> = await request.json();
  if (!userId || !title) {
    return Response.json({ message: "Missing userId OR title" });
  }
  const response = await fetch(`${DATA_SOURCE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY as string,
      body: JSON.stringify({ userId, title, completed: false }),
    },
  });
  const newTodo: Todo = await response.json();
  return Response.json(newTodo);
}

//--------------------------------------------------------------------------
export async function PUT(request: Request) {
  const { userId, title, id, completed }: Todo = await request.json();
  if (!userId || !title || !id || typeof completed !== "boolean") {
    return Response.json({ message: "Missing userId OR title" });
  }
  const response = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY as string,
      body: JSON.stringify({ userId, title, completed }),
    },
  });
  const updatedTodo: Todo = await response.json();
  return Response.json(updatedTodo);
}

//--------------------------------------------------------------------------
export async function PATCH(request: Request) {
  const todo: Partial<Todo> = await request.json();

  console.log("todo = ", todo);

  if (todo.completed && typeof todo.completed !== "boolean") {
    return Response.json({
      message: "Completed must be a boolean",
    });
  }
  const response = await fetch(`${DATA_SOURCE_URL}/${todo.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY as string,
      body: JSON.stringify(todo),
    },
  });
  const updatedTodo: Todo = await response.json();
  return Response.json(updatedTodo);
}
