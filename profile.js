function updateTime() {
    // Get current UTC time
    const now = new Date();

    // Convert to Nigeria time (UTC+1)
    const lagosTime = new Date(now.getTime() + (1 * 60 * 60 * 1000)); // Add 1 hour

    // Format the time (HH:MM:SS)
    const formattedTime = lagosTime.toISOString().slice(11, 19);

    // Update the paragraph content
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = `Time: ${formattedTime}`;
}

// Run updateTime immediately when the page loads
updateTime();

// Update time every second (1000ms)
setInterval(updateTime, 1000);
