import { ToastContainer, toast } from 'toastify';
import 'toastify/dist/styles.css'; // Toastify styles

export const mensajeCarrito = () => {
    const handleShowToast = () => {
        toast.info("This is a toast", {
          className: "info",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        });
      };
    
      return (
        <div>
          <button onClick={handleShowToast}>Show Toast</button>
          <ToastContainer />
        </div>
      );
}
