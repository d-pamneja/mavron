
export default function TerminalCode() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Code Animation*/}
          <div
            className="mx-auto max-w-3xl mb-20"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  prometheus.in
                </span>
              </div>
              <div className="font-mono text-white-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-green-200">
                  npm install prometheus
                </span>{" "}
                <span className="animate-[code-2_10s_infinite]">
                  -- Installing everything you need to power your digital solutions...
                </span>
                <br />
                <br />
                <span className="animate-[code-3_10s_infinite] text-green-200">
                  npm run dev
                </span>{" "}
                <span className="animate-[code-4_10s_infinite]">
                  -- Spinning up your project, where ideas transform into real-world solutions...
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-green-200">
                  npm publish
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                  Application deployed, your vision is now live.
                </span>
                <br/>
                <br/>
                <span className="animate-[code-7_10s_infinite] text-green-300">Welcome to Prometheus Freelance Solutions</span>{" "}
                <br />
                <span className="animate-[code-7_10s_infinite] text-green-300">Empowering your business with tailored end to end web development services.</span>{" "}
                <br />
                <span className="cursor-blink animate-blink">_</span>
              </div>
            </div>
          </div>

      </div>
    </section>
  );
}
