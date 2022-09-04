export const formatDate = (date: Date): string => {
  const timeFormat = new Intl.DateTimeFormat("en-US", {
    timeStyle: "short"
  })
    .format(new Date(date))
    .replaceAll(" ", "");

  const dateFormat = new Date(date)
    .toLocaleDateString("en-US")
    .replaceAll("/", ".");

  return `${dateFormat} ${timeFormat}`;
};
