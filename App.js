import React, { useState } from 'react';
import './formStyle.css';

const ProtokolZniszczenia = () => {
  const [products, setProducts] = useState([
    {
      kodTowaru: '',
      nazwaTowaru: '',
      jednEwidencyjna: '',
      ilosc: '',
      cenaJedn: '',
      przyczynaZnisz: '',
    },
  ]);

  const [formDaneSklepu, setFormDaneSklepu] = useState({
    data: '',
    nrDokumentuZakupu: '',
    dataDokumentuZakupu: '',
    czlonek1: '',
    czlonek2: '',
    czlonek3: '',
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
    const { data, nrDokumentuZakupu, dataDokumentuZakupu, czlonek1, czlonek2, czlonek3, sposZnisz } = formDaneSklepu;
  
    let productRows = '';
  
    let kodTowaru, nazwaTowaru, jednEwidencyjna, ilosc, cenaJedn, wartoscOgraniczona, przyczynaZnisz;
  
    products.forEach((product, index) => {
      kodTowaru = product.kodTowaru;
      nazwaTowaru = product.nazwaTowaru;
      jednEwidencyjna = product.jednEwidencyjna;
      ilosc = product.ilosc;
      cenaJedn = product.cenaJedn;
      wartoscOgraniczona = (ilosc * cenaJedn).toFixed(2);
      przyczynaZnisz = product.przyczynaZnisz;
  
      productRows += `
        <tr key=${index + 1}>
          <td>${kodTowaru}</td>
          <td>${nazwaTowaru}</td>
          <td>${jednEwidencyjna}</td>
          <td>${ilosc}</td>
          <td>${cenaJedn}</td>
          <td>${wartoscOgraniczona} zł</td>
          <td>${przyczynaZnisz}</td>
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
              <p>DNIA: <p style="font-style: italic;"> ${data} </p></p>
          </div>
          <div class="protocol-number">
              <p>PROTOKÓŁ ZNISZCZENIA</p>
          </div>
          <div class="protocol-content">
              <p>DO DOKUMENTU ZAKUPU NR: <p style="font-style: italic; background-color: lightgray;"> ${nrDokumentuZakupu}</p>,</p> <p>Z DNIA: <p style="font-style: italic; background-color: lightgray">${dataDokumentuZakupu}</p></p><br>
          </div>
          <div class="comitmee-members">
              <p style="font-size: 13px;">W dniu ${data} komisja w składzie: </p>
              <p style="font-size: 13px; font-style: italic; background-color: lightgray;">1. ${czlonek1}</p>
              <p style="font-size: 13px; font-style: italic; background-color: lightgray;">2. ${czlonek2}</p>
              <p style="font-size: 13px; font-style: italic; background-color: lightgray;">3. ${czlonek3}</p>
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
              <div class="div10">${kodTowaru}</div>
              <div class="div11">${nazwaTowaru}</div>
              <div class="div12">${jednEwidencyjna}</div>
              <div class="div13">${ilosc}</div>
              <div class="div14">${cenaJedn} zł</div>
              <div class="div15">${wartoscOgraniczona} zł</div>
              <div class="div16">${przyczynaZnisz}</div>
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
                name="data"
                value={formDaneSklepu.data}
                onChange={handleFormDaneSklepuChange}
                required
              />
              <span>Data</span>
            </div>

            <div className="inputBox">
              <input
                type="text"
                name="nrDokumentuZakupu"
                value={formDaneSklepu.nrProtokolu}
                onChange={handleFormDaneSklepuChange}
                required
              />
              <span>Numer dokumentu zakupu</span>
            </div>

            <div className="inputBox">
              <input
                type="date"
                name="dataDokumentuZakupu"
                value={formDaneSklepu.nrProtokolu}
                onChange={handleFormDaneSklepuChange}
                required
              />
              <span>Data zakupu</span>
            </div>

            <div className="inputBox">
              <input
                type="text"
                name="czlonek1"
                value={formDaneSklepu.nrProtokolu}
                onChange={handleFormDaneSklepuChange}
                required
              />
              <span>Członek komisji 1</span>
            </div>

            <div className="inputBox">
              <input
                type="text"
                name="czlonek2"
                value={formDaneSklepu.nrProtokolu}
                onChange={handleFormDaneSklepuChange}
                required
              />
              <span>Członek komisji 2</span>
            </div>

            <div className="inputBox">
              <input
                type="text"
                name="czlonek3"
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
                  name="kodTowaru"
                  value={product.kodTowaru || ''}
                  onChange={(e) => handleProductInputChange(index, e)}
                  required
                />
                <span>Kod kreskowy</span>
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  name="nazwaTowaru"
                  value={product.nazwaTowaru || ''}
                  onChange={(e) => handleProductInputChange(index, e)}
                  required
                />
                <span>Nazwa towaru</span>
              </div>

              <div className="inputBox">
                <select
                  name="jednEwidencyjna"
                  onChange={(e) => handleProductInputChange(index, e)}
                  value={product.jednEwidencyjna || ''}
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
              name="ilosc"
              value={product.ilosc || ''}
              onChange={(e) => handleProductInputChange(index, e)}
              required
            />
            <span>Ilość</span>
          </div>

          <div className="inputBox">
            <input
              type="number"
              name="cenaJedn"
              value={product.cenaJedn || ''}
              onChange={(e) => handleProductInputChange(index, e)}
              required
            />
            <span>Cena Jednostkowa</span>
          </div>

          <div className="inputBox">
            <input
              type="text"
              name="przyczynaZnisz"
              value={product.przyczynaZnisz || ''}
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

