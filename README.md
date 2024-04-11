# Project Documentation

## Overview

![Pokedexel banner](https://i.imgur.com/9mHULEc.png)

This project is a web application built with [Next.js](https://nextjs.org/). The application provides a platform for users to search and view information about Pokémon.

## Key Features

- **Search Bar**: Users can search for Pokémon by name. The search bar provides autocomplete suggestions as the user types.
- **Pokémon Details**: When a user selects a Pokémon from the search results, they are redirected to a detailed view of the selected Pokémon.
- **Lazy Loading**: The search results are lazily loaded, improving performance by only loading data as needed.

## Project Structure

The project is structured into several key components:

- `SearchBar.tsx`: This component handles user input for searching Pokémon. It also manages the display of search results.
- `CardGrid.tsx`: This component is responsible for displaying Pokémon in a grid format.
- `PokeType.tsx`: This component displays the type of a Pokémon and applies corresponding styles based on the type.

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/cerkvenihaxel/pokedex_fe
cd pokedex_fe
npm install
```

Then, start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

Contributions are welcome! Please read the contributing guidelines before making any changes.

## License

This project is licensed under the terms of the MIT license.