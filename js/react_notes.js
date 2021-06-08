
// just some quick notes on react


// React has strong popularity and momentum

// React is a library for building UIs
// React runs on the client as a SPA (Single Page Application), but can be used to build full stack apps by communicating with a server/API (eg. MERN stack)

// React is often referred to as a front-end "framework" because it is capable and directly comparable to a framework such as Angular or Vue.

// React gives one a way to structure the "view" layer of an app (view out of MVC). Reminder: MVC - Model, View, Controller: popular software design model. The model deals
// with the data, the controller deals with requests and routing, and the view is the UI. React is the V in MVC, when utilized in a stack.

// React allows you to build with reusable components which have their own state.

// React allows one to not have to separate markup from logic because of JSX, a dynamic markup for React.

// React uses something called the virtual DOM. Allows for updating parts of a page, for example, without reloading it.

// React has preformance & testing benefits (look these up)

// There is one-way data binding, which allows for consistency and structured code

// ** In React, the states are immutable (can't be changed directly). React allows one to re-create a state any time in needs to be changed. (helps with debugging, offers better performance
// ** When using React, think of your UI as several separate components

// Components can be created with function or classes. It's more prevelant to use functions with hooks to make them

// Components can take in props, which are essentially attributes

// Components are dynamic and can have "state" which is an object that determines how a component renders and behaves.

// "App" or "global" state refers to state that is available to the entire UI, not just a single component.

// Prior to React 16.8, we had to use class based components to use state. Now we can use functional components with hooks.

// React Hooks:
// React Hooks are functions that let us hook into the React state and lifecycle features from function components
// useState - Returns a stateful value and a function to update it
// useEffect - Perform side effects in function components
// useContext, useReduceer, useRef - beyond the scope of this



// *** INSTALLING REACT ***:
// $ npm install react react-dom webpack

// more updated command to start react app:
// $ npx create-react-app {name}

// on js file, imports at top (library names in singular quotes):
// import React from 'react'
// import ReactDOM from 'react-dom'

// next, there's App component; stores all sub-components in the React file; outputs JSX

// Below example:

function App() {
    return <div>Hello, world</div>
}

ReactDOM.render(App, document.getElementById('root'));

//*** the above will replace everything in div with id of root with what is inside App component!! ***

// COMPONENTS in React = the building blocks of it/ atomic units of it
// think of it as a building block
// components can contain other components, and will always role up to the App component
// components must return JSX
// JSX has an 'HTML-like' syntax
// Since JSX isn't actual JavaScript, that's why webpack is needed; it compiles all of the JSX components into a single JS file called 'bundle.js' which the browser can then run
// always have to export component from file; example of a component below:

import React from 'react'

export default function Book(props) {
    return <li>{props.title}</li>
}

// props allow us to use data from previous components

// STATE - a dynamic form of storage that lives inside of our components

// find out whether use state hook is still in use