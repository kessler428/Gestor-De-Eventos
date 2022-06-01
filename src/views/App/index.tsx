import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../HomePage";
import NotFoundPage from "../NotFoundPage";
import Login from "../Users/Login";
import Register from "../Users/Register";
import { HomeAdmin } from "../Admin/homeAdmin";
import { 
  Events,
  CrearEvento, 
  VerEvento, 
  BasicInformation, 
  Details, 
  Order, 
  Publish, 
  Dashboard, 
  OrderForm, 
  ConfirmationForm, 
  WaitList 
} from "../Admin/Eventos";
import { Pedidos } from "../Admin/Pedidos/Pedidos";
import { 
  Reportes, 
  VerReporte1, 
  VerReporte2 
} from "../Admin/Reportes";
import { Finanzas } from "../Admin/Finanzas/Finanzas";
import { 
  Settings, 
  PerfilEdit, 
  PerfilAdd 
} from "../Admin/Settings";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={ <HomePage /> } 
        />
        <Route 
          path="*" 
          element={ <NotFoundPage /> } 
        />
        <Route 
          path="/home_admin" 
          element={ <HomeAdmin /> } 
        />
        <Route 
          path="/login" 
          element={  <Login /> } 
        />
        <Route 
          path="/register" 
          element={ <Register/>  } 
        />
        <Route 
          path="/events" 
          element={ <Events /> } 
        />
        <Route 
          path="/Crear_Evento" 
          element={ <CrearEvento />  } 
        />
        <Route 
          path="/ver_evento" 
          element={ <VerEvento />  } 
        />
        <Route 
          path="/editar_evento/informacion_basica" 
          element={ <BasicInformation /> }
        />
        <Route 
          path="/editar_evento/confirmacion_del_pedido" 
          element={ <ConfirmationForm /> }
        />
        <Route 
          path="/editar_evento/panel_de_control" 
          element={ <Dashboard /> }
        />
        <Route 
          path="/editar_evento/detalles" 
          element={ <Details /> }
        />
        <Route 
          path="/editar_evento/pedidos" 
          element={ <Order /> }
        />
        <Route 
          path="/editar_evento/formulario_del_pedido" 
          element={ <OrderForm /> }
        />
        <Route 
          path="/editar_evento/publicaciones" 
          element={ <Publish /> }
        />
        <Route 
          path="/editar_evento/lista_de_espera" 
          element={ <WaitList /> }
        />
        <Route 
          path="/pedidos" 
          element={  <Pedidos /> } 
        />
        <Route 
          path="/reportes" 
          element={ <Reportes /> } 
        />
        <Route 
          path="/Mi_evento/Reporte/Resumen_de_ventas" 
          element={  <VerReporte1 /> } 
        />
        <Route 
          path="/Mi_evento/Reporte/Ventas_tipo_entrada" 
          element={  <VerReporte2 /> } 
        />
        <Route 
          path="/finanzas" 
          element={ <Finanzas />} 
        />
        <Route 
          path="/Configuraciones" 
          element={  <Settings />} 
        />
        <Route 
          path="/agregar_perfil" 
          element={ <PerfilAdd />} 
        />
        <Route 
          path="/editar_perfil" 
          element={  <PerfilEdit />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
