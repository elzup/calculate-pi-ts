import { chudnovsky } from "../src";

test("Should have Greeter available", () => {
  expect(chudnovsky(10)).toMatchSnapshot();
});
