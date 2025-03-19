# hexadecimal-calculator-TDD

We will develop a calculator application that can perform basic arithmetic functions (addition, subtraction, multiplication and division) on a set of hexadecimal numbers. 

The calculator’s only restriction is that it will only take inputs of up to 2 digits, return answers up to 4 digits, not return any negative answers, and not return any answers with decimal places.

# Functional Requirements:
Accept hexadecimal number inputs (up to 2 digits)
Convert hexadecimal to decimal for calculation purposes
Perform addition between two hexadecimal numbers
Perform subtraction between two hexadecimal numbers
Perform multiplication between two hexadecimal numbers
Perform division between two hexadecimal numbers
Validate input length (max 2 digits)
Validate output (max 4 digits, no decimal places)
Handle errors for negative results
Handle errors for decimal/fractional results
Display results in hexadecimal format
Clear the calculator display
User interface requirements (buttons for 0-9, A-F, operations)
Prevent division by zero
Provide a backspace/delete function for input correction
Allow consecutive operations (using the result for the next calculation)
Teaching the users of the calculator how it works
Provide visual feedback for invalid operations
Visual indication of currently active operation
Display history of recent calculations
Keyboard support for input

# Technical Stack:

Frontend Framework: Next.js with TypeScript
Styling: Tailwind CSS
Backend (History): Node.js server for API endpoints
Version Control: Git with GitHub repository
CI/CD: GitHub Actions for automated testing
IDE: Visual Studio Code
Containerization: Docker
Cloud Deployment: AWS services

