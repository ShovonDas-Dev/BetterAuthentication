
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Secure Authentication",
    description:
      "Protect your account with a secure authentication system designed to keep your identity safe.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-8 w-8">
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    tag: "Account Security",
  },
  {
    number: "02",
    title: "User Registration",
    description:
      "Create your account with a simple registration process and start using your personalized experience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-8 w-8">
        <circle cx="9" cy="8" r="4" />
        <path d="M3 21v-2a6 6 0 0 1 12 0v2M19 8v6m-3-3h6" />
      </svg>
    ),
    tag: "Easy Registration",
  },
  {
    number: "03",
    title: "Profile Management",
    description:
      "Keep your account information organized and manage your personal profile in one convenient place.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-8 w-8">
        <circle cx="12" cy="8" r="4" />
        <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
      </svg>
    ),
    tag: "Personal Profile",
  },
  {
    number: "04",
    title: "Dashboard Access",
    description:
      "Access your personal dashboard to navigate your account and manage your user experience efficiently.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-8 w-8">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    tag: "Centralized Access",
  },
  {
    number: "05",
    title: "Session Management",
    description:
      "Manage your signed-in experience and sign out of your account when you are finished.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-8 w-8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    tag: "Account Sessions",
  },
  {
    number: "06",
    title: "Responsive Experience",
    description:
      "Use MyAuth across desktop, tablet, and mobile with a clean interface and easy navigation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-8 w-8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8m-4-4v4M7 7h10" />
      </svg>
    ),
    tag: "All Devices",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-green-400/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm text-green-400">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            WHAT WE OFFER
          </span>

          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Everything You Need,
            <span className="mt-2 block text-green-400">
              All in One Place.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Discover the tools and features that make managing your
            account simple, secure, and convenient with MyAuth.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/singUp"
              className="inline-flex items-center gap-3 rounded-xl bg-green-400 px-6 py-3.5 font-semibold text-black transition hover:bg-green-300"
            >
              Get Started
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="/"
              className="rounded-xl border border-zinc-700 px-6 py-3.5 font-semibold transition hover:border-green-400 hover:text-green-400"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
              OUR SERVICES
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Built Around You
            </h2>
          </div>

          <p className="max-w-md leading-7 text-zinc-400">
            Explore the essential features designed to simplify
            your everyday account management.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-green-400/50 sm:p-8"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-green-400/0 blur-3xl transition group-hover:bg-green-400/10" />

              <div className="relative flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-green-400/20 bg-green-400/10 text-green-400 transition group-hover:bg-green-400 group-hover:text-black">
                  {service.icon}
                </div>

                <span className="text-3xl font-bold text-zinc-800 transition group-hover:text-green-400/50">
                  {service.number}
                </span>
              </div>

              <div className="relative mt-7">
                <span className="text-xs font-medium uppercase tracking-wider text-green-400">
                  {service.tag}
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {service.description}
                </p>
              </div>

              <div className="mt-7 h-px w-full bg-zinc-800 transition group-hover:bg-green-400/30" />

              <div className="mt-5 flex items-center gap-2 text-sm font-medium text-zinc-300 transition group-hover:text-green-400">
                Designed for simplicity
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-green-400/20 bg-zinc-950 p-8 sm:p-12 lg:p-16">
          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-green-400/10 blur-[100px]" />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                START YOUR JOURNEY
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Ready to experience MyAuth?
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                Create your account and explore a simpler way to
                manage your digital identity.
              </p>
            </div>

            <Link
              href="/singUp"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-green-400 px-6 py-4 font-semibold text-black transition hover:bg-green-300"
            >
              Create Your Account
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-7">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-zinc-500 sm:flex-row">
          <Link href="/" className="text-lg font-bold text-white">
            My<span className="text-green-400">Auth</span>
          </Link>

          <p>
            © {new Date().getFullYear()} MyAuth. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}