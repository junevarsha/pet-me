import { createContext } from "react";

// state and updater
// Redux is hard so we use context to as datastore
// use it for global app state... not much fanciness
// Here we are sticking hook like structure
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
