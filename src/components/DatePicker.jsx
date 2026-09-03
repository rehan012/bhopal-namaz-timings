import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import dayjs from "dayjs"

export default function DatePicker({ date, setDate }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-60 h-13 cursor-pointer justify-start text-center">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {dayjs(date).format("DD MMM YYYY")}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={(d) =>
            d < new Date("2026-09-01") || d > new Date("2026-12-31")
          }
        />
      </PopoverContent>
    </Popover>
  )
}