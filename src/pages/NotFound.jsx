import { Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-primary">
        404
      </p>
      <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
        This page drifted off
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The link you followed doesn&rsquo;t point anywhere on this site. It may
        have moved, or the address might have a typo in it.
      </p>
      <Link
        to="/"
        className="cosmic-button mt-8 inline-flex items-center gap-2"
      >
        <Home size={16} aria-hidden="true" />
        Back to the portfolio
      </Link>
    </main>
  );
}
