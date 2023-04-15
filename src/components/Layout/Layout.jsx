import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Section from 'components/Section/Section';
import Loader from 'components/Loader/Loader';
import AppBar from 'components/AppBar/AppBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <Section>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{ width: "600px", height:"200px", fontSize:"24px", lineHeight:"36px" }}
      />
    </Section>
  );
};
export default Layout;
