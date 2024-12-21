const HRS = 1000 * 60 * 60;
const DAYS = HRS * 24;
const YEARS = DAYS * 365;
export const getTimeAgoStrLong = (time: number | null) => {
  if (!time) {
    return null;
  }
  const delta = Date.now() - time;

  if (delta <= 0) {
    return "1 min ago";
  }
  const minutes = Math.floor(delta / 1000 / 60);
  if (minutes < 60) {
    if (minutes <= 1) {
      return "1 min ago";
    }
    return `${minutes} mins ago`;
  }
  const hour = Math.floor(delta / 1000 / 60 / 60);
  if (hour < 24) {
    if (hour <= 1) {
      return "1 hour ago";
    }
    return `${hour} hours ago`;
  }
  const day = Math.floor(delta / DAYS);
  if (day < 365) {
    if (day === 1) {
      return "1 day ago";
    }
    return `${day} days ago`;
  }
  const year = Math.floor(delta / YEARS);
  if (year === 1) {
    return "1 year ago";
  }
  return `${year} years ago`;
};
