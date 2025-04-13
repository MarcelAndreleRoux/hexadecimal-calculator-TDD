export default function Home() {
  return (
    <div className="calculator">
      <div data-testid="calculator-display">
        <span data-testid="display-value">0</span>
        <span data-testid="error-message" className="error"></span>
      </div>
      {/* You'll add buttons here later */}
    </div>
  );
}
