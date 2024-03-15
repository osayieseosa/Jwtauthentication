# Authentication

This project contains the necessary components and logic for my login and registration form it contains custom validation, password reset, email verification and jwt authorization

## Components

### LoginForm

The `Signin` component is responsible for rendering the login form and handling user input. It uses the `useState` hook to manage the state of the form fields and the `useContext` hook to access the authentication context.

### RegistrationForm

The `Signup` component is responsible for rendering the registration form and handling user input. It uses the `useState` hook to manage the state of the form fields and the `useContext` hook to access the authentication context.

### PasswordResetForm

The `PasswordResetForm` component is responsible for rendering the password reset form and handling user input. It uses the `useState` hook to manage the state of the form fields and the `useContext` hook to access the authentication context.

## Logic

### useAuth

The `useAuth` custom hook is responsible for managing the authentication state and providing access to the authentication context. It uses the `useState` hook to manage the authentication state and the `useContext` hook to provide access to the authentication context.

### useLogin

The `useLogin` custom hook is responsible for handling the login process. It uses the `useAuth` hook to access the authentication context and the `useHistory` hook to navigate to different pages.

### useRegister

The `useRegister` custom hook is responsible for handling the registration process. It uses the `useState` for error handling and the `axios` for sending user data to the backend for account creation.

### usePasswordReset

The `usePasswordReset` custom hook is responsible for handling the password reset process. It uses the `useAuth` hook to access the authentication context and the `useHistory` hook to navigate to different pages.

## Testing

The authentication folder includes tests for each component and hook. These tests can be run using the `npm test` command.

## Deployment

The `npm run deploy` command can be used to deploy the application to the production environment. This command will build the app for production, optimize the build for the best performance, and deploy the app to the production environment.
