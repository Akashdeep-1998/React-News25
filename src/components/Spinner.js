import spinner from '../loading.gif'

const Spinner = () => {

  return (
    <div className="container my-5 text-center">
      <img src={spinner} alt="loading ..." width='45px' height='45px' />
    </div>
  );
}

export default Spinner;
