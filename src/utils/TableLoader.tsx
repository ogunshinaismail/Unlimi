export default function TableLoader({ num = 8 }: { num?: number }) {
  return (
    <div className="space-y-4 my-3">
      {Array.from({ length: num }).map((_, i) => (
        <section key={i} className="flex justify-between gap-4">
          <div className="h-10 bg-[#EEEEEE] rounded-lg w-full animate-pulse" />
          <div className="h-10 bg-[#EEEEEE] rounded-lg w-full animate-pulse" />
          <div className="h-10 bg-[#EEEEEE] rounded-lg w-full animate-pulse" />
          <div className="h-10 bg-[#EEEEEE] rounded-lg w-full animate-pulse" />
        </section>
      ))}
    </div>
  );
}
