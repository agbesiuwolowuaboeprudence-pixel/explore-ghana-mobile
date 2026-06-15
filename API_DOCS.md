# API Documentation

## Base URL
```
http://localhost:8080/api
```

## Authentication

All authenticated endpoints require a Bearer token in the Authorization header:
```
Authorization: Bearer {token}
```

## Endpoints

### Authentication
- `POST /auth/login` - User login
- `POST /auth/signup` - User registration
- `POST /auth/logout` - User logout
- `POST /auth/refresh` - Refresh token
- `POST /auth/verify-email` - Verify email
- `POST /auth/request-password-reset` - Request password reset
- `POST /auth/reset-password` - Reset password

### Destinations
- `GET /destinations` - List destinations (paginated)
- `GET /destinations/:id` - Get destination details
- `GET /destinations/search?q={query}` - Search destinations
- `GET /destinations/featured` - Get featured destinations
- `GET /destinations/nearby?latitude={lat}&longitude={lng}&radius={km}` - Get nearby destinations

### Experiences
- `GET /experiences` - List experiences (paginated)
- `GET /experiences/:id` - Get experience details
- `GET /experiences/search?q={query}` - Search experiences

### Guides
- `GET /guides` - List guides (paginated)
- `GET /guides/:id` - Get guide details
- `GET /guides/search?q={query}` - Search guides
- `GET /guides/nearby?latitude={lat}&longitude={lng}&radius={km}` - Get nearby guides

### Hotels
- `GET /hotels` - List hotels (paginated)
- `GET /hotels/:id` - Get hotel details
- `GET /hotels/search?q={query}` - Search hotels
- `GET /hotels/nearby?latitude={lat}&longitude={lng}&radius={km}` - Get nearby hotels

### Bookings
- `POST /bookings` - Create booking
- `GET /bookings/my` - Get user bookings
- `GET /bookings/:id` - Get booking details
- `PUT /bookings/:id` - Update booking
- `POST /bookings/:id/cancel` - Cancel booking

### Reviews
- `POST /reviews` - Create review
- `GET /reviews?destinationId={id}` - Get reviews for destination
- `PUT /reviews/:id` - Update review
- `DELETE /reviews/:id` - Delete review

### Messages
- `POST /messages` - Send message
- `GET /messages/:userId` - Get messages with user
- `PATCH /messages/:id/read` - Mark message as read
- `GET /chat-rooms` - Get chat rooms
- `POST /chat-rooms/:roomId/messages` - Send chat room message

### Users
- `GET /users/profile` - Get user profile
- `PUT /users/profile` - Update profile
- `POST /users/profile/image` - Upload profile image
- `POST /users/change-password` - Change password
- `DELETE /users/account` - Delete account
- `GET /users/:id` - Get user profile by ID

## Response Format

### Success Response
```json
{
  "success": true,
  "message": "Success message",
  "data": {},
  "timestamp": "2024-06-15T12:00:00Z"
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error message",
  "timestamp": "2024-06-15T12:00:00Z"
}
```

### Paginated Response
```json
{
  "success": true,
  "message": "Success message",
  "data": [],
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "totalItems": 100,
    "totalPages": 10
  },
  "timestamp": "2024-06-15T12:00:00Z"
}
```

## Query Parameters

### Pagination
- `page` - Page number (default: 1)
- `pageSize` - Items per page (default: 10)

### Filtering
- `category` - Filter by category
- `region` - Filter by region
- `minPrice` - Minimum price
- `maxPrice` - Maximum price
- `sortBy` - Sort field
- `order` - Sort order (asc/desc)

### Location
- `latitude` - Latitude coordinate
- `longitude` - Longitude coordinate
- `radius` - Search radius in kilometers

## Error Codes

- `200` - OK
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error
