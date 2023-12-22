const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

//------------------------------------------------------------------- # 1
// export async function GET(request: Request) {
//   console.log("request = ", request);
//   const id = request.url.slice(request.url.lastIndexOf("/") + 1);
//   const response = await fetch(`${DATA_SOURCE_URL}/${id}`);

//   const todo: Todo = await response.json();
//   if (!todo) {
//     return Response.json({ message: `Not to found with id : ${id}` });
//   }

//   return Response.json(todo);
// }

//------------------------------------------------------------------- # 2

type Props = {
  params: {
    todoId: string;
  };
};

export async function GET(request: Request, { params: { todoId } }: Props) {
  const response = await fetch(`${DATA_SOURCE_URL}/${todoId}`);
  const todo: Todo = await response.json();
  if (!todo.userId) {
    return Response.json({ message: `Not to found with todoId : ${todoId}` });
  }

  return Response.json(todo);
}
