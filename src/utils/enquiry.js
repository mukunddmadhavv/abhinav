export const ENQUIRY_EMAIL = "abhinavtraders2026@gmail.com";

export function createGmailComposeLink({ subject, body } = {}) {
  const composeUrl = new URL("https://mail.google.com/mail/");

  composeUrl.searchParams.set("view", "cm");
  composeUrl.searchParams.set("fs", "1");
  composeUrl.searchParams.set("to", ENQUIRY_EMAIL);

  if (subject) {
    composeUrl.searchParams.set("su", subject);
  }

  if (body) {
    composeUrl.searchParams.set("body", body);
  }

  return composeUrl.toString();
}

export function createGeneralEnquiryLink() {
  return createGmailComposeLink({
    subject: "Website enquiry | ABHINAV TRADERS",
    body: [
      "Hello ABHINAV TRADERS,",
      "",
      "I would like to enquire about cement supply.",
      "",
      "Name:",
      "Phone:",
      "City:",
      "Requirement:",
      "",
      "Thanks,",
    ].join("\n"),
  });
}
