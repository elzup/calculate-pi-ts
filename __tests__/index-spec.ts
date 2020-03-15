import { chudnovsky } from "../src";

test("Should have Greeter available", () => {
  expect(chudnovsky(2)).toMatchInlineSnapshot(`3.1415926535897936`);
  expect(chudnovsky(3)).toMatchInlineSnapshot(`3.1415926535897936`);
  expect(chudnovsky(4)).toMatchInlineSnapshot(`3.1415926535897936`);
  expect(chudnovsky(5)).toMatchInlineSnapshot(`3.1415926535897936`);
  expect(chudnovsky(10)).toMatchInlineSnapshot(`3.1415926535897936`);
});
