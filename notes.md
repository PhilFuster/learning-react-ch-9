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
