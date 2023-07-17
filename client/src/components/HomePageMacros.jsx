const HomePageMacros = () => {
  return (
    <div className='daily-macro-container'>
      <h2>Daily Macros - %</h2>
      <div className='macro-container'>
        <div className='macro-protein'>
          <h1>40</h1>
        </div>
        <div className='macro-carb'>
          <h1>40</h1>
        </div>
        <div className='macro-fat'>
          <h1>20</h1>
        </div>
      </div>
      <div className='macro-text-container'>
        <div className='macro-protein'>
          <h1>P</h1>
        </div>
        <div className='macro-carb'>
          <h1>C</h1>
        </div>
        <div className='macro-fat'>
          <h1>F</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePageMacros;
