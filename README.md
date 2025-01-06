# Carbon Footprint Calculator - UI

This project is a user-friendly interface designed to calculate and track your carbon footprint, allowing you to enter activities, understand the environmental impact of your daily actions, and identify ways to reduce emissions.

## License & Usage

> **Note:**  
> This project is for demo purposes and is not licensed for reuse or modification. All rights are reserved.

## Live site:

- https://carbon-calculator-ui.vercel.app/

![full_600](https://github.com/user-attachments/assets/ae7d60c7-3e17-402c-9df5-d0c53b2a2c31)

## Technologies

### Core Technologies

- **TypeScript:** Ensures type safety and reduces errors.
- **Chakra UI:** Builds consistent and accessible UI components.
- **React Router:** Handles app navigation.

### Form and State Management

- **React Hook Form:** Simplifies form management.
- **Zod:** Validates schemas with React Hook Form.
- **TanStack React Query:** Manages async state.
- **Zustand:** Used for global state management.

### Testing Tools

- **Jest & React Testing Library:** These tools are used for unit tests and component testing.
- **Playwright:** For end-to-end testing of the app's user interactions.
- **MSW (Mock Service Worker):** Mocks API calls for testing and development environments.

## Features

### User Interface

- Designed the UI with **Figma**.
- Built with **Chakra UI** as design system.
- Supports **light/dark themes**.
- Added **Framer Motion** for smooth and modern micro-interactions.
- Fully **responsive** for tablets, desktops, and 4K displays.

### Development Workflow

- Followed **Test-Driven development** creating unit tests when developing the components.
- Used **Prettier** as a code formatter to maintain consistent code style.
- Used **Storybook** to align components with Figma designs.
![storybook_600](https://github.com/user-attachments/assets/06c1cc79-7245-45c4-a24f-7bf3ed129503)

### Accessibility & Feedback

- Ensured **accessibility** with semantic HTML and keyboard support.
- Added **error boundaries** and **toast notifications** for clear feedback.
- Included **loading skeletons** for better user experience.

### Continuous Integration

- This project is set up with a CI pipeline (github actions) that automatically runs tests, lints the code, and checks spelling on each push to any branch. This ensures code quality and consistency throughout the development process.

### Design Patterns

- **Compound Components:** The `Section` component follows the Compound Components pattern. It includes `Section.Header`, `Section.Content`, and `Section` itself, which work together to create flexible and customizable UI structures.

- **Container/Presentational Pattern:** This pattern divides the responsibility between components that handle logic and those focused solely on the UI. Presentational components manage the visual elements and have separate Storybook stories, while container components are responsible for managing state and handling business logic.

## Running the Web App

Follow these steps to get the app up and running locally.

### Prerequisites

Before starting, ensure the following are installed:

- **Node.js** version 20.x or higher (recommended).
- **pnpm** version 9.x or higher (recommended).

If you don't have these installed, check the installation guides:  
[Node.js installation guide](https://nodejs.org/en/download/)  
[pnpm installation guide](https://pnpm.io/installation)

### Installation Steps

1. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/oscarbastoscorella/carbon-calculator-ui
   cd carbon-calculator-ui
   ```

2. Install the dependencies:

   ```sh
   pnpm install
   ```

### Running the Project

To start the development server:

```sh
pnpm dev
```

To lint the code:

```sh
pnpm lint
```

To run unit tests:

```sh
pnpm test
```

To build the project for production:

```sh
pnpm build
```

### E2E Tests

Playwright is used for end-to-end testing of the application.

#### Run Playwright Tests

To run the Playwright tests with headless mode, use:

```sh
pnpm playwright test
```

#### This command will run all the Playwright tests.

To run the Playwright tests with UI mode, use:

```sh
pnpm playwright test --ui
```
![e2e_600](https://github.com/user-attachments/assets/06a3672b-d00a-4ce8-97a0-e3ddb98da379)


#### Auto Generate Tests with Codegen

Playwright can also be used to automatically generate tests. To do this, run:

> [!TIP]
> Remember to start dev server and then run the codegen

```sh
pnpm codegen
```

## Author

- **Oscar Bastos** - [GitHub](https://github.com/oscarbastoscorella)
