import { getDifferenceKey } from "../../src/utils/object";

describe("utils/object", () => {
  it("getDifferenceKey / differentKey should be defined and get different", () => {
    const obj1 = { name: "name", age: 5 };
    const obj2 = { name: "name", age: 6 };

    const differentKey = getDifferenceKey(obj1, obj2);

    expect(differentKey).toBeDefined();
    expect(differentKey).toBe("age");
  });

  it("getDifferenceKey / differentKey should null", () => {
    const obj1 = { name: "name", age: 5 };
    const obj2 = { name: "name", age: 5 };

    const differentKey = getDifferenceKey(obj1, obj2);

    expect(differentKey).toBe(null);
  });

  it("getDifferenceKey / differentKey should be defined and get different", () => {
    const obj1 = { name: "name", age: 5 };
    const obj2 = { name: "name", age: 5, salary: 5000 };

    const differentKey = getDifferenceKey(obj1, obj2);

    expect(differentKey).toBeDefined();
    expect(differentKey).toBe("salary");
  });

  it("getDifferenceKey / differentKey should be defined and get different", () => {
    const obj1 = { name: "name", age: 5, salary: 5000 };
    const obj2 = { name: "name", age: 5 };

    const differentKey = getDifferenceKey(obj1, obj2);

    expect(differentKey).toBeDefined();
    expect(differentKey).toBe("salary");
  });

  it("getDifferenceKey / differentKey should be defined and get different", () => {
    const obj1 = {};
    const obj2 = {};

    const differentKey = getDifferenceKey(obj1, obj2);

    expect(differentKey).toBeDefined();
    expect(differentKey).toBe(null);
  });
});
