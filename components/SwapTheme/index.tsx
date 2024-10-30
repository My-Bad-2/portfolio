"use client";

import type React from "react";

const themes: string[] = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];

interface RenderProps {
  handleOnClick: (e?: any) => void;
};

const RenderTheme: React.FC<{ handle?: (e?: any) => void, val: string }> = ({ handle, val }) => {
  return (
    <li onClick={handle}>
      <input type="radio" name="theme-dropdown" className="btn btn-sm btn-block btn-ghost justify-start" aria-label={val} value={val} />
    </li>
  );
};

function RenderThemes({ handleOnClick }: RenderProps) {
  return themes.map(theme => {
    return <RenderTheme key={theme} handle={handleOnClick} val={theme} />
  });
};

export function SwapThemeMobile({ handleOnClick }: {
  handleOnClick?: (e?: any) => void;
}) {
  return (
    <li>
      <details>
        <summary className="btn">Theme</summary>
        <ul className="flex-nowrap overflow-y-auto max-h-40 menu z-[1] bg-base-200 p-6 rounded-box shadow w-36 gap-2 self-center">
          <RenderThemes handleOnClick={handleOnClick!} />
        </ul>
      </details>
    </li>
  );
}

export default function SwapTheme({ handleOnClick }: {
  handleOnClick?: (e?: any) => void;
}) {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        Theme
        <i className="bx bx-chevron-down" />
      </div>
      <ul className="flex-nowrap overflow-y-auto max-h-40 dropdown-content menu z-[1] bg-base-200 p-6 rounded-box shadow w-56 gap-2">
        <RenderThemes handleOnClick={handleOnClick!} />
      </ul>
    </div>
  );
}