# MealMate

MealMate is a dynamic and interactive community food sharing platform aimed at reducing food surplus and fostering a culture of sharing. The website enables users to donate, request, and manage food items with an intuitive interface and robust security features.

## Purpose
The purpose of MealMate is to create a platform where individuals and organizations can contribute to minimizing food waste by sharing surplus food with those in need. It promotes community engagement and sustainable living.

## Live URL
[MealMate Live Demo](https://food-sharing-client-8354b.web.app) 

## Key Features

### General Features:
- **Responsive Design:** Fully responsive for mobile, tablet, and desktop devices.
- **Interactive UI:** Built with Tailwind CSS for an engaging user experience.

### User Functionality:
1. **Authentication:**
   - Email/Password-based login and registration.
   - Google login option.
   - JWT-based security for private routes.
2. **Food Management:**
   - Add, update, and delete food items.
   - View all available foods with sorting and searching features.
   - Request food items and manage food requests.
3. **Dynamic Layout:**
   - Toggle between two-column and three-column layouts on the Available Foods page.
4. **Detailed Views:**
   - View food details and request food with pre-filled modal forms.

### Admin Functionality:
- **Manage Food:**
   - Update and delete food items added by the user.

### Advanced Features:
- **Security:** Secure Firebase and MongoDB credentials using environment variables.
- **Animations:** Framer Motion for smooth transitions.
- **Optimized Fetching:** TanStack Query for API calls with mutation support.

## NPM Packages Used

- **React**: Frontend library for building the user interface.
- **Firebase**: Authentication and hosting services.
- **React Router DOM**: Navigation and routing.
- **TanStack Query**: Data fetching and state management.
- **Framer Motion**: Animation library for React.
- **Tailwind CSS**: Utility-first CSS framework.
- **Axios**: For API requests.
- **jsonwebtoken**: To generate and verify JWT tokens.
- **dotenv**: For managing environment variables.
- **sweetalert2**: Beautiful alerts for user notifications.

## Additional Details
- **Sorting and Searching:** Sort foods by expiry date and search by food name.
- **Modular Codebase:** Designed for scalability and maintainability.
- **Secure Configuration:** Sensitive keys and credentials are managed through `.env` files.

## Contribution
Contributions are welcome! Feel free to fork the repository and create pull requests with improvements or new features.

---


