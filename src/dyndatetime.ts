const now = new Date();

/**
 * Returns an ISO 8601 date string generated dynamically relative to the current date.
 * It is useful for generating dates for sample data.
 * @param s The string to parse the date from, e.g. 'y,m,d,8,30'
 * @returns An ISO 8601 date string.
 */
export function dyndatetime(s: string): string {
  s = s.replace(/y/, now.getFullYear().toString());
  s = s.replace(/m/, (now.getMonth() + 1).toString());
  s = s.replace(/d/, now.getDate().toString());
  s = s.replace(/h/, now.getHours().toString());
  s = s.replace(/i/, now.getMinutes().toString());
  s = s.replace(/(.*)/, (date) => {
    const dateDict: Record<string, number> = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 };
    const dateArray = date.split(',');
    dateArray.forEach((item, index) => {
      const splittedNum = item.split(/[/+|-]/);
      if (splittedNum.length > 1) {
        const minus = item.indexOf('-') !== -1;
        dateDict[index] = minus ? +splittedNum[0] - +splittedNum[1] : +splittedNum[0] + +splittedNum[1];
      } else {
        dateDict[index] = +splittedNum[0];
      }
    });
    const dd = new Date(dateDict[0], dateDict[1] - 1, dateDict[2], dateDict[3], dateDict[4]);
    const y = dd.getFullYear();
    const m = dd.getMonth() + 1;
    const d = dd.getDate();
    const h = dd.getHours();
    const mm = dd.getMinutes();
    return (
      y + '-' + (m < 10 ? '0' : '') + m + '-' + (d < 10 ? '0' : '') + d + 'T' + (h < 10 ? '0' : '') + h + ':' + (mm < 10 ? '0' : '') + mm
    );
  });
  return s;
}
