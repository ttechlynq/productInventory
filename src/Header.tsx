import { authenticate } from "./api/authenticate";
import { authorize } from "./api/authorize";
import { useAppContext } from "./appContext";

// import { User } from "./api/authenticate";
// import logo from "./logo.svg";

export function Header() {
  const { user, loading, dispatch } = useAppContext();

  async function handleSignInClick() {
    dispatch({ type: "authenticate" });
    const authenticatedUser = await authenticate();
    dispatch({
      type: "authenticated",
      user: authenticatedUser,
    });
    if (authenticatedUser !== undefined) {
      dispatch({ type: "authorize" });
      const authorizedPermission = await authorize(authenticatedUser.id);
      dispatch({
        type: "authorized",
        permissions: authorizedPermission,
      });
    }
  }
  return (
    <header className="flex justify-between items-center border-b-2 border-gray-100 py-6">
      {user ? (
        <span className="ml-auto font-bold">{user.name} has signed in</span>
      ) : (
        <button
          onClick={handleSignInClick}
          className="whitespace-nowrap inline-flex items-center justify-center 
                  m1-auto px-4 py-2 w-36 border border-transparent rounded-md shadow-sm
                  text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          disabled={loading}
        >
          {loading ? "..." : "Sign in"}
        </button>
      )}
    </header>
  );
}

// export function Header() {
//   const [searchParams] = useSearchParams();

//   return (
//     <header className="text-center text-slate-50 bg-slate-900 h-40 p-5">
//       <Form className="relative text-right" action="/products">
//         <input
//           type="search"
//           name="search"
//           placeholder="Search"
//           defaultValue={searchParams.get("search") ?? ""}
//           className="absolute right-0 top-0 rounded py-2 px-3 text-gray-700"
//         />
//       </Form>
//       <Link to="">
//         <img src={logo} alt="Logo" className="inline-block h-5" />
//       </Link>
//       <Link to="">
//         <h1 className="text-2x1">Networks</h1>
//       </Link>
//       <nav>
//         <NavLink
//           to="products"
//           className={({
//             isActive,
//           }) => `text-white no-underline p-1 pb-0.5 border-solid
//          border-b-2 ${isActive ? "border-white" : "border-transparent"}`}
//         >
//           Products
//         </NavLink>
//         <NavLink
//           to="admin"
//           className={({
//             isActive,
//           }) => `text-white no-underline p-1 pb-0.5 border-solid
//           border-b-2 ${isActive ? "border-white" : "border-transparent"}`}
//         ></NavLink>
//       </nav>
//     </header>
//   );
// }
