export const FormatDate = (dateObj: number | Date | string): string => {
    try {
        // If dateObj is a string, convert it to a Date
        const date = typeof dateObj === "string" ? new Date(dateObj) : dateObj;
        // If dateObj is a number, convert it to a Date
        const finalDate = typeof date === "number" ? new Date(date) : date;

        // Check if the date is valid
        if (isNaN(finalDate.getTime())) {
            return "Invalid Date"; // Fallback for invalid dates
        }

        return new Intl.DateTimeFormat('en-US', { day: '2-digit', month: 'short', year: 'numeric' }).format(finalDate);
    } catch (error) {
        return "Invalid Date"; // Fallback in case of errors
    }
};