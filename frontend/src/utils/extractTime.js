


// export function extractTime(dateString) {
// 	const date = new Date(dateString);
// 	const year = date.getFullYear().toString().slice(-2);
// 	const month = padZero(date.getMonth() + 1); // Months are zero-indexed
// 	const day = padZero(date.getDate());
// 	const hours = padZero(date.getHours());
// 	const minutes = padZero(date.getMinutes());

// 	// return `${year}-${month}-${day} ${hours}:${minutes}`;
// 	return `${day}-${month}-${year} ${hours}:${minutes}`;
// }

// // Helper function to pad single-digit numbers with a leading zero
// function padZero(number) {
// 	return number.toString().padStart(2, "0");
// }


export function extractTime(dateString) {
	const date = new Date(dateString);
	const year = date.getFullYear().toString().slice(-2); // Two-digit year
	const month = getMonthName(date.getMonth()); // Get month name
	const day = padZero(date.getDate());
	const hours = padZero(date.getHours());
	const minutes = padZero(date.getMinutes());

	return `${month}. ${day} ${hours}:${minutes}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
	return number.toString().padStart(2, "0");
}

// Helper function to get abbreviated month name
function getMonthName(monthIndex) {
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	return months[monthIndex];
}
