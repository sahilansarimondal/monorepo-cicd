import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div>
      <p>User Name: {user?.username}</p>
      <p>Password: {user?.password}</p>
    </div>
  );
}
