import Image from "next/image";
import { productImagePath } from "@/lib/products";

export function ProductPhoto({
  slug,
  name,
  className = "",
  sizes = "(max-width: 640px) 50vw, 25vw",
  priority = false,
}: {
  slug: string;
  name: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={productImagePath(slug)}
        alt={name}
        fill
        sizes={sizes}
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
