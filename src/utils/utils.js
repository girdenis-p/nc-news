// Returns time between two dates in a human readable format. It returns the rounded down difference in the largest possible unit of time
// as a non-zero integer (excluding seconds) from [seconds, minutes, hours, days, months, years]
export const dateDiff = (date1, date2) => {
	const secondsDiff = Math.floor((date1.getTime() - date2.getTime()) / 1000);
  
  if (secondsDiff < 60) {
  	if (secondsDiff === 1) {
    	return "1 second"
    } else {
    	return `${secondsDiff} seconds`
    }
  }

	const minutesDiff = Math.floor(secondsDiff / 60)
  
  if (minutesDiff < 60) {
  	if (minutesDiff === 1) {
    	return "1 minute"
    } else {
    	return `${minutesDiff} minutes`
    }
  }
  
  const hoursDiff = Math.floor(minutesDiff / 60)
  
  if (hoursDiff < 24) {
  	if (hoursDiff === 1) {
    	return "1 hour"
    } else {
    	return `${hoursDiff} hours`
    }
  }
  
  const daysDiff = Math.floor(hoursDiff / 24)
  
  if (daysDiff < 31) {
  	if (daysDiff === 1) {
    	return "1 day"
    } else {
    	return `${daysDiff} days`
    }
  }
  
  const monthsDiff = (date1.getFullYear() * 12 + date1.getMonth()) - (date2.getFullYear() * 12 + date2.getMonth())
  
  if (monthsDiff < 12) {
  	if (monthsDiff === 1) {
    	return "1 month"
    } else {
    	return `${monthsDiff} months`
    }
  }
  
  const yearsDiff = Math.floor(monthsDiff / 12)
  
  if (yearsDiff === 1) {
  	return "1 year"
  } else {
 		return `${yearsDiff} years`
  }
}

export const dateDiffFromNow = (date) => {
  return dateDiff(new Date(), date);
}