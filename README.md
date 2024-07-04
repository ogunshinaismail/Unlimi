
# Unlimi

A simple project that shows the catalog of FragranceNet for Unlimi. The webpage shows the following data:

- S/N, Image, SKU, Name, Title, Description, Brand, Cost, Price, Quantity, and Size

# Built with

This project was built using the following technologies:

- ReactJS: A JavaScript library for building user interfaces, providing a component-based architecture.
- Vite: A build tool that provides a faster and leaner development experience for modern web projects.
- TypeScript: A statically typed superset of JavaScript that enhances code quality and developer productivity.
- TailwindCSS: A utility-first CSS framework for rapid UI development with customizable and reusable styles.
- Axios: A promise-based HTTP client for making HTTP requests to fetch or save data.
- Lucide-react: A library for using customizable and responsive icons in React applications.

# Features

- Search by title
- Select all checkbox
- Pagination

## Run Locally

Clone the project

```bash
  git clone https://github.com/ogunshinaismail/Unlimi.git
```

Go to the project directory

```bash
  cd unlimi
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Go to your browser and input

```bash
  http://localhost:5173/
```


## API Reference

#### Get all items

```http
  GET /products/public/catalog
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `supplier` | `string` | **Required**. Supplier name |
| `first` | `number` | **Optional**.  |
| `last` | `number` | **Optional**.  |
| `search` | `string` | **Optional**. Search query |


## Author

- [Ogunshina Ismail](https://github.com/ogunshinaismail)

