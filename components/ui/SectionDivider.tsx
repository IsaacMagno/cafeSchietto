export default function SectionDivider() {
  return (
    <div
      className="flex items-center justify-center gap-4 bg-caffe-cream py-2"
      aria-hidden
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-caffe-gold/60 sm:w-24" />
      <span className="h-1.5 w-1.5 rotate-45 border border-caffe-gold/70" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-caffe-gold/60 sm:w-24" />
    </div>
  );
}
