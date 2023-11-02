# Snake-AI

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Road Map](#road-map)
4. [Installation](#installation)
5. [How It Works](#how-it-works)
6. [Contributing](#contributing)
7. [License](#license)

## Introduction
Snake-AI is a 2D game built using Svelte Kit, featuring a classic snake gameplay. The game has been designed with a focus on providing an engaging and responsive gaming experience, accessible on both desktop and mobile platforms. Currently, the game does not include an AI feature, but the goal is to implement a proficient AI that can play the game intelligently. You can play the game online [here](https://archyn.com.tr/games/snake).

## Features
- Classic snake gameplay
- Responsive design for mobile and desktop
- Efficiently designed using a doubly linked list algorithm for enhanced performance

## Road Map
### Version 1.0.0 (Current)
- Basic gameplay with user-controlled snake
- Responsive design for various screen sizes

### Version 1.1.0 (Upcoming)
- Implementation of AI feature for autonomous gameplay
- Enhanced graphics and sound effects
- Integration of leaderboard and achievements

### Future Versions
- Multiplayer support
- Additional game modes and levels


## Installation
To run the game locally, follow these steps:

1. Clone the repository: `git clone https://github.com/ISmillex/Snake-Ai.git`
2. Navigate to the project directory: `cd Snake-ai`
3. Install dependencies: `npm install`
4. Run the application in developer mode: `npm run dev -- --host`
5. Open your browser and go to `http://localhost:5173` to view the game.`

## How It Works
The game utilizes a doubly linked list algorithm for efficiently managing the snake's body and movements. This algorithm ensures constant time complexity for insertion and deletion operations, making the gameplay smooth and responsive even as the snake grows longer. Additionally, the game's design emphasizes a responsive approach, ensuring seamless gameplay across various screen sizes without compromising performance. The doubly linked list structure allows for easy traversal and manipulation of the snake's body, ensuring a seamless gaming experience for players.

- Moving the Snake: O(1) - Moving the snake involves pushing a new head and popping the tail, which are both constant time operations.
- Collision detection: O(1) - Detecting collision involves checking color of the cell of the board which is the next position of head node, therefore resulting in constant time complexity.

## Contributing
To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.