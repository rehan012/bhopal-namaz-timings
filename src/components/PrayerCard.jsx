import { PRAYER_META, formatTime } from "../data/timings"

export default function PrayerCard({ prayer, index, isActive }) {
  const meta = PRAYER_META[index]

  return (
    <div
      className={`p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/20 text-center transition-all
      ${isActive ? "ring-2 ring-green-800 shadow-md scale-[1.02] animate-pulse" : "hover:bg-white/25"}
      `}
    >
      <p className="text-[16px] text-white/60">
        {meta.sub}
      </p>

      <h3 className="text-xl text-white font-medium mt-1">
        {meta.label}
      </h3>

      <p className="text-sm text-yellow-400 font-semibold mt-2">
        {formatTime(prayer.time, prayer.period)}
      </p>
    </div>
  )
}