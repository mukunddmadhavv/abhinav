const WHATSAPP_NUMBER = "919569555234";

export function createWhatsAppLink(messageLines = []) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const text = encodeURIComponent(messageLines.filter(Boolean).join("\n"));
  return `${base}?text=${text}`;
}

export function defaultWhatsAppMessage() {
  return createWhatsAppLink([
    "Hello ABHINAV TRADERS,",
    "I would like to enquire about cement supply.",
    "",
    "Name:",
    "Phone:",
    "City:",
    "Requirement:",
    "",
    "Thanks,",
  ]);
}
