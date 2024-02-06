import React, { useState } from 'react';
import './formStyle.css';

const UtilizationForm = () => {
  const [products, setProducts] = useState([
    {
      barcode: '',
      productName: '',
      unit: '',
      amount: '',
      unitPrice: '',
      utilizationCause: '',
    },
  ]);

  const [formDaneSklepu, setFormDaneSklepu] = useState({
    date: '',
    invoiceNumber: '',
    invoicePurchaseDate: '',
    member1: '',
    member2: '',
    member3: '',
  });

  const handleProductInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedProducts = [...products];
    updatedProducts[index][name] = value;
    setProducts(updatedProducts);
  };

  const addProduct = () => {
    if (products.length < 5) {
      setProducts([...products, {}]);
    }
  };

  const handleFormDaneSklepuChange = (event) => {
    const { name, value } = event.target;
    setFormDaneSklepu((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div>
      <section className="contact" id="contact">
        <h1>Protokół zniszczenia</h1>
        <div className="contactForm">
          <form>
            <h4>Dane sklepu</h4>
            <div className="inputBox">
              <input
                type="date"
                name="date"
                value={formDaneSklepu.date}
                onChange={handleFormDaneSklepuChange}
                required
              />
              <span>Data</span>
            </div>

            <div className="inputBox">
              <input
                type="text"
                name="invoiceNumber"
                value={formDaneSklepu.nrProtokolu}
                onChange={handleFormDaneSklepuChange}
                required
              />
              <span>Numer dokumentu zakupu</span>
            </div>

            <div className="inputBox">
              <input
                type="date"
                name="invoicePurchaseDate"
                value={formDaneSklepu.nrProtokolu}
                onChange={handleFormDaneSklepuChange}
                required
              />
              <span>Data zakupu</span>
            </div>

            <div className="inputBox">
              <input
                type="text"
                name="member1"
                value={formDaneSklepu.nrProtokolu}
                onChange={handleFormDaneSklepuChange}
                required
              />
              <span>Członek komisji 1</span>
            </div>

            <div className="inputBox">
              <input
                type="text"
                name="member2"
                value={formDaneSklepu.nrProtokolu}
                onChange={handleFormDaneSklepuChange}
                required
              />
              <span>Członek komisji 2</span>
            </div>

            <div className="inputBox">
              <input
                type="text"
                name="member3"
                value={formDaneSklepu.nrProtokolu}
                onChange={handleFormDaneSklepuChange}
                required
              />
              <span>Członek komisji 3</span>
            </div>

            <div className="inputBox">
              <input
                type="text"
                name="sposZnisz"
                value={formDaneSklepu.sposZnisz}
                onChange={handleFormDaneSklepuChange}
                required
              />
              <span>Sposób zniszczenia</span>
            </div>

          </form>

          {products.map((product, index) => (
            <div key={index}>
              <h4 style={{ marginTop: '5%' }}>Produkt {index + 1}</h4>
              <div className="inputBox">
                <input
                  type="number"
                  name="barcode"
                  value={product.barcode || ''}
                  onChange={(e) => handleProductInputChange(index, e)}
                  required
                />
                <span>Kod kreskowy</span>
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  name="productName"
                  value={product.productName || ''}
                  onChange={(e) => handleProductInputChange(index, e)}
                  required
                />
                <span>Nazwa towaru</span>
              </div>

              <div className="inputBox">
                <select
                  name="unit"
                  onChange={(e) => handleProductInputChange(index, e)}
                  value={product.unit || ''}
                  required
                >
                  <option hidden selected>Wybierz jednostkę</option>
                  <option value="SZT">Sztuka</option>
                  <option value="MB">Metr bieżący</option>
                  <option value="M²">Metr kwadratowy</option>
                  <option value="M³">Metr sześcienny</option>
                </select>
                <span>Jednostka ewidencyjna</span>
              </div>

		
          <div className="inputBox">
            <input
              type="number"
              name="amount"
              value={product.amount || ''}
              onChange={(e) => handleProductInputChange(index, e)}
              required
            />
            <span>Ilość</span>
          </div>

          <div className="inputBox">
            <input
              type="number"
              name="unitPrice"
              value={product.unitPrice || ''}
              onChange={(e) => handleProductInputChange(index, e)}
              required
            />
            <span>Cena Jednostkowa</span>
          </div>

          <div className="inputBox">
            <input
              type="text"
              name="utilizationCause"
              value={product.utilizationCause || ''}
              onChange={(e) => handleProductInputChange(index, e)}
              required
            />
            <span>Przyczyna zniszczenia</span>
          </div>
        </div>
      ))}

      {products.length < 5 && (
        <button className="inputBox" onClick={addProduct}>Dodaj produkt</button>
      )}
      <div className="inputBox">
        <input
          type="button"
          value="Generuj dokument"
        />
      </div>
        </div>
      </section>
    </div>
  );
};

export default UtilizationForm;

