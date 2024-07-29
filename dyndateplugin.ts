const fileRegex = /\.(tsx)$/;

export default function myPlugin() {
  return {
    name: 'transform-file',
    transform(src: string, id: string) {
      if (fileRegex.test(id)) {
        return {
          code: replaceDynamicDates(src),
          map: null, // provide source map if available
        };
      }
    },
  };
}

const now = new Date();

const replaceDynamicDates = (src: string) =>
  src.replace(/['|"]dyndatetime\(([^)])*\)['|"]/g, (i) => parseDatestring(i));

const parseDatestring = (s: string) => {
  s = s.replace(/dyndatetime/, '');
  s = s.replace(/\(/, '');
  s = s.replace(/\)/, '');
  s = s.replace(/y/, now.getFullYear().toString());
  s = s.replace(/m/, (now.getMonth() + 1).toString());
  s = s.replace(/d/, now.getDate().toString());
  s = s.replace(/h/, now.getHours().toString());
  s = s.replace(/i/, now.getMinutes().toString());
  s = s.replace(/['|"](.*)['|"]/, (i) => {
    const dateDict: { [index: string]: number } = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
    };
    const date = i.replace(/['|"]/g, '');
    const dateArray = date.split(',');
    dateArray.forEach((i, index) => {
      const splittedNum = i.split(/[/+|/-]/);
      if (splittedNum.length > 1) {
        const minus = i.indexOf('-') !== -1;
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
      "'" +
      y +
      '-' +
      (m < 10 ? '0' : '') +
      m +
      '-' +
      (d < 10 ? '0' : '') +
      d +
      'T' +
      (h < 10 ? '0' : '') +
      h +
      ':' +
      (mm < 10 ? '0' : '') +
      mm +
      "'"
    );
  });
  return s;
};
