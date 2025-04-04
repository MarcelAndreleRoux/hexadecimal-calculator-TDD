const hexRegex = /^[0-9A-Fa-f]+$/;

// ------------------------------- Add -------------------------------

export function hexAdd(a: string, b: string): string {
  if (a.length > 2 || b.length > 2) {
    throw new Error("Wrong input size larger than 2 digits");
  }

  if (!hexRegex.test(a) || !hexRegex.test(b)) {
    throw new Error("Wrong input type");
  }

  const decimalA = parseInt(a, 16);
  const decimalB = parseInt(b, 16);

  const sum = decimalA + decimalB;

  if (sum < 0) {
    throw new Error("Result is negative");
  }

  const hexResult = sum.toString(16).toUpperCase();
  if (hexResult.length > 4) {
    throw new Error("Result exceeds maximum length of 4 digits");
  }

  return hexResult;
}

// ------------------------------- Subtract -------------------------------

export function hexSubtract(a: string, b: string): string {
  // larger than 2 digits
  if (a.length > 2 || b.length > 2) {
    throw new Error("Input number must be up to 2 digits");
  }

  if (!hexRegex.test(a) || !hexRegex.test(b)) {
    throw new Error("Wrong input type");
  }

  // convert hex to decimal and do addition, check result
  const decimalA = parseInt(a, 16);
  const decimalB = parseInt(b, 16);
  const sum = decimalA - decimalB;

  // Make sure that the result isn't zero
  if (sum < 0) {
    throw new Error("Result is negative");
  }

  // convert decimal to hex
  const hexSum = sum.toString(16).toUpperCase();

  // Validate 4 digits
  if (hexSum.length > 4) {
    throw new Error("Output was to large");
  }

  return hexSum;
}

// ------------------------------- Divide -------------------------------

export function hexDivide(a: string, b: string): string {
  // larger than 2 digits
  if (a.length > 2 || b.length > 2) {
    throw new Error("Input number must be up to 2 digits");
  }

  if (!hexRegex.test(a) || !hexRegex.test(b)) {
    throw new Error("Wrong input type");
  }

  // convert hex to decimal and do addition, check result
  const decimalA = parseInt(a, 16);
  const decimalB = parseInt(b, 16);

  if (decimalB == 0) {
    throw new Error("Can't devide by zero");
  }

  // deviding and rounding so that there is no decimal points
  const sum = Math.floor(decimalA / decimalB);

  if (sum < 0) {
    throw new Error("Result is negative");
  }

  // convert decimal to hex
  const hexSum = sum.toString(16).toUpperCase();

  // Validate 4 digits
  if (hexSum.length > 4) {
    throw new Error("Output was to large");
  }

  return hexSum;
}

// ------------------------------- Multiply -------------------------------

export function hexMultiply(a: string, b: string): string {
  // larger than 2 digits
  if (a.length > 2 || b.length > 2) {
    throw new Error("Input number must be up to 2 digits");
  }

  if (!hexRegex.test(a) || !hexRegex.test(b)) {
    throw new Error("Wrong input type");
  }

  // convert hex to decimal and do addition, check result
  const decimalA = parseInt(a, 16);
  const decimalB = parseInt(b, 16);
  const sum = decimalA * decimalB;

  if (sum < 0) {
    throw new Error("Result is negative");
  }

  // convert decimal to hex
  const hexSum = sum.toString(16).toUpperCase();

  // Validate 4 digits
  if (hexSum.length > 4) {
    throw new Error("Output was to large");
  }

  return hexSum;
}
