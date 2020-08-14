# Notes on Chapter 9 - Suspense

An _ErrorBoundary_ is a Class component from React where you use the life cycle method _getDerivedStateFromError_ that will catch any errors reported from any of its children.
This allows us to compose these ErroryBoundary components around other components in our applications and scope errors to their respective components.
