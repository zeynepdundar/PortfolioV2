import { PageSection } from "../../ui/PageSection";
import { SectionHeader } from "../../ui/SectionHeader";
import { SectionContainer } from "../../ui/SectionContainer";

export default function Contact() {
  return (
    <PageSection id="contact">
      <SectionContainer>
        <div className="w-full">
          <SectionHeader
            title="Get In Touch"
            subtitle="Let’s build something great together."
          />

          <div>
            <p className="text-md leading-relaxed text-muted">
              I think this is the beginning of something great, and I’d love to
              hear from you. Whether you want to discuss a project, talk about
              frontend architecture, or just share a good joke — my inbox is
              always open.
            </p>

            <p className="text-md leading-relaxed text-muted">
              You can also ask me about motorcycles, help me practice Spanish,
              or just say hello <span className="not-italic">👋</span>
            </p>

            {/* Divider */}
            <div className="pt-10">
              <h4 className="text-xs font-medium uppercase tracking-widest text-muted">
                Stay in touch
              </h4>

              <ul className="mt-5 flex items-center gap-6">
                {/* LinkedIn */}
                <li>
                  <a
                    href="https://www.linkedin.com/in/zeynep-dundar/"
                    target="_blank"
                    aria-label="LinkedIn"
                    className="text-muted transition hover:text-foreground"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </li>

                {/* GitHub */}
                <li>
                  <a
                    href="https://github.com/zeynepdndr"
                    target="_blank"
                    aria-label="GitHub"
                    className="text-muted transition hover:text-foreground"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                </li>

                {/* Mail */}
                <li>
                  <a
                    href="mailto:dundarzey@itu.edu.tr"
                    aria-label="Email"
                    className="text-muted transition hover:text-foreground"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" ry="2" />
                      <path d="m22 6-10 7L2 6" />
                    </svg>
                  </a>
                </li>

                {/* Resume */}
                <li>
                  <a
                    href="https://www.dropbox.com/scl/fi/an645if7qygouha4cxkai/Zeynep-Dundar-Resume.pdf?rlkey=btctrp1s9pu99kqxb3p3rb0is&dl=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Resume"
                    className="text-muted transition hover:text-foreground"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5"
                    >
                      {/* Document icon path */}
                      <path d="M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
                      <line x1="6" y1="7" x2="15" y2="7" />
                      <line x1="6" y1="11" x2="15" y2="11" />
                      <line x1="6" y1="15" x2="15" y2="15" />
                    </svg>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
    </PageSection>
  );
}
