"use client";

import { useEffect } from "react";
import { themeChange } from "theme-change";

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

const ThemeOption: React.FC<{ val: string }> = ({ val }) => {
  return <option value={val.toString()}>{val.toString()}</option>
};

const renderThemeOptions = () => {
  return themes.map(theme => {
    return <ThemeOption key={theme} val={theme} />;
  });
};

export default function ChangeTheme() {
  useEffect(() => {
    themeChange(false);
  }, []);
  
  return (
    <select className="select select-ghost select-sm" data-choose-theme>
      {
        renderThemeOptions()
      }
    </select>
  );
};
