import { useAppContext } from "./appContext";

export function Content() {
  const { permissions } = useAppContext();
  if (permissions === undefined) {
    return null;
  }

  return permissions.includes("admin") ? (
    <p className="mt-4 text-1 text-center">Admin only infor here.</p>
  ) : (
    <p className="mt-4 text-1 text-center">You have no permissions</p>
  );
}
