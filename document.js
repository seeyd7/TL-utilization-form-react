import React from 'react';
import './docStyle.css'; 

const UtilizationDoc = ({
  oddzial,
  oddzialAdres,
  date,
  invoiceNumber,
  invoicePurchaseDate,
  member1,
  member2,
  member3,
  barcode,
  productName,
  unit,
  amount,
  unitPrice,
  wartoscOgraniczona,
  utilizationCause,
  sposZnisz
}) => {
  return (
    <div className="page">
      <section className="complaint-document">
        <div className="doc-header">
          <img style={{ height: '6vh', width: 'auto', marginBottom: '2%' }} src="logo.png" alt="Logo" />
          <p>Nazwa firmy</p><br />
          <p>Adres firmy</p><br />
          <p>Kod, Miasto</p><br />
          <p>NIP</p><br />
          <p>ODDZIAŁ: <span style={{ fontStyle: 'italic', backgroundColor: 'lightgray' }}>{oddzial}</span></p><br />
          <p>ADRES: <span style={{ fontStyle: 'italic', backgroundColor: 'lightgray' }}>{oddzialAdres}</span></p><br />
        </div>
        <div className="date">
          <p>DNIA: <span style={{ fontStyle: 'italic' }}>{date}</span></p>
        </div>
        <div className="protocol-number">
          <p>PROTOKÓŁ ZNISZCZENIA</p>
        </div>
        <div className="protocol-content">
          <p>DO DOKUMENTU ZAKUPU NR: <span style={{ fontStyle: 'italic', backgroundColor: 'lightgray' }}>{invoiceNumber}</span>,</p> <p>Z DNIA: <span style={{ fontStyle: 'italic', backgroundColor: 'lightgray' }}>{invoicePurchaseDate}</span></p><br />
        </div>
        <div className="comitmee-members">
          <p style={{ fontSize: '13px' }}>W dniu {date} komisja w składzie: </p>
          <p style={{ fontSize: '13px', fontStyle: 'italic', backgroundColor: 'lightgray' }}>1. {member1}</p>
          <p style={{ fontSize: '13px', fontStyle: 'italic', backgroundColor: 'lightgray' }}>2. {member2}</p>
          <p style={{ fontSize: '13px', fontStyle: 'italic', backgroundColor: 'lightgray' }}>3. {member3}</p>
          <p style={{ fontSize: '13px' }}>dokonała trwałego zniszczenia rzeczy:</p>
        </div>
        <div className="protocol-table">
          <div className="parent">
            <div className="div1">Lp.</div>
            <div className="div2">Kod kreskowy</div>
            <div className="div3">Nazwa towaru</div>
            <div className="div4">Jednostka miary</div>
            <div className="div5">Ilość</div>
            <div className="div6">Cena jednostkowa</div>
            <div className="div7">Wartość</div>
            <div className="div8">Przyczyna zniszczenia</div>
            <div className="div9">1.</div>
            <div className="div10">{barcode}</div>
            <div className="div11">{productName}</div>
            <div className="div12">{unit}</div>
            <div className="div13">{amount}</div>
            <div className="div14">{unitPrice} zł</div>
            <div className="div15">{wartoscOgraniczona} zł</div>
            <div className="div16">{utilizationCause}</div>
          </div>
        </div>
        <div className="utilization-way">
          <p style={{ fontSize: '13px', fontStyle: 'italic', backgroundColor: 'lightgray' }}>Zniszczenia dokonano poprzez: {sposZnisz}</p>
        </div>
        <div style={{ border: '1px solid black' }} className="receiving-signature">
          <p>Członek komisji 1</p>
        </div>
        <div style={{ border: '1px solid black' }} className="receiving-signature">
          <p>Członek komisji 2</p>
        </div>
        <div style={{ border: '1px solid black' }} className="receiving-signature">
          <p>Członek komisji 3</p>
        </div>
      </section>
    </div>
  );
};

export default UtilizationDoc;
