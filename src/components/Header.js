import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  }
}));

function Header () {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          React CRUD Material UI
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
