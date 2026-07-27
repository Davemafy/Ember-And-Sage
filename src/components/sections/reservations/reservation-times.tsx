const times = [
  { time: "6:00 PM", tables: "4 tables" },
  { time: "6:30 PM", tables: "3 tables" },
  { time: "7:00 PM", tables: "5 tables", active: true },
  { time: "7:30 PM", tables: "4 tables" },
  { time: "8:00 PM", tables: "2 tables" },
];

const ReservationTimes = () => {
  return (
    <section className="bg-near-black px-4 py-8 text-warm-ivory">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs text-warm-ivory/55">Available Times for</p>
          <h2 className="mt-1 font-serif text-[30px] leading-none">
            Saturday, May 17
          </h2>
        </div>

        <button className="text-xs font-semibold text-burnt-orange">
          Change Date
        </button>
      </div>

      <div className="mt-6 flex gap-3 overflow-x-auto pb-3">
        {times.map((item) => (
          <button
            key={item.time}
            className={`shrink-0 rounded-2xl px-5 py-4 text-center ${
              item.active
                ? "border border-burnt-orange bg-cream-surface text-burnt-orange"
                : "bg-cream-surface text-text-primary"
            }`}
          >
            <span className="block text-sm font-bold">{item.time}</span>
            <span className="mt-2 block text-xs opacity-70">{item.tables}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ReservationTimes;
