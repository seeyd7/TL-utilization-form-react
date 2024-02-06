import React, { useState } from 'react';
import './formStyle.css';

const ProtokolZniszczenia = () => {
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

  const generateDocument = () => {
    const { date, invoiceNumber, invoicePurchaseDate, member1, member2, member3, sposZnisz } = formDaneSklepu;
  
    let productRows = '';
  
    let barcode, productName, unit, amount, unitPrice, wartoscOgraniczona, utilizationCause;
  
    products.forEach((product, index) => {
      barcode = product.barcode;
      productName = product.productName;
      unit = product.unit;
      amount = product.amount;
      unitPrice = product.unitPrice;
      wartoscOgraniczona = (amount * unitPrice).toFixed(2);
      utilizationCause = product.utilizationCause;
  
      productRows += `
        <tr key=${index + 1}>
          <td>${barcode}</td>
          <td>${productName}</td>
          <td>${unit}</td>
          <td>${amount}</td>
          <td>${unitPrice}</td>
          <td>${wartoscOgraniczona} zł</td>
          <td>${utilizationCause}</td>
        </tr>
      `;
    });

    const oddzial = "Oddział 1";
    const oddzialAdres = 'Ulica 1A,<br> 00-000 Miasto';

    let docContent = `
      <!DOCTYPE html>
      <html lang="pl">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="src/docStyle.css">
          <title>Protokół zniszczenia</title>
      </head>
      <body style="--bleeding: 0.5cm;--margin: 1cm;">
      <div class="page">
      <section class="complaint-document">
          <div class="doc-header">
              <img style="height: 6vh; width: auto; margin-bottom: 2%" src="logo.png">
              <p>Nazwa firmy</p><br>
              <p>Adres firmy</p><br>
              <p>Kod, Miasto</p><br>
              <p>NIP</p><br>
              <p>ODDZIAŁ: <p style="font-style: italic; background-color: lightgray;"> ${oddzial} </p></p><br>
              <p>ADRES: <p style="font-style: italic; background-color: lightgray;"> ${oddzialAdres} </p></p><br>
          </div>
          <div class="date">
              <p>DNIA: <p style="font-style: italic;"> ${date} </p></p>
          </div>
          <div class="protocol-number">
              <p>PROTOKÓŁ ZNISZCZENIA</p>
          </div>
          <div class="protocol-content">
              <p>DO DOKUMENTU ZAKUPU NR: <p style="font-style: italic; background-color: lightgray;"> ${invoiceNumber}</p>,</p> <p>Z DNIA: <p style="font-style: italic; background-color: lightgray">${invoicePurchaseDate}</p></p><br>
          </div>
          <div class="comitmee-members">
              <p style="font-size: 13px;">W dniu ${date} komisja w składzie: </p>
              <p style="font-size: 13px; font-style: italic; background-color: lightgray;">1. ${member1}</p>
              <p style="font-size: 13px; font-style: italic; background-color: lightgray;">2. ${member2}</p>
              <p style="font-size: 13px; font-style: italic; background-color: lightgray;">3. ${member3}</p>
              <p style="font-size: 13px;">dokonała trwałego zniszczenia rzeczy:</p>
          </div>
          <div class="protocol-table">
          <div class="parent">
              <div class="div1">Lp.</div>
              <div class="div2">Kod kreskowy</div>
              <div class="div3">Nazwa towaru</div>
              <div class="div4">Jednostka miary</div>
              <div class="div5">Ilość</div>
              <div class="div6">Cena jednostkowa</div>
              <div class="div7">Wartość</div>
              <div class="div8">Przyczyna zniszczenia</div>
              <div class="div9">1.</div>
              <div class="div10">${barcode}</div>
              <div class="div11">${productName}</div>
              <div class="div12">${unit}</div>
              <div class="div13">${amount}</div>
              <div class="div14">${unitPrice} zł</div>
              <div class="div15">${wartoscOgraniczona} zł</div>
              <div class="div16">${utilizationCause}</div>
          </div>
      </div>
          <div class="utilization-way">
              <p style="font-size: 13px; font-style: italic; background-color: lightgray;">Zniszczenia dokonano poprzez: ${sposZnisz}</p>
          </div>
          <div style="border: 1px solid black" class="receiving-signature">
              <p>Członek komisji 1</p>
          </div>
          <div style="border: 1px solid black" class="receiving-signature">
              <p>Członek komisji 2</p>
          </div>
          <div style="border: 1px solid black" class="receiving-signature">
              <p>Członek komisji 3</p>
          </div>
      </section>
  </div>
      </body>
      </html>`;

    let newWindow = window.open('', '_blank');

    newWindow.document.write(docContent);

    newWindow.document.close();
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
              <span>date</span>
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
              <span>date zakupu</span>
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
          onClick={generateDocument}
        />
      </div>
        </div>
      </section>
    </div>
  );
};

export default ProtokolZniszczenia;

