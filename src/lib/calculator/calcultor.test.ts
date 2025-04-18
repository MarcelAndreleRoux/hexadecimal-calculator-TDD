import { hexAdd, hexSubtract, hexDivide, hexMultiply } from "./index";

describe("Calculator Functions", () => {
  // ------------------------------- Add -------------------------------

  describe("hexAdd", () => {
    it("should add two hex numbers correctly", () => {
      expect(hexAdd("1", "1")).toBe("2");
      expect(hexAdd("A", "B")).toBe("15");
      expect(hexAdd("FF", "1")).toBe("100");
      expect(hexAdd("FF", "FF")).toBe("1FE");
    });
  });

  // Input Validation

  it("should throw an error for wrong input size", () => {
    expect(() => hexAdd("FFF", "1")).toThrow(
      "Input number must be up to 2 digits"
    );
    expect(() => hexAdd("1", "FFF")).toThrow(
      "Input number must be up to 2 digits"
    );
  });

  it("should throw an error for wrong input type", () => {
    expect(() => hexAdd("P", "1")).toThrow("Wrong input type");
    expect(() => hexAdd("1", "P")).toThrow("Wrong input type");
    expect(() => hexAdd("", "1")).toThrow("Wrong input type");
    expect(() => hexAdd("1", "")).toThrow("Wrong input type");
  });

  // Output Validation

  it("should throw an error if result exceeds 4 digits", () => {
    expect(() => hexAdd("FF", "FF01")).toThrow(
      "Input number must be up to 2 digits"
    );
  });

  // ------------------------------- Subtract -------------------------------

  describe("hexSubtract", () => {
    it("should subtact two hexadecimal numbers correctly", () => {
      expect(hexSubtract("1", "1")).toBe("0");
      expect(hexSubtract("F", "A")).toBe("5");
      expect(hexSubtract("F", "8")).toBe("7");
      expect(hexSubtract("FF", "1D")).toBe("E2");
    });
  });

  // Verify input
  it("should return an error if inputs are wrong", () => {
    expect(() => hexSubtract("FFF", "1")).toThrow(
      "Input number must be up to 2 digits"
    );

    expect(() => hexSubtract("1", "FFF")).toThrow(
      "Input number must be up to 2 digits"
    );
  });

  it("should throw an error for wrong input type", () => {
    expect(() => hexAdd("P", "1")).toThrow("Wrong input type");
    expect(() => hexAdd("1", "P")).toThrow("Wrong input type");
    expect(() => hexAdd("", "1")).toThrow("Wrong input type");
    expect(() => hexAdd("1", "")).toThrow("Wrong input type");
  });

  it("should return an error if the number is smaller than 0", () => {
    expect(() => hexSubtract("1", "A")).toThrow("Result is negative");
  });

  // Verify ouput
  it("should return an error if output is wrong", () => {
    expect(() => hexSubtract("FF", "FF01")).toThrow(
      "Input number must be up to 2 digits"
    );
  });

  // ------------------------------- Divide -------------------------------

  describe("hexDivide", () => {
    it("should divide two hexadecimal numbers correctly", () => {
      expect(hexDivide("1", "1")).toBe("1");
      expect(hexDivide("A", "B")).toBe("0");
      expect(hexDivide("FF", "5")).toBe("33");
      expect(hexDivide("FF", "2")).toBe("7F");
      expect(hexDivide("FF", "FF")).toBe("1");
    });
  });

  it("should return an error if inputs are wrong", () => {
    expect(() => hexDivide("FFF", "1")).toThrow(
      "Input number must be up to 2 digits"
    );

    expect(() => hexDivide("1", "FFF")).toThrow(
      "Input number must be up to 2 digits"
    );
  });

  it("should throw an error for wrong input type", () => {
    expect(() => hexAdd("P", "1")).toThrow("Wrong input type");
    expect(() => hexAdd("1", "P")).toThrow("Wrong input type");
    expect(() => hexAdd("", "1")).toThrow("Wrong input type");
    expect(() => hexAdd("1", "")).toThrow("Wrong input type");
  });

  it("should return an error if input is zero", () => {
    expect(() => hexDivide("FF", "0")).toThrow("Can't devide by zero");
  });

  it("should return an error if output is wrong", () => {
    expect(() => hexDivide("FF", "FF01")).toThrow(
      "Input number must be up to 2 digits"
    );
  });

  // ------------------------------- Multiply -------------------------------

  describe("hexMultiply", () => {
    it("should miltiply two hexadecimal numbers correctly", () => {
      expect(hexMultiply("10", "0")).toBe("0");
      expect(hexMultiply("FF", "0")).toBe("0");
      expect(hexMultiply("A", "B")).toBe("6E");
      expect(hexMultiply("FF", "1")).toBe("FF");
      expect(hexMultiply("FF", "FF")).toBe("FE01");
    });
  });

  it("should throw an error for wrong input type", () => {
    expect(() => hexAdd("P", "1")).toThrow("Wrong input type");
    expect(() => hexAdd("1", "P")).toThrow("Wrong input type");
    expect(() => hexAdd("", "1")).toThrow("Wrong input type");
    expect(() => hexAdd("1", "")).toThrow("Wrong input type");
  });

  it("should return an error if inputs are wrong", () => {
    expect(() => hexMultiply("FFF", "1")).toThrow(
      "Input number must be up to 2 digits"
    );

    expect(() => hexMultiply("1", "FFF")).toThrow(
      "Input number must be up to 2 digits"
    );
  });

  it("should return an error if output is wrong", () => {
    expect(() => hexMultiply("FF", "FF01")).toThrow(
      "Input number must be up to 2 digits"
    );
  });
});
