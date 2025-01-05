# React 18 useEffect Cleanup and Automatic Batching Bug

This repository demonstrates a subtle bug that can occur in React 18 due to automatic batching of state updates. The bug involves updating state within the cleanup function of a `useEffect` hook, which might not always trigger a re-render as expected.  The solution involves using `useRef` to avoid unnecessary state updates within the cleanup function.

## Bug Description

The original `MyComponent` updates its state using `setCount`. However, when the component unmounts, the cleanup function attempts to modify the state.  Because of React's batching, this update might not cause a re-render, leading to unexpected behavior or potential memory leaks.

## Solution

The solution uses `useRef` to track the component's mounted state without triggering a re-render.  This prevents state updates in the cleanup function from attempting to re-render a component that is already unmounted. 

## How to reproduce

Clone the repository, run `npm install`, and then `npm start`.  Observe the console output as you mount and unmount the component. You might need to use React DevTools to better visualize the changes to the state.