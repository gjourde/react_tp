//import de la librairie REACT
import React from "react";
import { createRoot } from 'react-dom/client';
import Second from "./components/Second";

const addRoot = document.getElementById('add-root');
const root = createRoot(addRoot); // createRoot(container!) if you use TypeScript
root.render(<Second />);