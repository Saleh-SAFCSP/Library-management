import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const errorAlert = message => {
  setTimeout(() => {
    MySwal.fire({
      icon: 'error',
      text: message,
      background: 'white',
      confirmButtonText: 'Try again',
      confirmButtonColor: '#121440',
    });
  }, [100]);
};

export const successAlertTimer = message => {
  setTimeout(() => {
    MySwal.fire({
      icon: 'success',
      text: message,
      timer: 1000,
      width: 300,
      background: 'white',
      showConfirmButton: false,
    });
  }, [100]);
};
