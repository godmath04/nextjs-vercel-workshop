import HeaderClient from "./Header.client";
import { auth } from "@/auth"; // O "../auth" si te da error

const Header = async () => {
  const session = await auth();
  return <HeaderClient user={session?.user ?? null} />;
};

export default Header;