import { useMemo, useState, useEffect } from "react";
import DatePicker from "./components/DatePicker";
import NextPrayerCard from "./components/NextPrayerCard";
import { getPrayerTimes, getNextPrayer } from "./utils/helpers";
import { isInRange, PRAYER_META } from "./data/timings";
import { MapPin } from "lucide-react";
import PrayerGrid from "./components/prayerGrid";

export default function App() {
  const [date, setDate] = useState(new Date());
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const prayers = useMemo(() => {
    if (!isInRange(date)) return [];
    return getPrayerTimes(date);
  }, [date]);

  const nextPrayer = useMemo(() => {
    if (!prayers.length) return null;
    return getNextPrayer(prayers);
  }, [prayers, now]);

  const nextMeta = PRAYER_META.find(
    (_, i) => prayers[i]?.time === nextPrayer?.time,
  );

  return (
    <div className="min-h-screen bg-grid px-4 py-10 fixed inset-0 backdrop-blur-sm bg-black/20">
      <div className="max-w-md mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-center items-center gap-1 text-white/80 text-sm">
          <MapPin size={14} />
          <span>Bhopal</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-semibold text-center text-white mt-2">
          Namaz Timings
        </h1>

        {/* Date Picker */}
        <div className="flex justify-center">
          <DatePicker date={date} setDate={setDate} />
        </div>
        {/* Next Prayer */}
        {nextPrayer && nextMeta && (
          <NextPrayerCard prayer={nextPrayer} meta={nextMeta} now={now} />
        )}

        {/* Prayer List */}
        <PrayerGrid prayers={prayers} nextPrayer={nextPrayer} />
      </div>
    </div>
  );
}
