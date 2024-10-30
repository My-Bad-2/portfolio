"use client";

import SwapTheme, { SwapThemeMobile} from "components/theme";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { useContext } from "react";

export default function Navbar({ links }: { links: Array<Record<string, string>> }) {
  const { changeTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar justify-between bg-base-300">
      <a className="btn btn-ghost text-lg">
        Portfolio
      </a>

      <div className="dropdown dropdown-end sm:hidden">
        <button className="btn btn-ghost">
          <i className="bx bx-menu text-lg" />
        </button>

        <ul tabIndex={0} className="dropdown-content menu z-[1] bg-base-200 p-6 rounded-box shadow w-56 gap-2">
          <div className="flex justify-center gap-2">
            <a href="" className="btn btn-circle btn-ghost btn-sm text-xl">
              <i className="bx bxl-github" />
            </a>
            <a href="" className="btn btn-circle btn-ghost btn-sm text-xl">
              <i className="bx bxl-linkedin" />
            </a>
          </div>
          {
            links.map(link => {
              return (
                <li key={`${link.label}-${link.path}`}>
                  <Link href={link.path!}>
                    {link.label}
                  </Link>
                </li>
              );
            })
          }
          <SwapThemeMobile handleOnClick={changeTheme} />
        </ul>
      </div>

      <ul className="hidden menu sm:menu-horizontal gap-2">
        {
          links.map(link => {
            return (
              <li key={`${link.label}-${link.path}`}>
                <Link href={link.path!}>
                  {link.label}
                </Link>
              </li>
            );
          })
        }
        <SwapTheme handleOnClick={changeTheme} />
      </ul>

      <div className="hidden sm:flex gap-2">
        <a href="" className="btn btn-circle btn-ghost btn-sm text-xl">
          <i className="bx bxl-github" />
        </a>
        <a href="" className="btn btn-circle btn-ghost btn-sm text-xl">
          <i className="bx bxl-linkedin" />
        </a>
      </div>
    </nav>
  );
};