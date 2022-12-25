import { createStore } from "@udecode/zustood";
import { DefaultTheme } from "styled-components";
import { Theme } from "./defaultTheme";

export const themeStore = createStore("theme_store")({
  theme: Theme,
}).extendActions((set) => ({
  setTheme: (newTheme: DefaultTheme) => {
    set.theme(newTheme);
  },
}));

export const useTheme = () => themeStore.use.theme();
