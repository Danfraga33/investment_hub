export async function GET() {
  const query = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await query.json();
  return Response.json({ data });
}
