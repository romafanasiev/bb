export const headerStyles = {
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    pr: 4,
  },
  nav: {
    display: { xs: 'none', md: 'block' },
  },
  navUl: {
    '> li': {
      display: 'flex',
      gap: 1,
    },
  },
  menu: {
    display: { xs: 'block', md: 'none' },
  },
};
