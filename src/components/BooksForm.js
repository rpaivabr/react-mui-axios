import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  form: {
    margin: '50px 0 20px 0'
  },
  input: {
    width: '100%'
  },
  button: {
    margin: '0 5px'
  }
}))

function BooksForm ({
  bookForm,
  onValueChange,
  refreshPage,
  createOrUpdateBook,
  isEditing
}) {
  const classes = useStyles()

  return (
    <>
      <form className={classes.form} noValidate autoComplete='off'>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.input}
              id='title'
              name='title'
              value={bookForm.title}
              onChange={onValueChange}
              label='Título'
              variant='outlined'
              error={!bookForm.title}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.input}
              id='author'
              name='author'
              value={bookForm.author}
              onChange={onValueChange}
              label='Autor'
              variant='outlined'
              error={!bookForm.author}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.input}
              id='company'
              name='company'
              value={bookForm.company}
              onChange={onValueChange}
              label='Editora'
              variant='outlined'
              error={!bookForm.company}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              className={classes.input}
              id='year'
              name='year'
              value={bookForm.year}
              onChange={onValueChange}
              label='Ano'
              variant='outlined'
              error={!bookForm.year}
            />
          </Grid>
        </Grid>
      </form>

      <Button
        variant='contained'
        color='primary'
        onClick={createOrUpdateBook}
        className={classes.button}
      >
        {isEditing ? 'Atualizar' : 'Criar'}
      </Button>
      <Button
        variant='contained'
        onClick={refreshPage}
        className={classes.button}
      >
        Cancelar
      </Button>
    </>
  )
}

export default BooksForm
