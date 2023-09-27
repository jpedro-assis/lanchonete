import React, { useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('');
  const [rua, setRua] = useState('');
  const [referencia, setReferencia] = useState('');
  const [refr, setRefr] = useState('');
  const [pedido, setPedido] = useState('');
  const [pagamento, setPagamento] = useState('');
  const [envio, setEnvio] = useState('');
  const [tel, setTel] = useState('');
  // const [troco, setTroco] = useState('');
  const [radio, setRadio] = useState('');
  const [refri, setRefri] = useState('');
  const [total, setTotal] = useState('');
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const handleValor2Change = (event) => {
    setValor2(Number(event.target.value));
  };

  const subtrairValores = () => {
    const resultadoSubtracao = valor2 - total;
    setResultado(resultadoSubtracao);
  };

  const handlePrint = () => {
    // Abre uma nova aba para impressão
    const printWindow = window.open('', '', 'width=600,height=400');

    printWindow.document.open();
    
    let htmlContent = '<html><body><h2>Pedido:</h2>';
    
    if (nome) {
      htmlContent += `<p>Cliente: ${nome}</p>`;
    }
    
    htmlContent += `<p>Metodo de Envio: ${envio}</p>`;
    
    if (envio === 'Entrega') {
      if (rua) {
        htmlContent += `<p>Rua: ${rua}</p>`;
      }
      if (referencia) {
        htmlContent += `<p>Referencia: ${referencia}</p>`;
      }
    }
    
    if (tel) {
      htmlContent += `<p>Telefone: ${tel}</p>`;
    }
    
    if (pedido) {
      htmlContent += `<p>Pedido: ${pedido}</p>`;
    }
    
    htmlContent += `<p>Refrigerante?: ${refri}</p>`;

    if (refri === 'Sim') {
      if (refr) {
        htmlContent += `<p>Bebida: ${refr}</p>`;
      }
    }

    if (pagamento) {
      htmlContent += `<p>Metodo de Pagamento: ${pagamento}</p>`;
    }

    htmlContent += `<p>Valor: ${total}</p>`;
    
    if (pagamento === 'Dinheiro') {
      htmlContent += `<p>Enviar troco: ${radio}</p>`;
      
      if (radio === 'Sim') {
        if (resultado) {
          htmlContent += `<p>Troco: ${resultado}</p>`;
        }
      }
    }
    
    htmlContent += '</body></html>';
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <main>
      <form className='formulario' onSubmit={handlePrint}>
        <h2 className="h2t">Pedido!!!</h2>
        <div>
          <h2 className="h2" htmlFor="nome">Cliente:</h2>
          <input
            className='input'
            required
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <div onChange={(e) => setEnvio(e.target.value)}>
            <h2 className="h2">Metodo de Envio:</h2>
            <input
              type="radio"
              value="Entrega"
              id="Entrega"
              name="radio"
              checked={envio === 'Entrega'}
            />Entrega
            <input
              required
              type="radio"
              id='retidada'
              value="Retirada"
              name="radio"
              checked={envio === 'Retirada'}
            />
            Retirada
          </div>
          {envio === 'Entrega' && (
            <div>
              <h2 className="h2">Rua:</h2>
              <input
                className='input'
                required
                type="text"
                value={rua}
                onChange={(e) => setRua(e.target.value)}
              />
              <h2 className="h2">Referencia:</h2>
              <input
                className='input'
                type="text"
                value={referencia}
                onChange={(e) => setReferencia(e.target.value)}
              />
            </div>
          )}
          <div htmlFor="Telefone">
            <h2 className="h2">Telefone:</h2>
            <input
              className='input'
              type="tel"
              id="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
          <h2 className="h2" htmlFor="pedido">Pedido:</h2>
          <input
            required
            className='input'
            type="text"
            id="pedido"
            value={pedido}
            onChange={(e) => setPedido(e.target.value)}
          />
          <div onChange={(e) => setRefri(e.target.value)}>
            <h2 className="h2">Refrigerante:</h2>
            <input
              required
              type="radio"
              id='Sim'
              value="Sim"
              name="refri"
              checked={refri === 'Sim'}
            />
            Sim
            <input
              required
              type="radio"
              value="Não"
              id="Não"
              name="refri"
              checked={refri === 'Não'}
            />
            Não
          </div>
          {refri === 'Sim' && (
            <div>
              <input
                required
                className='inputt'
                type="text"
                value={refr}
                onChange={(e) => setRefr(e.target.value)}
              />
            </div>
          )}
          <h2 className="h2" htmlFor="pagamento">Metodo de Pagamento:</h2>
          <select
            className='select'
            required
            checked={pagamento === 'Dinheiro' || pagamento === 'Pix'}
            value={pagamento}
            onChange={(e) => setPagamento(e.target.value)}>
            <option value="" disabled>Selecione...</option>
            <option>Dinheiro</option>
            <option>Cartão</option>
            <option>Pix</option>
          </select>
          <h2 className="h2" htmlFor="pedido">Total:</h2>
          <input
            required
            className='input'
            type="number"
            id="total"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
           
          />
          {pagamento === 'Dinheiro' && (
            <div onChange={(e) => setResultado(e.target.value)}>
              <div  onChange={(e) => setRadio(e.target.value)}>
              <h3 className="h2">Enviar troco</h3>
                <input
                  required
                  type='radio'
                  name='test'
                  id='Sim'
                  value="Sim"
                  checked={radio === 'Sim'}
                />Sim
                <input
                  checked={radio === 'Não'}
                  type='radio'
                  name='test'
                  id='Não'
                  value="Não"
                />Não
              </div>
              {radio === 'Sim' && (
                <div>
                <h2 className='h2'>Troco:</h2>
                  <input
                    required
                    className='troco'
                    id='troco'
                    type="number"
                    name='troco'
                    value={resultado}
                    onChange={handleValor2Change}
                  />
                </div>
              )}
            </div>
          )}
      </div>
          <button className='btnEnviar' onClick={subtrairValores} type="submit">Imprimir</button>
    </form >
    </main>
  );
}

export default App;