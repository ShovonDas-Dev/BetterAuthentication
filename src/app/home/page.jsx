
import Link from "next/link";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Secure Authentication",
    description:
      "Your account and personal information stay protected with secure authentication.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path d="m13 2-3 8h7L11 22l2-9H6l7-11Z" />
      </svg>
    ),
    title: "Fast & Reliable",
    description:
      "Get started in seconds with a smooth and reliable authentication experience.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <circle cx="12" cy="8" r="4" />
        <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
      </svg>
    ),
    title: "Easy Management",
    description:
      "Manage your profile, account details, and personal information easily.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <circle cx="12" cy="12" r="3" />
        <path d="m19.4 15 .1.1 1.4 1.1-1.5 2.6-1.7-.6a8 8 0 0 1-1.5.9l-.3 1.8h-3l-.3-1.8a8 8 0 0 1-1.5-.9l-1.7.6-1.5-2.6 1.4-1.1a8 8 0 0 1 0-1.8l-1.4-1.1 1.5-2.6 1.7.6a8 8 0 0 1 1.5-.9l.3-1.8h3l.3 1.8a8 8 0 0 1 1.5.9l1.7-.6 1.5 2.6-1.4 1.1a8 8 0 0 1-.1 1.7Z" transform="translate(-1 -1) scale(1.08)" />
      </svg>
    ),
    title: "Modern Experience",
    description:
      "Enjoy a clean interface with simple navigation and responsive design.",
  },
];

function FingerprintIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      className="h-20 w-20"
    >
      <path d="M20 48a30 30 0 0 1 60 0" />
      <path d="M28 48a22 22 0 0 1 44 0c0 20-5 34-12 43" />
      <path d="M36 48a14 14 0 0 1 28 0c0 15-2 26-7 36" />
      <path d="M44 48a6 6 0 0 1 12 0c0 12-1 20-3 27" />
      <path d="M20 57c0 10-2 17-5 23" />
      <path d="M80 57c0 8-1 14-3 19" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* Hero Section */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        {/* Left Content */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-green-400/40 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-400">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Secure · Fast · Reliable
          </span>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Your Digital Identity,
            <span className="mt-2 block text-green-400">
              Our Priority.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            MyAuth helps you manage your account securely and easily.
            Sign up, access your dashboard, and enjoy a seamless
            experience — all in one place.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/singUp"
              className="group inline-flex items-center gap-3 rounded-xl bg-green-400 px-6 py-3.5 font-semibold text-black transition hover:bg-green-300"
            >
              Get Started
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-zinc-700 px-6 py-3.5 font-semibold transition hover:border-green-400 hover:text-green-400"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-8 border-t border-zinc-800 pt-7">
            <div>
              <h3 className="text-2xl font-bold text-green-400">
                Secure
              </h3>
              <p className="mt-1 text-sm text-zinc-500">
                Account Access
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-400">
                Simple
              </h3>
              <p className="mt-1 text-sm text-zinc-500">
                User Experience
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-400">
                24/7
              </h3>
              <p className="mt-1 text-sm text-zinc-500">
                Account Access
              </p>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative flex min-h-[350px] items-center justify-center sm:min-h-[450px]">
          <div className="absolute h-64 w-64 rounded-full bg-green-400/10 blur-[100px] sm:h-96 sm:w-96" />

          <div className="relative w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6 shadow-2xl shadow-green-950/20 sm:p-10">
            {/* Window Header */}
            <div className="flex items-center gap-2 border-b border-zinc-800 pb-5">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />

              <span className="ml-auto text-sm text-zinc-500">
                MyAuth Security
              </span>
            </div>

            {/* Security Illustration */}
            <div className="flex flex-col items-center py-10 text-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-green-400/30 bg-green-400/10 text-green-400">
                <FingerprintIcon />
              </div>

              <h2 className="mt-7 text-2xl font-bold">
                Identity Verified
              </h2>

              <p className="mt-2 text-sm text-zinc-400">
                Your account security starts here.
              </p>

              <div className="mt-6 flex w-full items-center gap-3 rounded-xl border border-green-400/20 bg-green-400/5 p-4 text-left">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-400/10 text-green-400">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>

                <div>
                  <p className="font-medium">Protected Account</p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Secure access to your profile
                  </p>
                </div>

                <span className="ml-auto text-xs text-green-400">
                  Active
                </span>
              </div>
            </div>
          </div>

          {/* Floating Security Badge */}
          <div className="absolute right-0 top-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow-xl sm:-right-3 sm:top-16">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-8 w-8 text-green-400"
            >
              <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
              <rect x="9" y="10" width="6" height="5" rx="1" />
              <path d="M10 10V8a2 2 0 0 1 4 0v2" />
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Why MyAuth?
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Everything you need,
            <span className="text-zinc-500"> in one place.</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-green-400/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-400/10 text-green-400 transition group-hover:bg-green-400 group-hover:text-black">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-green-400/20 bg-gradient-to-r from-green-400/10 to-zinc-950 p-8 sm:p-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Ready to get started?
            </h2>
            <p className="mt-3 text-zinc-400">
              Create your account and explore MyAuth today.
            </p>
          </div>

          <Link
            href="/singUp"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-green-400 px-6 py-3.5 font-semibold text-black transition hover:bg-green-300"
          >
            Create Account
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}