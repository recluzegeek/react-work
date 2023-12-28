# Inverse Data Flow with React

This simple React application demonstrates the concept of inverse data flow, particularly in the context of form handling. In inverse data flow, child components send data or updates to their parent components, enabling a more flexible and scalable architecture. Helpful in understanding the concept of state lifting in react.

## App Component

The `App` component serves as the parent component and holds the state for form data, including the user's name and email. It also renders child components, `NameInput` and `EmailInput`, passing down the necessary data and functions.

### State Management

The state is managed using the `useState` hook, and the `onChange` function is defined to handle updates to the form data. The `onChange` function takes two parameters: `fieldName` and `fieldValue`, allowing it to dynamically update the corresponding field in the form data.

## NameInput and EmailInput Components

These are the child components responsible for handling input fields related to the user's name and email. They receive data and functions from the `App` component via props.

### Handling Changes

The input fields in `NameInput` and `EmailInput` components trigger the `handleChange` function when modified. This function, in turn, communicates with the `App` component to update the relevant field in the form data.

### Displaying Input

The child components also display the current value of the input fields, providing real-time feedback to the user.

## How to Run the Application

1. Ensure you have Node.js and npm installed on your machine.
2. Clone the repository.
3. Navigate to the project directory in the terminal.
4. Run `npm install` to install dependencies.
5. Run `npm run dev` to start the development server.
6. Open your browser and go to `http://localhost:5173` to view the application.
