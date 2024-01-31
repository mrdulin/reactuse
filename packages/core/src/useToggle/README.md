# useToggle

React state hook that tracks value of a boolean

## Usage

```tsx title="/src/components/HelloCodeTitle.js"
import { useToggle } from "@reactuses/core";

export default () => {
  const [on, toggle] = useToggle(true);

  return (
    <div>
      <div>{on ? "ON" : "OFF"}</div>
      <button onClick={toggle}>Toggle</button>
      <button onClick={() => toggle(true)}>set ON</button>
      <button onClick={() => toggle(false)}>set OFF</button>
    </div>
  );
};
```