import CalendarStyle from "@/components/Calendar";
import { Typography, Button } from "@mui/material";

export default function ShowCalendar() {
  return (
    <>
      <header className='flex flex-col items-center'>
        <Typography variant="h1" className='pt-5 pb-10'>Calendar</Typography>
        <Button href='/' variant='contained' disableElevation className="bg-teal hover:bg-white border border-solid hover:border-teal text-white hover:text-teal">Home</Button>
      </header>
      <main>
        <CalendarStyle />
      </main>
    </>
  )
}