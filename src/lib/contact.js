/**
 * Posts a contact-form submission to the serverless relay at `/api/contact`,
 * which emails a copy of it. Storing the message is handled separately by
 * `saveContactMessage` — this call is best-effort notification on top.
 */
export const sendContactEmail = async ({ name, email, message }) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });

  if (!response.ok) {
    throw new Error(`Contact relay responded with ${response.status}`);
  }
};
