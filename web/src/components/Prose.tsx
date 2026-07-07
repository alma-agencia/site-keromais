export default function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[68ch] text-[16px] leading-[1.8] text-cocoa [&>p:first-child]:mt-0 [&>p]:mt-4 [&_a]:font-semibold [&_a]:text-crust [&_a]:underline [&_a]:underline-offset-2 [&_em]:italic [&_h2:first-child]:mt-0 [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-[clamp(22px,2.6vw,30px)] [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-crust [&_h3]:mb-2 [&_h3]:mt-7 [&_h3]:font-display [&_h3]:text-[19px] [&_h3]:font-bold [&_h3]:text-crust [&_li]:mt-1.5 [&_strong]:font-semibold [&_strong]:text-crust [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5">
      {children}
    </div>
  );
}
