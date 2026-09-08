/**
 * Calculates real-time operational status for PR Men Dot Salon
 * Business Hours: 8:30 AM – 10:00 PM IST Daily
 */
export function getSalonStatus() {
  try {
    const now = new Date();
    // Format to Asia/Kolkata time
    const istFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kolkata",
      hour12: false,
      hour: "numeric",
      minute: "numeric"
    });
    const parts = istFormatter.formatToParts(now);
    const hour = parseInt(parts.find((p) => p.type === "hour")?.value || "0", 10);
    const minute = parseInt(parts.find((p) => p.type === "minute")?.value || "0", 10);
    const currentMinutes = hour * 60 + minute;

    const openMinutes = 8 * 60 + 30; // 8:30 AM (510 mins)
    const closeMinutes = 22 * 60;    // 10:00 PM (1320 mins)

    const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

    if (isOpen) {
      const minutesLeft = closeMinutes - currentMinutes;
      const isClosingSoon = minutesLeft <= 60 && minutesLeft > 0;
      return {
        isOpen: true,
        badgeText: isClosingSoon ? "Closing Soon • Closes 10:00 PM" : "Open Now • Closes 10:00 PM",
        shortText: "Open Now",
        color: isClosingSoon ? "#f59e0b" : "#10b981",
        dotClass: isClosingSoon ? "dot-amber" : "dot-green",
        hoursLabel: "8:30 AM – 10:00 PM Daily"
      };
    } else {
      return {
        isOpen: false,
        badgeText: "Closed • Opens at 8:30 AM",
        shortText: "Closed",
        color: "#ef4444",
        dotClass: "dot-red",
        hoursLabel: "8:30 AM – 10:00 PM Daily"
      };
    }
  } catch {
    // Fallback if timezone formatting fails
    return {
      isOpen: true,
      badgeText: "Open Daily • 8:30 AM – 10:00 PM",
      shortText: "Open Daily",
      color: "#10b981",
      dotClass: "dot-green",
      hoursLabel: "8:30 AM – 10:00 PM Daily"
    };
  }
}
