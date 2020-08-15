# Notes on Chapter 9 - Suspense

An _ErrorBoundary_ is a Class component from React where you use the life cycle method _getDerivedStateFromError_ that will catch any errors reported from any of its children.
This allows us to compose these ErroryBoundary components around other components in our applications and scope errors to their respective components.

When passing props to be rendered from a React Class component. In the render() function destructure your props from this.state.props and rename the one that you know is component to its name but with a capital letter for the first letter. Example:

```
// React Class Component setup
render() {
  const { error } = this.state;
  const {children, fallback:Fallback} = this.state.props;
  if (error) return <Fallback error={error}/>;
}
```

without fallback:Fallback when you return <fallback /> an error would occur suggesting components must start with a capital letter if to be rendered

React Suspense solves the issue of handling data loading in React. A Suspense component can wrap a component and when a Promise is thrown and it is in pending it state, the Suspense component will render a fallback loading component. When the promise resolves the status of the promise will be resolved and the component that was Suspended will render.

Suspenseful Datasource needs to provide a function that handles all the states associated with loading data: pending, success, and error.
We use a closure to ensure that requests do not step on each other.

Suspense is likely to undergo many changes before it is released to everyone. Although the syntax may change, the fact remains that whatever API is decided upon for Suspense will be handling the states of loading data: pending, success, and error.

Fiber is the reconciliation algorithm for React. A renderer is the part of the library that handles rendering and the Reconciler is the part of the library that manages updates when they occur

React separated the Renderer and the Reconciler and the Renderer can be fed to the Reconciler. So the reconciler is in the React package while the render targets are in their own librarys, ReactDOM, React Native, and React 360.

The rewrite of Fiber takes a more asynchronous approach to updating the DOM. Updating the DOM is synchronous and in the beginning most libraries we were rewriting the whole DOM on rerender when an update occurs. Fiber takes an asynchronous approach where it makes a copy of the DOM, figures out where changes need to occur, and will do those. Like in an unordered list of the update was to change red text to green text. Instead of rewriting the whole li element, it would just replace its child of red text, with a new node of green text.

Another focus of the rewrite of Fiber was making this asynchrounous update even faster. By focusing on more asynchrounous updates Fiber opens to door to more perf gains by prioritizing these units of work. React calls a fiber a unit of work, which is an object that needs to be reconciled. The algorithm will attempt to prioritize more important units of work where possible.

Point is React team is always working on ways to make React faster.
