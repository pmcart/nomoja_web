import { LinkButton } from "@/components/button";
import { Container, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-28 sm:py-40">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-6 max-w-3xl text-balance font-serif text-[clamp(2.8rem,7vw,5.2rem)] leading-[1] tracking-[-0.02em]">
        That page has <em className="italic text-ember">wandered off.</em>
      </h1>
      <p className="mt-6 max-w-lg text-lg text-ink-2">
        The link may be old, or mistyped. Here’s a way back to somewhere useful.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <LinkButton href="/">Back to the homepage</LinkButton>
        <LinkButton href="/contact" variant="secondary">
          Get in touch
        </LinkButton>
      </div>
    </Container>
  );
}
