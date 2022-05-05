import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../HomePage";
import NotFoundPage from "../NotFoundPage";
import Login from "../Users/Login";
import Register from "../Users/Register";
import Events from "../Admin/Eventos/Events";
import Pedidos from "../Admin/Pedidos/Pedidos";
import Reportes from "../Admin/Reportes/Reportes";
import Finanzas from "../Admin/Finanzas/Finanzas";
import CrearEvento from "../Admin/Eventos/CrearEvento";
import HomeAdmin from "../Admin/homeAdmin";
import Settings from "../Admin/Settings/Settings";
import PerfilEdit from "../Admin/Settings/PerfilEdit";
import PerfilAdd from "../Admin/Settings/PerfilAdd";
import VerReporte1 from "../Admin/Reportes/VerReporte1";
import VerReporte2 from "../Admin/Reportes/VerReporte2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/home_admin" element={<HomeAdmin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/events" element={<Events />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/Mi_evento/Reporte/Resumen_de_ventas" element={<VerReporte1 />} />
        <Route path="/Mi_evento/Reporte/Ventas_tipo_entrada" element={<VerReporte2 />} />
        <Route path="/finanzas" element={<Finanzas />} />
        <Route path="/Crear_Evento" element={<CrearEvento />} />
        <Route path="/Configuraciones" element={<Settings />} />
        <Route path="/agregar_perfil" element={<PerfilAdd />} />
        <Route path="/editar_perfil" element={<PerfilEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
