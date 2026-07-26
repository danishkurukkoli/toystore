export type OrderItem = {
  productId: string;
  slug: string;
  name: string;
  price: number;
  quantity: number;
};

export type Address = {
  fullName: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
};

export type Order = {
  id: string;
  items: OrderItem[];
  address: Address;
  paymentMethod: "COD" | "CARD" | "UPI";
  subtotal: number;
  shipping: number;
  total: number;
  placedAt: string;
  status: "Confirmed" | "Processing" | "Shipped" | "Delivered";
};

const ORDERS_KEY = "chillarakada_orders";

export function getOrders(): Order[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    return raw ? (JSON.parse(raw) as Order[]) : [];
  } catch {
    return [];
  }
}

export function saveOrder(order: Order) {
  if (typeof window === "undefined") return;
  const orders = getOrders();
  orders.unshift(order);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

export function getOrderById(id: string): Order | undefined {
  return getOrders().find((o) => o.id === id);
}

export function generateOrderId() {
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `CHK-${Date.now().toString().slice(-6)}${rand}`;
}
