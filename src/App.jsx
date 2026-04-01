import { useEffect, useState } from "react";

export default function App() {
  const offerUrl = "https://example.com/offer";

  const previewItems = [
    "/assets/1.jpg",
    "/assets/2.jpg",
    "/assets/3.jpg",
    "/assets/4.jpg",
    "/assets/5.jpg",
    "/assets/6.jpg",
    "/assets/7.jpg",
    "/assets/8.jpg",
    "/assets/9.jpg",
  ];

  const toasts = [
    "New private content added",
    "Fresh members-only drop available",
    "Exclusive update just posted",
  ];

  const [toastIndex, setToastIndex] = useState(0);
  const [showToast, setShowToast] = useState(true);

  const buildTrackedUrl = (content = "primary_cta", extra = {}) => {
    const url = new URL(offerUrl);

    const params = {
      utm_source: "lander",
      utm_medium: "button",
      utm_campaign: "creator_premium",
      utm_content: content,
      ...extra,
    };

    Object.entries(params).forEach(([key, value]) => {
      if (value) url.searchParams.set(key, value);
    });

    return url.toString();
  };

  const goToOffer = ({ content, placement, plan }) => {
    const trackedUrl = buildTrackedUrl(content, {
      placement,
      plan,
    });

    window.location.href = trackedUrl;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowToast(false);

      setTimeout(() => {
        setToastIndex((prev) => (prev + 1) % toasts.length);
        setShowToast(true);
      }, 250);
    }, 4200);

    return () => clearInterval(interval);
  }, [toasts.length]);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_30%),linear-gradient(to_bottom,#000000,#050505,#000000)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:22px_22px]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-bold shadow-[0_0_20px_rgba(255,255,255,0.06)]">
              M
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/40">
                private profile
              </div>
              <div className="text-lg font-semibold tracking-tight">
                Midnight Muse
              </div>
            </div>
          </div>

          <button
            onClick={() =>
              goToOffer({
                content: "header_cta",
                placement: "header",
                plan: "all",
              })
            }
            className="rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
          >
            Subscribe
          </button>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-14 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.24em] text-white/60 backdrop-blur">
              Exclusive access
            </div>

            <h1 className="max-w-xl text-5xl font-black leading-tight md:text-6xl">
              Step inside my private world.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-white/70">
              What you see here is only a glimpse. The full experience is
              reserved for members only — updated often, personal, and not
              shared anywhere else.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() =>
                  goToOffer({
                    content: "hero_cta",
                    placement: "hero",
                    plan: "all",
                  })
                }
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
              >
                Unlock access
              </button>

              <button
                onClick={() =>
                  goToOffer({
                    content: "hero_secondary",
                    placement: "hero",
                    plan: "all",
                  })
                }
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View private feed
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/45">
              <span>Private feed</span>
              <span>Locked videos</span>
              <span>Exclusive drops</span>
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-xl font-bold">@midnightmuse</div>
                <div className="text-sm text-white/50">
                  preview from private feed
                </div>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                9 locked posts
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {previewItems.map((src, i) => (
                <div
                  key={i}
                  className="group relative h-32 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                >
                  <img
                    src={src}
                    alt={`Preview ${i + 1}`}
                    className="h-full w-full scale-110 object-cover blur-lg brightness-40 transition duration-500 group-hover:scale-125"
                  />

                  <div className="absolute inset-0 bg-black/30" />

                  <div className="absolute left-2 top-2 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-[9px] uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">
                    Locked
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
                    <div className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm">
                      Members only
                    </div>
                    <div className="text-[11px] text-white/60">
                      Full access required
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-6 text-center md:py-10">
          <h2 className="text-3xl font-bold">
            Not everything is meant to be public.
          </h2>
          <p className="mt-4 text-white/70">
            Some moments are shared only with those who choose to get closer.
            Beyond this page is where everything changes.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-14 md:py-20">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            <h3 className="text-2xl font-bold">
              Daily updates. Locked content. Personal access.
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-white/65">
              Join the private feed to unlock full videos, exclusive drops, and
              content not shared anywhere else.
            </p>

            <button
              onClick={() =>
                goToOffer({
                  content: "footer_cta",
                  placement: "footer",
                  plan: "all",
                })
              }
              className="mt-6 rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
            >
              Get full access
            </button>
          </div>
        </section>
      </main>

      <div className="fixed bottom-24 left-4 z-50 md:bottom-6">
        <div
          className={`rounded-2xl border border-white/10 bg-black/75 px-4 py-3 text-sm text-white shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 ${
            showToast
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-2 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-white/80" />
            <div>{toasts[toastIndex]}</div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <button
          onClick={() =>
            goToOffer({
              content: "mobile_sticky_cta",
              placement: "mobile_sticky",
              plan: "all",
            })
          }
          className="w-full rounded-2xl bg-white px-6 py-3.5 font-semibold text-black shadow-[0_20px_50px_rgba(255,255,255,0.08)]"
        >
          Unlock access
        </button>
      </div>
    </div>
  );
}