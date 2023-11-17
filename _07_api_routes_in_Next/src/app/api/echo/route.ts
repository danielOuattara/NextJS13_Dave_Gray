//
//

export async function GET(request: Request) {
  console.log("--------------------------------------");
  console.log("request = ", request);

  console.log("--------------------------------------");
  console.log("new URL(request.url) = ", new URL(request.url));

  /* 
  new URL(request.url) =  URL {
  href: 'http://localhost:3000/api/echo?name=john&country=china',
  origin: 'http://localhost:3000',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'localhost:3000',
  hostname: 'localhost',
  port: '3000',
  pathname: '/api/echo',
  search: '?name=john&country=china',
  searchParams: URLSearchParams { 'name' => 'john', 'country' => 'china' },
  hash: ''
}*/

  console.log("--------------------------------------");
  console.log(
    "new URLSearchParams(request.url) = ",
    new URLSearchParams(request.url),
  );

  /* 
  new URLSearchParams(request.url) =  URLSearchParams { 'http://localhost:3000/api/echo?name' => 'john', 'country' => 'china' }
  */

  console.log("--------------------------------------");

  //---------
  /* one way of getting params 
  -------------------------------*/
  const { searchParams } = new URL(request.url);
  console.log("searchParams = ", searchParams);

  const name = searchParams.get("name");
  console.log("name = ", name);

  const country = searchParams.get("country");
  console.log("country = ", country);

  //---------
  /* another efficient way of getting params 
  --------------------------------------------*/
  console.log("searchParams.entries() = ", searchParams.entries());

  const obj = Object.fromEntries(searchParams.entries());
  console.log("obj = ", obj);

  return Response.json({ name, country, obj });
}
