App Structure

![image](https://user-images.githubusercontent.com/56807795/236699368-5cb394fa-3fa9-4e2c-90e1-e18e1910504b.png)

Welcome to the project! We are glad to have you as a collaborator. Your contributions are valuable to the development of the project. Please follow the steps below to get started:

Getting Started
Install Visual Studio Code on your machine if you haven't already.
Install Node.js on your machine if you haven't already.
Clone the repository to your local machine using git clone <repository URL>.
Navigate to the project's root directory in your terminal.
Run npm install to install all project dependencies.
Run npm run dev to start the development server. The project should be accessible at http://localhost:3000.
Collaborating
All contributions should be made to the dev branch through pull requests and commits.

Libraries Used
The project is built with React 18.2.0 and Next.js 13.4.1, using the following libraries:

Tailwind CSS: 3.3.2
Framer Motion: 10.12.8
Prisma: 4.13.0
HeadlessUI: 1.7.14
Using Prisma
For testing and development, we are using Prisma with SQLite. To use Prisma, follow these steps:

Install Prisma as a development dependency by running npm install prisma --save-dev.
Run npx prisma db push to create the database and push the schema to the database.
Run npx prisma generate to generate the Prisma client.
Open Prisma Studio by running npx prisma studio. Prisma Studio should be accessible at http://localhost:5555.
Thank you for contributing to the project. If you have any questions or encounter any issues, please reach out to the project maintainers.
