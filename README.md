# My Learnings:

## [App Demo](http://varshathirumakil.com/pet-me)

## Introduction:

1. react-dom allows react to be rendered to the browser. react native and reactdom share the react package

2. Components: Think about component as a rubber stamp/markups

3. Render: use react dom to stamp < App />

4. Composibility model of React:
   Ability to put components inside components inside components...

5. Variable verity - can accept extra params (div having many child divs)

6. Destrucutring props

## Tools:

1. Install prettier and eslint
2. Parcel - easy to setup, less power
3. Webpack - more power, hard to setup
4. wondering how parcel/prettier commands get executed? look for hidden .bin folder inside node_modules
5. eslintrc.json
   eslint recommended - gospel of truth

## Setting state with Hooks:

1. 2 way data binding is not free everything need to be explicitly specified.
2. useState is creating a hook first thing is default and second is updater function
3. Hook is offering setState for functional components
4. Never put conditional or unpredicatable like if, for for hooks
5. Added Custom hooks

## Effects:

1. useEffect is scheduling this to happen after the render happens. if dependencies = [] (effect runs only once)
2. Hooks seems easier than class lifecyle methods (thats why hooks got introduced)
3. We dont want to slow down the first render

## Async & Routing:

1. KEY PATTERN IN REACT: one way data flow (parent to child -> child..) flows down and not up.
   Easier to debug issues. it is possible (hard) to do it but dont adapt that pattern (only for lib authors)
2. Using reach router here - very a11y friendly
3. pre formatted code Json.stringify(props, null, 4) - router gives you info

## Classes

1. Details page is a class component now.
2. render is a hard requirement.
3. componentDidMount is just like useEffect
4. this.props is immutable and is info you get form parent class
5. this.state master of its own state
6. this.setState does shallow merge Object.assign(old, new)
7. arrow fn does not create context (this is very important)
8. Parcel already has all the babel configs to transpile our code but some features are experimental.. in that case we need custom babel configs to say use our configs instead of yours for this particular feature
9. bind could be used for this context
   but it is verryyyyy expensive(chrome fixed it recently) Note: ont use bind instead use arrow fn to preserve this context
10. rule of thumb, using event listeners? use arrow function
11. getDerivedStateFromProps does exactly what it sounds like: it allows you to accept data from a parent and get state that is derived from it. In this case, we're removing the superfluous photos and just keeping the ones we want

## Error Boundaries:

1. error bounderies cannot be done using hooks because they need lifecycle methods

## Context:

1. state and updater - Redux is hard so we use context to as datastore
2. use it for global app state...
3. be aware that you are changing the explicit nature of react and making it implicit

## Portal:

Experiment with it

## Resources:

1. Interesting Fonts: Dank mano and Fira code
2. [instrucutor-notes](https://btholt.github.io/complete-intro-to-react-v5/)
