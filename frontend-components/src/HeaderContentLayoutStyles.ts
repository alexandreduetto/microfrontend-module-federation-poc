import { createStyles, StyleRules, Theme } from '@material-ui/core/styles';

const HeaderContentLayoutStyles = (theme: Theme): StyleRules =>
  createStyles({
    fullHeightLayout: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    header: {
      padding: theme.spacing(4, 0, 3),
    },
    content: {
      height: '100%',
      overflow: 'auto',
    },
    sideGutters: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    defaultView: {
      [theme.breakpoints.down('xs')]: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    headerGutters: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  });

export default HeaderContentLayoutStyles;
