import { useControlled } from "@reactuses/core";
import { useState } from "react";
import Layout from "../Layout";
import file from "./README.md";

const Page = () => {
  return (
    <Layout file={file}>
      <Demo />
    </Layout>
  );
};

export default Page;

const Demo = () => {
  const [value, setValue] = useControlled({ state: "" });
  const [value1, setValue1] = useState("controlled");
  const [controlledValue, setControlledValue] = useControlled({
    controlled: value1,
  });
  return (
    <div>
      <p>
        uncontrolled input
        <input
          value={value}
          onChange={(v) => {
            setValue(v.target.value);
          }}
          style={{ marginLeft: "2rem" }}
        />
      </p>
      <p>
        controlled input
        <input
          value={controlledValue}
          style={{ marginLeft: "2rem" }}
          onChange={(v) => {
            setControlledValue(v.target.value);
          }}
        />
      </p>
      <button
        onClick={() => {
          setValue1("controlled value");
        }}
      >
        SetControlledValue
      </button>
    </div>
  );
};
