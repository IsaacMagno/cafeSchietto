import Image from "next/image";
import { Calendar } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
} from "@/components/icons/SocialIcons";
import AnimatedSectionHeader from "@/components/ui/AnimatedSectionHeader";
import { getEvents } from "@/lib/queries";
import { formatEventDate } from "@/lib/format-date";
import { SOCIAL_LINKS } from "@/lib/social";
import type { Event } from "@/types";

function EventsEmptyState() {
  return (
    <div className="mx-auto max-w-lg rounded-xl border border-caffe-latte/60 bg-white p-8 text-center shadow-lg shadow-caffe-espresso/5 sm:p-10">
      <Calendar
        className="mx-auto text-caffe-mocha"
        size={64}
        strokeWidth={1.25}
        aria-hidden
      />
      <p className="mt-6 font-display text-2xl font-bold text-caffe-espresso">
        Novidades em breve!
      </p>
      <p className="mt-3 font-body text-sm leading-relaxed text-caffe-mocha">
        Acompanhe nossas redes sociais para não perder nenhuma novidade.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href={SOCIAL_LINKS.instagram.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-caffe-gold px-6 py-3 font-body text-sm text-caffe-espresso transition-colors hover:bg-caffe-gold hover:text-caffe-dark sm:w-auto"
          aria-label={`Seguir no Instagram ${SOCIAL_LINKS.instagram.handle}`}
        >
          <InstagramIcon />
          {SOCIAL_LINKS.instagram.handle}
        </a>
        <a
          href={SOCIAL_LINKS.facebook.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-caffe-gold px-6 py-3 font-body text-sm text-caffe-espresso transition-colors hover:bg-caffe-gold hover:text-caffe-dark sm:w-auto"
          aria-label={`Seguir no Facebook ${SOCIAL_LINKS.facebook.handle}`}
        >
          <FacebookIcon />
          {SOCIAL_LINKS.facebook.label}
        </a>
      </div>
    </div>
  );
}

function EventCard({ event }: { event: Event }) {
  const { day, month } = formatEventDate(event.date);
  const hasImage = Boolean(event.image_url?.trim());

  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-md shadow-caffe-espresso/5 transition-shadow hover:shadow-lg">
      <div
        className="h-1 bg-gradient-to-r from-caffe-gold to-caffe-mocha"
        aria-hidden
      />
      {hasImage && (
        <div className="relative aspect-[16/9] w-full bg-caffe-mocha/20">
          <Image
            src={event.image_url!}
            alt={`Imagem do evento: ${event.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-end gap-3">
          <span className="font-display text-4xl font-bold leading-none text-caffe-espresso">
            {day}
          </span>
          <span className="pb-1 font-body text-sm font-semibold uppercase tracking-wider text-caffe-mocha">
            {month}
          </span>
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-caffe-espresso">
          {event.title}
        </h3>
        <p className="mt-2 font-body text-sm leading-relaxed text-caffe-mocha">
          {event.description}
        </p>
      </div>
    </article>
  );
}

export default async function Events() {
  const events = await getEvents();
  const hasEvents = events.length > 0;

  return (
    <section id="eventos" className="bg-caffe-cream py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <AnimatedSectionHeader tag="Agenda" title="Eventos & Atrações" />

        <div className="mt-10 sm:mt-14">
          {hasEvents ? (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <EventsEmptyState />
          )}
        </div>
      </div>
    </section>
  );
}
