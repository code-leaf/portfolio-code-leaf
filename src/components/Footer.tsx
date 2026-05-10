export const Footer = () => {
  return (
    <footer className='bg-white shadow-md'>
      <div className='container mx-auto px-6 py-4'>
        <p className='text-center text-gray-600'>
          © {new Date().getFullYear()} CodeLeaf. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
