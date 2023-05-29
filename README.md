# NextJS Ecommerce App
This is a simple ecommerce app built with NextJS and Postgres.

## Setup with Docker (recommended)
```bash
docker-compose up
```

## Setup without Docker
1. [Install Postgres](https://www.postgresql.org/download/macosx/)
2. Install Node 16 
3. Install Yarn
4. Install dependencies
```bash
yarn
```

## Running the app
```bash
yarn dev
```

## Resources
- ✅ Searching the internet for answers (Stackoverflow, Google)
- ❌ Github Copilot (please turn this off in your IDE)
- ❌ Any AI based code generation tool

## Assignment
### Understanding
1. Run the sample application.
2. Click the example button on the home page and read through the documentation.
3. Don't forget to commit and push your code before the test is over!

### Tasks
#### 1. Server Side Pagination
The `/products` page displays a list of products. Currently, all products are loaded at once. This is not scalable. We need to implement server side pagination to load products in batches.

Modify the `/api/product` endpoint to support server side pagination. You must paginate through the database in your query as well, as we are scaling our API to support tens of thousands of products. 

The API code lives in `pages/api/product/index.ts`. 

The `GetProductsQuery` and `GetProductsResponse` types are defined in `pages/api/product/index.ts`. You should not have to change these types, as the frontend expects this specific request and response format.

Ensure your API handles all edge cases gracefully such as invalid query parameters. 

#### 2. Reviews
**2.1 Review Migration**

Create a reviews database table. A review should have a product id, a rating (1 - 5 stars, inclusive), timestamp, and a comment.

**2.2 Create Review API**

The `ProductDetailPage` component displays a list of reviews for a product. Currently, no reviews are loaded or created. We need to implement the review API to support loading and creating reviews.

Modify the POST `/api/review` endpoint to support creating a review for a product.

The API code lives in `pages/api/review.ts`. 

The `CreateReviewData` and `CreateReviewResponse` types are defined in `pages/api/review.ts`. You should not have to change these types, as the frontend expects this specific request and response format.

Ensure your API handles all edge cases gracefully such as invalid query parameters. Once you have completed this, make sure you can create a review in the frontend.

**2.3 Get Review API**

Modify the GET `/api/review` endpoint to support fetching a list of reviews for a product.

The API code lives in `pages/api/review.ts`.

The `GetReviewsQuery` and `GetReviewsResponse` types are defined in `pages/api/review.ts`. You should not have to change these types, as the frontend expects this specific request and response format.

Ensure your API handles all edge cases gracefully such as invalid query parameters. 

Once you have completed this, make sure you can load reviews in the frontend.

### Requirements
- Docker-Compose
- Postgres
- Node 16