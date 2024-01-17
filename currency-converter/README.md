# React Currency Converter using ExchangeRate-API

This is a simple React-based currency converter application that utilizes the ExchangeRate-API for real-time exchange rate data.

## Features

- Convert currency values between different currency pairs.
- Fetch real-time exchange rates from the ExchangeRate-API.
- User-friendly interface for easy interaction.

## Technologies Used

- React: Front-end library for building user interfaces.
- ExchangeRate-API: External API for fetching real-time exchange rate data.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/react-currency-converter.git
    ```

2. Change into the project directory:

    ```bash
    cd react-currency-converter
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up your ExchangeRate-API key:

    - Obtain your API key by signing up at [ExchangeRate-API](https://www.exchangerate-api.com/).
    - Create a `.env` file in the project root and add your API key:

        ```env
        REACT_APP_EXCHANGE_RATE_API_KEY=your-api-key
        ```

### Usage

Run the application:

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:3000) in your browser to use the currency converter.

## API Reference

The application uses the ExchangeRate-API for fetching exchange rate data. Refer to the [ExchangeRate-API documentation](https://www.exchangerate-api.com/docs/pair-conversion-requests) for information on available endpoints and request formats.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to ExchangeRate-API for providing real-time exchange rate data.

### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
