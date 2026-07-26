import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 bg-neutral-50 dark:border-white/10 dark:bg-neutral-900/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm text-neutral-600 dark:text-neutral-300 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
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
            <li><Link href="/products?category=Building+Blocks" className="hover:text-pink-600">Building Blocks</Link></li>
            <li><Link href="/products?category=Soft+Toys" className="hover:text-pink-600">Soft Toys</Link></li>
            <li><Link href="/products?category=Educational" className="hover:text-pink-600">Educational</Link></li>
            <li><Link href="/products" className="hover:text-pink-600">All Products</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-neutral-900 dark:text-white">Company</h4>
          <ul className="space-y-1">
            <li><Link href="/about" className="hover:text-pink-600">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-pink-600">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-pink-600">FAQ</Link></li>
            <li><Link href="/blog" className="hover:text-pink-600">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-neutral-900 dark:text-white">Support</h4>
          <ul className="space-y-1">
            <li><Link href="/track" className="hover:text-pink-600">Track Order</Link></li>
            <li><Link href="/faq#shipping" className="hover:text-pink-600">Shipping Info</Link></li>
            <li><Link href="/faq#warranty" className="hover:text-pink-600">Warranty Policy</Link></li>
            <li><Link href="/faq#size-guide" className="hover:text-pink-600">Size Guide</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-neutral-900 dark:text-white">Contact</h4>
          <ul className="space-y-1 text-neutral-500">
            <li>
              <a href="mailto:chillarakada@gmail.com" className="hover:text-pink-600">
                chillarakada@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+919148628774" className="hover:text-pink-600">
                +91 91486 28774
              </a>
            </li>
            <li>Vailathur, Malappuram, Kerala 676551</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5 py-4 text-center text-xs text-neutral-400 dark:border-white/10">
        © {new Date().getFullYear()} chillarakada. All rights reserved.
      </div>
    </footer>
  );
}
