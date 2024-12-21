"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  {
    name: "home",
    path: "/",
  },

  {
    name: "generate",
    path: "/generate",
  },

  {
    name: "login",
    path: "/login",
  },
  {
    name: "sign-up",
    path: "/sign-up",
  },
];
const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2"
            } capitalize font-medium hover:text-accent translate-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
