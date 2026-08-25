/**
 * Posts a contact-form submission to the serverless relay at `/api/contact`,
 * which emails it. This is the only path a message takes, so a rejection here
 * means the message did not get through and the caller must say so.
 */
export const sendContactEmail = async ({ name, email, message }) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });

  if (!response.ok) {
    const error = new Error(`Contact relay responded with ${response.status}`);
    // The form distinguishes this case: being throttled is worth its own
    // message, since waiting actually fixes it.
    error.isRateLimited = response.status === 429;
    throw error;
  }
};
