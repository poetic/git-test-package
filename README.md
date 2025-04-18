# git-test-package

POC package for testing out the usage and viability of the git package system using npm.

## Installation

Install the package via npm:

```bash
npm install git-test-package
```

## Usage

### Importing the `sum` function

```ts
import { sum } from 'git-test-package';

const numbers = [1, 2, 3, 4, 5];
const result = sum(numbers);
console.log(result); // Output: 15

const nestedNumbers = [1, 2, [3, 4], 5];
const nestedResult = sum(nestedNumbers);
console.log(nestedResult); // Output: 15
```

## Scripts

- `npm run build`: Builds the package using `tsup`.
- `npm test`: Runs the test suite using `ts-node`.

## Development

### Prerequisites

- Node.js
- npm

### Setup

1. Clone the repository:

   ```bash
   git clone git@github.com:poetic/git-test-package.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running Tests

```bash
npm test
```

## License

This project is licensed under the MIT License.
