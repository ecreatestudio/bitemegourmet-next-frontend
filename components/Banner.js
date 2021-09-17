const Banner = ({ enabled }) => {
  return (
    <div>
      {enabled ? (
        <div className="flex flex-col h-12 text-center bg-red-500 lg:rounded-b-lg">
          <h4 className="mt-3 font-semibold text-base leading-tight truncate text-white">
            OPENING SOON! NOT TAKING ORDERS YET.
          </h4>
        </div>
      ) : null}
    </div>
  );
};

export default Banner;
