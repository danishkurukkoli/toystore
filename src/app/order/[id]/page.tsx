import { OrderConfirmationClient } from "./OrderConfirmationClient";

export default async function OrderConfirmationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <OrderConfirmationClient id={id} />;
}
