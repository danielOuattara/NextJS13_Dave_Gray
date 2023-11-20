const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

// export async function DELETE(request: Request) {
//   const { id }: Partial<Todo> = await request.json();
//   if (!id) {
//     return Response.json({ message: "Id is required" });
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

//-------------------------------------------------------------------
export async function GET(request: Request) {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);
  const response = await fetch(`${DATA_SOURCE_URL}/${id}`);

  const todo: Todo = await response.json();
  if (!todo) {
    return Response.json({ message: `Not to found with id : ${id}` });
  }

  return Response.json(todo);
}
