# People Experience Documentation
## _Overview_

People Experience is a self-managed web platform designed for the visualization and management of activities and projects. In its first version, the project includes a fully functional prototype of the administrative panel, which allows the management of the entities required for the operation of the administrative views. The platform is designed to be self-administered, meaning it does not require system support to update the content visible to end users, as administrators can control all aspects through the administrative panel.

The system is developed using the Next.js framework, providing a unified solution for both frontend and backend development in a single repository. For styles, TailwindCSS has been configured as the base, but the final user views are intended to be implemented using CSS Modules or plain CSS, due to the particular design specifications provided by the UI team.
For data persistence, PostgreSQL is used with the Prisma ORM to handle the database.


## Features
- Admin Panel: Allows management of users, projects, and activities. Administrators can add, edit, read, and delete any entity necessary for the platform's operation.
- Self-management: The platform is designed to be fully self-administered, eliminating the need for system support to update the views for end users.
- Unified Frontend and Backend: Uses Next.js to manage both frontend and backend in a single repository.
- Data Persistence: Uses PostgreSQL as the database system and Prisma as the ORM to facilitate database interactions.
- Styles and Design: Utilizes TailwindCSS for general styling, with plans to implement CSS Modules or plain CSS for the final user views.


## Installation
#### Prerequisites
Make sure the following prerequisites are installed:
- Node.js
- PostgreSQL (with a configured database for the project)

#### Steps to Install
1. Clone the project:
```sh
git clone https://github.com/inkua/peopleexperience-v01.git
```
2. Install dependencies: Navigate to the project directory and run:
```sh
npm install
```
3. Update environment variables: Create or update the .env file with the appropriate settings for your local environment. This includes database credentials and other necessary configurations for the project to function.

> POSTGRES_PRISMA_URL=""
> POSTGRES_URL_NON_POOLING=""

4. Start the project: To run the project in development mode, execute:
```sh
npm run dev
```
5. Access the project: Once the server is running, open your web browser and go to the URL provided in the console (by default, it will be http://localhost:3000).

## Project Structure
The project follows a structure suggested by the contributors, but some areas for improvement have been identified to make it more efficient. The current structure is organized within a single repository for both frontend and backend, which may be suitable for an initial prototype, but it is not the best option for scalability and separation of responsibilities.

#### Improvement Suggestions:
- Separation of Frontend and Backend: To improve organization and allow the frontend and backend teams to work more independently, it is recommended to split the project into two separate repositories. This could be achieved by creating a standalone backend server that communicates with the frontend via a REST API.
- Use of Docker: As an alternative, the project could benefit from containerization using Docker. This would allow the frontend and backend logics to be separated into distinct containers, facilitating deployment and scalability.
 

## Recommendations for Improvement
Although the current prototype is functional, the following practices and improvements should be considered as the project progresses:
1. Review of Project Structure: While the current project structure was suggested by the initial collaborators, a more efficient organization should be evaluated, especially for future scalability.
2. Separation of Responsibilities: Maintaining frontend and backend in separate repositories or at least in distinct Docker containers is a recommended practice for improving scalability, maintenance, and team collaboration.
3. Use of Popular Backend Technologies: Consider using popular backend technologies to make it easier to find volunteers or collaborators who can fill vacancies. It would also help in accessing more tutorials and documentation in case of issues.

## Project Development:
This project was developed following agile methodology principles, with a team organized by roles:
- Funtional Analyst : Emily Colina, [linkedin](https://www.linkedin.com/in/emily-colina-a37640145/)
- Technical Leader: Manuel Florez, [linkedin](https://www.linkedin.com/in/manuel14mds/), [GitHub Profile](https://github.com/manuel14mds)
- Graphic/UX/UI Designer: Diego Campos, [Behance](https://www.behance.net/degocam)
- Graphic/UX/UI Designer: Paulina San Martin, [linkedin](https://www.linkedin.com/in/paulipulisanmartin/), [Behance](https://www.behance.net/paulipulisanmartin)
- Graphic/UX/UI Designer: Paola Perez, [linkedin](https://www.linkedin.com/in/paolaperezperez/), [Behance](https://www.behance.net/paolaperezp)
- Software Developer: Felipe Blanco, [linkedin](https://www.linkedin.com/in/felipe-blanco-muzzolon/), [GitHub Profile](https://github.com/felipeblanco114)
- Software Developer: Mauro Radino, [linkedin](https://www.linkedin.com/in/mauro-radino/), [GitHub Profile](https://github.com/mauroradino)
- Software Developer: Tiago Sousa, [linkedin](https://www.linkedin.com/in/tiago1820/), [GitHub Profile](https://github.com/tiago1820)
- Software Developer: Francisco Buddemeyer, [linkedin](https://www.linkedin.com/in/francisco-buddemeyer-izzo/), [GitHub Profile](https://github.com/FranBudde)

> Thank you for taking the time to read through this README. We hope that this project will be helpful and beneficial for your needs. Your support and interest mean a lot to us, and we’re excited to see how this project might contribute to the great work being done. If you have any questions or need further assistance, please don't hesitate to reach out.

[![N|inkua](https://inkua.de/web/image/1324-2e45f650/rgb-1000px-blanco.webp)](https://inkua.de)
