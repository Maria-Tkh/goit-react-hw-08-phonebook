import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Spinner() {
  return <Loader type="Rings" color="#00BFFF" timeout={3000} />;
}
