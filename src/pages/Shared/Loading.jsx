const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner text-primary w-16 h-16"></span>
        <p className="text-lg md:text-xl text-gray-700">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Loading;