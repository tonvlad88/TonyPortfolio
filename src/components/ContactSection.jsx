import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Construction,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { db } from "../../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formLoadTime, setFormLoadTime] = useState(0);
  const isUnderConstruction = false; // toggle if you want to disable form

  // Record when the form first renders
  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🛡 Honeypot check — skip if filled
    if (e.target.website.value) {
      console.warn("Spam detected via honeypot — ignoring submission");
      return;
    }

    // 🛡 Time-based check — skip if submitted too quickly
    const timeElapsed = (Date.now() - formLoadTime) / 1000;
    if (timeElapsed < 2) {
      console.warn("Spam detected via quick submit — ignoring submission");
      return;
    }

    setIsSubmitting(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "contactMessages"), formData);
      toast.success("👋 Your message has been saved.", {
        position: "top-right",
      });
      e.target.reset();
    } catch (error) {
      toast.error("❌ Failed to send message. Please try again.");
      console.error("Error saving message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We look forward to assisting you and starting a meaningful
          conversation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Email</h4>
                  <a
                    href="mailto:tonysaromines@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    tonysaromines@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Phone</h4>
                  <a
                    href="tel:+639176291740"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (+63) 917-629-1740
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Location</h4>
                  <span className="text-muted-foreground">
                    Casa Mira South, Naga City, Cebu
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Socials</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/tonysaromines/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.facebook.com/anthony.e.saromines/"
                  target="_blank"
                >
                  <Facebook />
                </a>
                <a href="https://www.twitch.tv/tonyotvph" target="_blank">
                  <Twitch />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            {/* Info message */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 mb-6 bg-blue-50 border border-blue-200 rounded-md text-blue-800">
              <span className="font-medium text-center sm:text-left leading-relaxed">
                📌 When you contact me using this form, your message will be
                stored in my Firebase console for reference only. Thank you!
              </span>
            </div>

            {isUnderConstruction && (
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 mb-6 bg-yellow-100 border border-yellow-300 rounded-md text-yellow-800">
                <Construction size={24} className="text-yellow-700" />
                <span className="font-medium text-center sm:text-left leading-relaxed">
                  This form is currently under construction. Please email me
                  directly at{" "}
                  <a
                    href="mailto:tonysaromines@gmail.com"
                    className="underline text-yellow-900 hover:text-yellow-700 break-all"
                  >
                    tonysaromines@gmail.com
                  </a>
                </span>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Honeypot field */}
              <input
                type="text"
                name="website"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={isUnderConstruction}
                  className="w-full px-4 py-3 rounded-mb border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary disabled:opacity-50"
                  placeholder="your name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={isUnderConstruction}
                  className="w-full px-4 py-3 rounded-mb border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary disabled:opacity-50"
                  placeholder="user@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  disabled={isUnderConstruction}
                  className="w-full px-4 py-3 rounded-mb border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none disabled:opacity-50"
                  placeholder="type your message here..."
                />
              </div>

              <button
                disabled={isSubmitting || isUnderConstruction}
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  (isSubmitting || isUnderConstruction) &&
                    "opacity-50 cursor-not-allowed pointer-events-none"
                )}
              >
                {isSubmitting ? "Sending..." : "Submit"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        <ToastContainer />
      </div>
    </section>
  );
};
