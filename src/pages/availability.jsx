import { Button, Typography } from "@mui/material";

export default function Availability() {
  return (
    <>
      <header className='min-h-screen flex flex-col items-center'>
        <Typography variant="h1" className='pt-5 pb-10'>Availability</Typography>
        <Button href="/" variant='contained' disableElevation className="bg-teal hover:bg-white border border-solid hover:border-teal text-white hover:text-teal">Home</Button>
      </header>
    </>
  )
}