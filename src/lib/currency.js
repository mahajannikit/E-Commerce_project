export function formatINR(value) {
  const number = typeof value === "string" ? Number(value) : value
  if (!Number.isFinite(number)) return "₹0"

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(number)
}

