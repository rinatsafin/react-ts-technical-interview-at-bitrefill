import './App.css';
import { Fragment } from 'react';
import useQueryProducts from './hooks/useQueryProducts/useQueryProducts';

const URL =
  'https://gist.githubusercontent.com/Furzel/a085468fbeef784de0ddb866e761f638/raw/01722fcac0c3f0fe85da45ab3084d64caf51fb23/bitrefilltechtest.json';

const LIMIT = 10;
// Task: https://docs.google.com/document/d/1_ikwsr9LMU1SMbyQRpqvTeGYsh5VLRBGWGJDqK0rYMw/edit
// - Name of the product
// - Country of the product
// - Currency
// - Categories
// - Max value available for the product

function App() {
  const data = useQueryProducts(URL);
  const dd = data.slice(0, LIMIT);

  return (
    <div className="App">
      <div className="Product">
        {dd.map((p) => {
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
