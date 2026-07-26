import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 bg-neutral-50 dark:border-white/10 dark:bg-neutral-900/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm text-neutral-600 dark:text-neutral-300 sm:grid-cols-4">
        <div>
          <div className="mb-2 flex items-center gap-2 text-lg font-extrabold text-neutral-900 dark:text-white">
            <span>🧸</span>
            <span>
              chillar<span className="text-pink-600">akada</span>
            </span>
          </div>
          <p className="text-neutral-500">
            India&apos;s favourite little toy shop — bringing joy, play, and
            learning to every home.
          </p>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-neutral-900 dark:text-white">Shop</h4>
          <ul className="space-y-1">
            <li><Link href="/products" className="hover:text-pink-600">All Toys</Link></li>
            <li><Link href="/products?category=Educational" className="hover:text-pink-600">Educational</Link></li>
            <li><Link href="/products?category=Outdoor" className="hover:text-pink-600">Outdoor</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-neutral-900 dark:text-white">Account</h4>
          <ul className="space-y-1">
            <li><Link href="/cart" className="hover:text-pink-600">My Cart</Link></li>
            <li><Link href="/orders" className="hover:text-pink-600">My Orders</Link></li>
            <li><Link href="/checkout" className="hover:text-pink-600">Checkout</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-neutral-900 dark:text-white">Help</h4>
          <ul className="space-y-1 text-neutral-500">
            <li>Free shipping over ₹999</li>
            <li>Easy 7-day returns</li>
            <li>support@chillarakada.example</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5 py-4 text-center text-xs text-neutral-400 dark:border-white/10">
        © {new Date().getFullYear()} chillarakada. This is a demo storefront for portfolio purposes — no real orders are processed.
      </div>
    </footer>
  );
}
