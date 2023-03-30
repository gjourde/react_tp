/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
// start the Stimulus application
import './bootstrap';

//import de la librairie REACT
import React from "react";
import { createRoot } from 'react-dom/client';
//import Main from "./components/Main";
import PriceList from "./components/PriceList";


const appRoot = document.getElementById('app-root');
const root = createRoot(appRoot); // createRoot(container!) if you use TypeScript
root.render(<PriceList />);