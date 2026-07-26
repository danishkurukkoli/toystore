# chillarakada 🧸

A realistic, frontend-only toy store built with Next.js, TypeScript, and Tailwind CSS. Browse 18 toys across 8 categories, add them to a cart, and check out — all state (cart + order history) is persisted in the browser via `localStorage`, so there's no backend or database required.

## Features

- Product catalog with category filters, search, and sorting
- Product detail pages with quantity selection
- Cart with quantity updates and free-shipping threshold
- Checkout flow with address form and payment method selection (Cash on Delivery; UPI/Card shown as coming soon)
- Order confirmation page and persistent order history (`/orders`)
- Fully responsive, light-themed UI

There is no admin panel and no real payment processing — this is a portfolio/demo storefront.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4
- React Context + `localStorage` for cart/order persistence (no backend)

## Deploying to Vercel via GitHub

1. Push this repository to GitHub:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/chillarakada.git
   git push -u origin main
   ```

2. Go to [vercel.com/new](https://vercel.com/new), import the GitHub repository, and click **Deploy**. Vercel auto-detects the Next.js framework — no configuration needed.

3. Every push to `main` will automatically redeploy.

## Project Structure

```
src/
  app/            # Routes: home, products, product detail, cart, checkout, order, orders
  components/      # Header, Footer, ProductCard, ProductPhoto, AddToCartPanel
  lib/             # Product data, cart context, order storage, formatting helpers
public/products/   # Product photos
```
