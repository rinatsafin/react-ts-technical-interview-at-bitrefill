import './App.css';
import { Fragment } from 'react';
import useQueryProducts from './hooks/useQueryProducts/useQueryProducts';

const URL =
  'https://gist.githubusercontent.com/Furzel/a085468fbeef784de0ddb866e761f638/raw/01722fcac0c3f0fe85da45ab3084d64caf51fb23/bitrefilltechtest.json';

const LIMIT = 10;
// - Name of the product
// - Country of the product
// - Currency
// - Categories
// - Max value available for the product

function App() {
  const data = useQueryProducts(URL);
  const slicedData = data.slice(0, LIMIT);

  return (
    <div className="App">
      <div className="Product">
        {slicedData.map((p) => {
          return (
            <Fragment key={p.id}>
              <ul className="product-list">
                <li>{p.name}</li>
                <li>{p.country_code}</li>
                <li>{p.currency}</li>
                <li>
                  <ul>
                    {p.categories.map((c, idx) => (
                      <li key={`${c}-${idx}`}>{c}</li>
                    ))}
                  </ul>
                </li>
                <li>{p.maxAmount}</li>
              </ul>
              <hr />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default App;
