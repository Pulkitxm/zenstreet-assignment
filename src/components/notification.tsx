import { Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NotificationProps {
  message: string;
  variant?: "orange" | "green";
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
          "bg-[#3D1D00] text-orange-400 border border-orange-400",
        variant === "green" &&
          "bg-[#002B1D] text-emerald-400 border border-emerald-400"
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
