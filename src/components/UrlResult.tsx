const UrlResult = () => {
  return (
    <div className="flex md:flex-row flex-col  justify-between">
      <span className="truncate">https://bitly.com/pages/acceptable-use</span>
      <div className="inline-flex gap-2">
        <a href="#" className="text-blue-600 truncate">
          https://bitly.com/pages/acceptable-use
        </a>
        <button>copy</button>
      </div>
    </div>
  );
};

export default UrlResult;
