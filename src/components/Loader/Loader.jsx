import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#5736a3"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        marginTop: '20px',
        marginBottom: '20px',
        justifyContent: 'center',
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loader;
