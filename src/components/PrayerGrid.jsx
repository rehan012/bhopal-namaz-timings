import PrayerCard from "./PrayerCard"

export default function PrayerGrid({ prayers, nextPrayer }) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {prayers.map((p, i) => (
        <PrayerCard
          key={i}
          prayer={p}
          index={i}
          isActive={nextPrayer?.time === p.time}
        />
      ))}
    </div>
  )
}