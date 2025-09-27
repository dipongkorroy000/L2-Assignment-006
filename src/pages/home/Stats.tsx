

const Stats = () => {
  return (
    <section className="py-32 bg-accent">
      <div className="container flex flex-col items-start text-left mx-auto">
        <div className="mb-12 w-full md:mb-16">
          <h2 className="text-3xl font-bold text-pretty sm:text-4xl lg:text-5xl text-center">
            Platform Performance Insights
          </h2>
        </div>
        <div className="grid w-full grid-cols-2 gap-12 sm:w-fit sm:grid-cols-4 lg:gap-16 mx-auto">
          <div className="w-full">
            <div className="mb-2 text-4xl font-semibold sm:text-4xl lg:text-5xl">
              90%
            </div>
            <div className="text-base leading-6 text-muted-foreground lg:text-lg">
              Reviews
            </div>
          </div>
          <div className="w-full">
            <div className="mb-2 text-4xl font-semibold sm:text-4xl lg:text-5xl">
              200+
            </div>
            <div className="text-base leading-6 text-muted-foreground lg:text-lg">
              Companies
            </div>
          </div>
          <div className="w-full">
            <div className="mb-2 text-4xl font-semibold sm:text-4xl lg:text-5xl">
              99%
            </div>
            <div className="text-base leading-6 text-muted-foreground lg:text-lg">
              Comfortable
            </div>
          </div>
          <div className="w-full">
            <div className="mb-2 text-4xl font-semibold sm:text-4xl lg:text-5xl">
              150+
            </div>
            <div className="text-base leading-6 text-muted-foreground lg:text-lg">
              Delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats ;
