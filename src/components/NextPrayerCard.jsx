import dayjs from "dayjs";

export default function NextPrayerCard({ prayer, meta, now }) {
  const current = dayjs(now);
  const target = dayjs(prayer.dateTime);

  const diff = target.diff(current, "minute");
  const hours = Math.floor(diff / 60);
  const minutes = diff % 60;

  return (
    <div className="mt-6 p-5 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg">
      {/* Header */}
      <p className="text-center text-white/70">
        Next Prayer <span className="text-yellow-500 text-2xl">{meta.label}</span>
      </p>

      {/* Content */}
      <div className="flex items-center justify-center mt-3">
        
          <p className="text-2xl text-yellow-400 font-bold mt-1">
            {target.format("hh:mm A")}
          </p>

        {/* <Mosque className="text-yellow-400 w-7 h-7" /> */}
      </div>

      {/* Countdown */}
      <p className="text-center mt-4 text-orange-400 font-medium">
        in {hours}h {minutes}m
      </p>
    </div>
  );
}
