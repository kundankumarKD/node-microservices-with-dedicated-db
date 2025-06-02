// test.js

// Function to test
function sum(a, b) {
  return a + b;
}

// Test cases
function runTests() {
  let passed = 0;
  let failed = 0;

  const tests = [
    { name: '1 + 2 = 3', actual: sum(1, 2), expected: 3 },
    { name: '2 + 2 = 4', actual: sum(2, 2), expected: 4 },
    { name: '5 + 0 = 5', actual: sum(5, 0), expected: 5 },
    { name: '2 + -2 = 0', actual: sum(2, -2), expected: 0 }
  ];

  tests.forEach((test, index) => {
    if (test.actual === test.expected) {
      console.log(`✅ Test ${index + 1} Passed: ${test.name}`);
      passed++;
    } else {
      console.log(`❌ Test ${index + 1} Failed: ${test.name}`);
      console.log(`   Expected ${test.expected} but got ${test.actual}`);
      failed++;
    }
  });

  console.log(`\nSummary: ${passed} passed, ${failed} failed`);

  // Optional: Exit with non-zero code on failure (for CI)
  if (failed > 0) process.exit(1);
}

runTests();
