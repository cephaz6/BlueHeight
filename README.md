# BlueHeight API Marketplace

## Description
API Marketplace is a platform where users can buy and sell APIs (Application Programming Interfaces). It provides a marketplace for developers to showcase their APIs and for consumers to discover and purchase APIs for their projects.

## Features
- User authentication and authorization
- CRUD operations for APIs (Create, Read, Update, Delete)
- Transaction management for purchasing APIs
- Review and rating system for APIs
- Search and filter functionality for discovering APIs
- User profile management

## Technologies Used
- Java (Spring Boot)
- PostgreSQL
- Thymeleaf (for server-side templating)
- HTML/CSS/JavaScript
- Maven (for dependency management)
- Git (for version control)

## Setup Instructions
1. Clone the repository: `git clone https://github.com/yourusername/api-marketplace.git`
2. Navigate to the project directory: `cd api-marketplace`
3. Install dependencies: `mvn clean install`
4. Configure PostgreSQL database:
    - Create a new database named `api_marketplace`
    - Update `application.properties` with your database credentials
5. Run the application: `mvn spring-boot:run`
6. Access the application in your web browser: `http://localhost:8080`

## Usage
- Register as a new user or log in if you already have an account.
- Browse through the available APIs, search by title or tags, and filter by category.
- View details of an API to see its description, price, and documentation link.
- Purchase an API by adding it to your cart and completing the transaction.
- Leave a review and rating for an API after using it.
- Manage your profile information and view transaction history.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
For any inquiries or feedback, feel free to contact us at [your-email@example.com](mailto:your-email@example.com).
