# Hexadecimal Calculator - TDD Project

## Introduction
Welcome to the **Hexadecimal Calculator** project! This is an **intermediate-level** web development project designed to demonstrate **Test-Driven Development (TDD)** principles while integrating modern web technologies. The calculator performs basic arithmetic operations (**addition, subtraction, multiplication, and division**) on **hexadecimal numbers** while enforcing specific constraints on input and output sizes.

## Link to videos
[Hexadecimal Calculator Videos In Google Drive](https://drive.google.com/drive/folders/1TFR-G0vIEf2HSajJeT55M1OQ-Utagikz?usp=sharing)

## Project Constraints
- Inputs limited to **up to 2 digits** hexadecimal numbers
- Results limited to **up to 4 digits** hexadecimal numbers
- No negative results allowed (error handling implemented)
- No decimal/fractional results allowed (error handling implemented)

## Tech Stack & Purpose

### **Frontend** - [Next.js](https://nextjs.org/) with TypeScript
- Used for building a fast, server-rendered React-based UI
- Provides efficient client-side and server-side rendering for the calculator
- TypeScript ensures type safety throughout the application

### **Styling** - [Tailwind CSS](https://tailwindcss.com/)
- Utility-first CSS framework for responsive design
- Enables rapid UI development with consistent styling

### **Backend** - [Node.js](https://nodejs.org/)
- Handles the core business logic and arithmetic operations
- Processes API requests from the frontend

### **Version Control & CI/CD** - [Git & GitHub](https://github.com/)
- Manages source code and tracks changes using Git
- GitHub Actions automates testing and deployment

### **IDE** - [Visual Studio Code](https://code.visualstudio.com/)
- Recommended development environment with extensions for TypeScript and Next.js

### **Containerization** - [Docker](https://www.docker.com/)
- Used to package the application into a portable container
- Ensures consistency across different environments (local, staging, production)

### **Cloud Hosting** - [AWS](https://aws.amazon.com/)
- Used for deploying the final application in a scalable cloud environment

## Functional Requirements

### Core Calculator Functions
- Accept hexadecimal number inputs (up to 2 digits)
- Convert hexadecimal to decimal for calculation purposes
- Perform addition between two hexadecimal numbers
- Perform subtraction between two hexadecimal numbers
- Perform multiplication between two hexadecimal numbers
- Perform division between two hexadecimal numbers
- Display results in hexadecimal format

### Validation & Error Handling
- Validate input length (max 2 digits)
- Validate output (max 4 digits, no decimal places)
- Handle errors for negative results
- Handle errors for decimal/fractional results
- Prevent division by zero

### User Interface Requirements
- Buttons for digits 0-9 and A-F
- Operation buttons (+, -, *, /)
- Clear button to reset the calculator
- Backspace/delete function for input correction
- Allow consecutive operations (using the result for the next calculation)

## Project Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/MarcelAndreleRoux/hexadecimal-calculator-tdd.git
   cd hexadecimal-calculator-tdd
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Run the development server**
   ```sh
   npm run dev
   ```

4. **Run tests**
   ```sh
   npm test
   ```

5. **Run cypress tests**
   ```sh
   npx cypress open
   ```

## Test-Driven Development Approach

This project follows TDD principles:
1. Write tests first that define the expected behavior
2. Implement the minimum code needed to pass those tests
3. Refactor the code while ensuring tests still pass

Key test categories:
- Unit tests for core calculator functions
- Validation tests for input/output constraints
- Integration tests for the complete calculation flow
- UI component tests for interactive elements

## Deployment

The application is containerized with Docker and can be deployed to AWS using the provided CI/CD pipeline. The GitHub Actions workflow automates testing and deployment to ensure code quality.

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
