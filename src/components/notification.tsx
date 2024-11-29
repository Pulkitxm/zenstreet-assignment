import { Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NotificationProps {
  message: string;
  variant?: "orange" | "green" | "blue";
  onClose?: () => void;
}

export function Notification({
  message,
  variant = "orange",
  onClose,
}: NotificationProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-xl p-4 text-lg",
        variant === "orange" &&
          "bg-orange-100 text-orange-400 border-orange-400 border-2",
        variant === "green" &&
          "bg-green-100 text-green-400 border-green-400 border-2",
        variant === "blue" &&
          "bg-blue-100 text-blue-400 border-blue-400 border-2",
      )}
    >
      <div className="flex items-center gap-3">
        <Info className="h-6 w-6" />
        <span>{message}</span>
      </div>
      {onClose && (
        <button onClick={onClose} className="text-current hover:opacity-80">
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </button>
      )}
    </div>
  );
}
