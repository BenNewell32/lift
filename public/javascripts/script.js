// calendar

const currentYear = new Date().getFullYear();
// https://year-calendar.github.io/js-year-calendar/documentation
new Calendar("#calendar", {
  disabledDays: [
    new Date(currentYear, 0, 11),
    new Date(currentYear, 0, 12),
    new Date(currentYear, 0, 13),
    new Date(currentYear, 0, 14),
    new Date(currentYear, 0, 15),
    new Date(currentYear, 0, 16),

    new Date(currentYear, 0, 24),
    new Date(currentYear, 0, 25),
    new Date(currentYear, 0, 26),
    new Date(currentYear, 0, 27),
    new Date(currentYear, 0, 28),
    new Date(currentYear, 0, 29),

    new Date(currentYear, 1, 01),
    new Date(currentYear, 1, 02),
    new Date(currentYear, 1, 03),
    new Date(currentYear, 1, 04),
    new Date(currentYear, 1, 05),
    new Date(currentYear, 1, 06),

    new Date(currentYear, 1, 15),
    new Date(currentYear, 1, 16),
    new Date(currentYear, 1, 17),
    new Date(currentYear, 1, 18),
    new Date(currentYear, 1, 19),
    new Date(currentYear, 1, 20),

    new Date(currentYear, 1, 23),
    new Date(currentYear, 1, 24),
    new Date(currentYear, 1, 25),
    new Date(currentYear, 1, 26),
    new Date(currentYear, 1, 27),
    new Date(currentYear, 1, 28),
  ],
  dataSource: [
    // PPAs
    {
      startDate: new Date(currentYear, 0, 12),
      endDate: new Date(currentYear, 0, 16),
      color: "#03639e",
    },
    {
      startDate: new Date(currentYear, 1, 01),
      endDate: new Date(currentYear, 1, 05),
      color: "#03639e",
    },
    {
      startDate: new Date(currentYear, 1, 15),
      endDate: new Date(currentYear, 1, 19),
      color: "#03639e",
    },
    {
      startDate: new Date(currentYear, 1, 23),
      endDate: new Date(currentYear, 1, 26),
      color: "#03639e",
    },
    {
      startDate: new Date(currentYear, 2, 09),
      endDate: new Date(currentYear, 2, 12),
      color: "#03639e",
    },
    {
      startDate: new Date(currentYear, 2, 16),
      endDate: new Date(currentYear, 2, 19),
      color: "#03639e",
    },
    {
      startDate: new Date(currentYear, 3, 04),
      endDate: new Date(currentYear, 3, 08),
      color: "#03639e",
    },
    {
      startDate: new Date(currentYear, 3, 20),
      endDate: new Date(currentYear, 3, 23),
      color: "#03639e",
    },
    // MLPs
    {
      startDate: new Date(currentYear, 0, 26),
      endDate: new Date(currentYear, 0, 29),
      color: "#f0612e",
    },
  ],
});
