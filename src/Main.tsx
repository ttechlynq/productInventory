import { User } from "./api/authenticate";
import { Content } from "./Content";
import { useAppContext } from "./appContext";
// type Props = {
//   user: undefined | User;
//   permissions: undefined | string[];
// };

export function Main() {
  const { user } = useAppContext();
  return (
    <main className="py-8">
      <h1 className="text-3x1 text-center font-bold underline">Welcome</h1>
      <p className="mt-8 text-x1 text-center">
        {user ? `Hello ${user.name}!` : "Please sign in"}
      </p>
      <Content />
    </main>
  );
}
