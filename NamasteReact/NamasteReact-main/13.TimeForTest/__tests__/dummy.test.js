//? import dummy.js to test it here.
import { Sum } from "../src/components/DummyTest";

// Test Suite is essentially a container or collection of multiple related test cases that are grouped together for execution as a single unit. A.k.a one test file.

//  Test case
test("Description of the test case", () => {
  //? logic of the test case
  // const result = filename(arg1, arg2)
  const result = Sum(3, 4);

  //? Assertion: Expected behaviour
  // expect(result).toBe(expectedResult)
  expect(result).toBe(7);
});


