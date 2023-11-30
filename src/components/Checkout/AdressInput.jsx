import { Grid, TextField } from '@mui/material'

import { useFormContext, Controller } from 'react-hook-form'

const AdressInput = ({ name, label, required }) => {
  const { control } = useFormContext()
  return (
    <Grid item xs={12} sm={6} >
      <Controller
        render={({ field }) => (
          <TextField {...field} label={label} required={required} fullWidth/>)}
        
        defaultValue=""
        control={control}
        name={name}
      />
    </Grid>

  )
}

export default AdressInput