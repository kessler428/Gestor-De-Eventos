import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer  } from 'react-big-calendar';

require('moment/locale/es.js')

const localizer = momentLocalizer(moment);

const events = [
    {
        title: "Pre-encuentro vencedores",
        allDay: true,
        start: new Date(2022,4,25),
        end: new Date(2022,4,25)
    },
    {
        title: "Hackaton",
        start: new Date(2022,4,28),
        end: new Date(2022,4,29)
    },
    {
        title: "Conferencia",
        start: new Date(2022,3,30),
        end: new Date(2022,3,30)
    }
]

const Calendario = () => {
  return (
    <div className='border-t mt-10 w-10/12 mb-36'>
        <Calendar 
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{height: 400, width: 820, marginTop: "40px", marginLeft: "15px"}}
            messages={{
                next: "Siguiente",
                previous: "Anterior",
                today: "Hoy",
                month: "Mes",
                week: "Semana",
                day: "Día",
              }}
        />
    </div>
  )
}

export default Calendario;