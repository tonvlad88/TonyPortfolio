import { Github, Linkedin, Mail, MapPin, Send, Twitch } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

import { cn } from "@/lib/utils";
import { socials } from "@/constants";
import { saveContactMessage } from "@/lib/firebase";
import { sendContactEmail } from "@/lib/contact";

const socialIcons = { github: Github, linkedin: Linkedin, twitch: Twitch };

const MIN_FILL_SECONDS = 2;

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formLoadTime = useRef(Date.now());

  useEffect(() => {
    formLoadTime.current = Date.now();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    // Honeypot: real users never see this field, bots fill everything.
    if (form.website.value) return;

    // Bots also submit near-instantly; humans take a few seconds to type.
    const secondsElapsed = (Date.now() - formLoadTime.current) / 1000;
    if (secondsElapsed < MIN_FILL_SECONDS) return;

    setIsSubmitting(true);

    const submission = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

    try {
      // Firestore is the durable record, so this one has to succeed.
      await saveContactMessage(submission);

      // The email is only a notification — if it fails the message is still
      // saved, so log it and let the visitor go on believing they are done.
      sendContactEmail(submission).catch((error) => {
        console.error("Failed to send contact email:", error);
      });

      toast.success("Thanks — your message is through. I'll reply soon.");
      form.reset();
      formLoadTime.current = Date.now();
    } catch (error) {
      toast.error(
        "Something went wrong sending that. Please email me directly instead."
      );
      console.error("Failed to save contact message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    "w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/50 transition-colors";

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Hiring, contracting, or just want to compare notes on React Native?
          Send a message and I&rsquo;ll get back to you within one or two
          business days.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact details */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:tonysaromines@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    tonysaromines@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Cebu, Philippines &middot; open to remote
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-medium mb-4">Elsewhere</h4>
              <ul className="flex gap-3">
                {socials.map((social) => {
                  const Icon = socialIcons[social.icon];
                  return (
                    <li key={social.name}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="inline-flex p-2.5 rounded-full border border-border text-foreground/80 hover:text-primary hover:border-primary transition-colors"
                      >
                        <Icon size={20} aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-card text-card-foreground p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Honeypot — hidden from users and assistive tech alike */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Leave this field empty</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className={fieldClass}
                  placeholder="Jane Dela Cruz"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  className={fieldClass}
                  placeholder="jane@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={cn(fieldClass, "resize-y min-h-32")}
                  placeholder="A little about the role or project…"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-60 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending…" : "Send Message"}
                <Send size={16} aria-hidden="true" />
              </button>

              <p className="text-xs text-muted-foreground">
                Your message is stored privately so I can reply — it is never
                shared or used for marketing.
              </p>
            </form>
          </div>
        </div>

        <ToastContainer
          position="top-right"
          theme="colored"
          autoClose={5000}
          newestOnTop
        />
      </div>
    </section>
  );
};
