App Structure

![image](https://user-images.githubusercontent.com/56807795/236699368-5cb394fa-3fa9-4e2c-90e1-e18e1910504b.png)



## Getting Started

1. Install [Visual Studio Code](https://code.visualstudio.com/download) on your machine if you haven't already.
2. Install [Node.js](https://nodejs.org/en/download/) on your machine if you haven't already.
3. Clone the repository to your local machine using `git clone https://github.com/xAlidev/board.git
`.
4. Navigate to the project's root directory in your terminal.
5. Run `npm install` to install all project dependencies.
6. Run `npm run dev` to start the development server. The project should be accessible at http://localhost:3000.

## Collaborating

All contributions should be made to the `dev` branch through pull requests and commits.

## Libraries Used

The project is built with React 18.2.0 and Next.js 13.4.1, using the following libraries:

- Tailwind CSS: 3.3.2
- Framer Motion: 10.12.8
- Prisma: 4.13.0
- HeadlessUI: 1.7.14

## Using Prisma

For testing and development, we are using Prisma with SQLite. To use Prisma, follow these steps:

1. Install Prisma as a development dependency by running `npm install prisma --save-dev`.
2. Run `npx prisma db push` to create the database and push the schema to the database.
3. Run `npx prisma generate` to generate the Prisma client.
4. Open Prisma Studio by running `npx prisma studio`. Prisma Studio should be accessible at http://localhost:5555.

## Support

Thank you for contributing to the project. If you have any questions or encounter any issues, please reach out to the project maintainers.

