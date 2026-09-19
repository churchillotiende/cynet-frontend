import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

const Ctx = createContext<{ theme: Theme; toggleTheme: () => void } | null>(
  null,
);

const KEY = "bluestron-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return (localStorage.getItem(KEY) as Theme | null) ?? "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    try {
      localStorage.setItem(KEY, theme);
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [theme]);

  return (
    <Ctx.Provider
      value={{
        theme,
        toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export const useTheme = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useTheme must be used within ThemeProvider");
  return c;
};
