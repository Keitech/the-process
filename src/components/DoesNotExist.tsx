import Footer from './Footer/Footer';

const DoesNotExist = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-[80vw] flex flex-col items-center my-[20vh] text-5xl'>This page has nothing!</div>
      <Footer />
    </div>
  );
};

export default DoesNotExist;
