import HeaderAdmin from "../../../components/Header/HeaderAdmin"
import SideBar from "../../../components/SideBar"
import { SideEditEvents } from "../../../components/SideBar/SideEditEvents"


export const EditarEvento = () => {
  return (
    <>  
        <HeaderAdmin />
        <div className="flex flex-row">
            <SideBar />
            <SideEditEvents />
        </div>
    </>
  )
}