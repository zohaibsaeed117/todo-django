# Todo Django: A Simple Todo Application with Django REST Framework and React

This project is a simple todo application built as a learning exercise for the Django REST Framework. It features a React-based frontend for user interaction and a Django-powered backend for API and data management.

## Features

*   **User Authentication:** Secure user registration, login, and logout functionality using JWT (JSON Web Tokens).
*   **Todo Management:** Create, read, update, and delete todo items.
*   **RESTful API:** Django REST Framework provides a clean and well-structured API for interacting with the backend.
*   **Frontend Interface:** A user-friendly React interface for managing todos.
*   **Loading Indicators:** Visual feedback during API requests.
*   **Protected Routes:** Ensures only authenticated users can access the todo list.

## Technologies Used

*   **Frontend:**
    *   React
    *   React Router DOM
    *   Axios
    *   JWT Decode
*   **Backend:**
    *   Django
    *   Django REST Framework
    *   Python
    *   JWT (JSON Web Token)
    *   psycopg2-binary
    *   python-dotenv

## Installation

Follow these steps to set up the project locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/zohaibsaeed117/todo-djanog.git
    cd todo-djanog
    ```

2.  **Set up the backend:**

    *   Navigate to the `backend` directory:

        ```bash
        cd backend
        ```

    *   Create a virtual environment:

        ```bash
        python3 -m venv venv
        source venv/bin/activate  # On Linux/macOS
        # venv\Scripts\activate  # On Windows
        ```

    *   Install the required packages:

        ```bash
        pip install -r requirements.txt
        ```

    *   Apply migrations:

        ```bash
        python manage.py migrate
        ```

    *   Create a superuser:

        ```bash
        python manage.py createsuperuser
        ```

    *   Run the development server:

        ```bash
        python manage.py runserver
        ```

3.  **Set up the frontend:**

    *   Navigate to the `frontend` directory:

        ```bash
        cd ../frontend
        ```

    *   Install the dependencies:

        ```bash
        npm install
        ```

    *   Create a `.env` file in the `frontend` directory and configure the following environment variable:

        ```
        VITE_API_URL=http://localhost:8000/
        ```

        *   Adjust the `VITE_API_URL` to match your backend's address.

    *   Run the development server:

        ```bash
        npm run dev
        ```

## Usage

1.  **Access the application:** Open your browser and navigate to the address where the frontend is running (usually `http://localhost:5173`).

2.  **Register or Login:** Create a new user account or log in with existing credentials.

3.  **Manage Todos:** Once logged in, you can create, view, and delete todo items.

## Project Structure

```
todo-djanog/
├── backend/          # Django backend project
│   ├── api/          # Django app for the API
│   │   ├── admin.py  # Admin panel configuration
│   │   ├── apps.py   # App configuration
│   │   ├── models.py # Django models (Note)
│   │   ├── serializers.py # DRF serializers
│   │   ├── tests.py  # Unit tests
│   │   ├── urls.py   # API URL patterns
│   │   └── views.py  # API views
│   ├── backend/      # Django project settings
│   │   ├── asgi.py   # ASGI configuration
│   │   ├── settings.py # Project settings
│   │   ├── urls.py   # Project URL patterns
│   │   └── wsgi.py   # WSGI configuration
│   ├── manage.py     # Django management script
│   └── requirements.txt # Python dependencies
├── frontend/         # React frontend application
│   ├── public/       # Public assets (e.g., favicon)
│   ├── src/          # React source code
│   │   ├── api.js    # Axios instance with interceptor
│   │   ├── App.jsx   # Main application component
│   │   ├── components/ # Reusable components
│   │   │   ├── Note.jsx # Note component
│   │   │   ├── LoadingIndicator.jsx # Loading indicator component
│   │   ├── contants.js # Constants for access and refresh tokens
│   │   ├── main.jsx  # Entry point for React
│   │   ├── pages/    # React pages
│   │   │   ├── Login.jsx # Login page
│   │   │   ├── Register.jsx # Register page
│   │   │   ├── NotFound.jsx # Not found page
│   │   ├── styles/   # CSS styles
│   │   │   ├── form.css # Form styles
│   │   │   ├── loadingindicator.css # Loading indicator styles
│   │   │   ├── note.css # Note styles
│   ├── index.html    # HTML entry point
│   ├── package.json  # npm dependencies and scripts
│   ├── vite.config.js # Vite configuration
│   └── eslint.config.js # ESLint configuration
└── README.md       # This file
```

## Contributing

Contributions are welcome! Here's how you can contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, concise messages.
4.  Submit a pull request.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
