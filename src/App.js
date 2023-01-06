
import ContactPage from './components/contactpage/ContactPage';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from './components/signup/Signup';
import Login from "../src/components/Login/Login"
import ProtectedRoute from './components/Protected_routes/ProtectedRoute';
import ContactProvider from './components/Context/ContactProvider';
import SearchProvider from './components/Context/SearchProvider';
import ImportProvider from './components/Context/ImportProvider';
// import Delete from './components/delete/Delete';
function App() {
  return (
    <>
      <BrowserRouter>
        <ImportProvider>
          <ContactProvider>
            <SearchProvider>
              <Routes>
                <Route path='/signup' element={<Signup />} />
                <Route path='/' element={<Login />} />
                <Route  element={<ProtectedRoute />} >
                  <Route path='/contacts' element={

                    <ContactPage />


                  } />
                </Route>

                {/* <Route path='/fake' element={<Delete />} /> */}

              </Routes>

            </SearchProvider>
          </ContactProvider>
        </ImportProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
