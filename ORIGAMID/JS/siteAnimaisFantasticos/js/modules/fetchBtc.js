export default function initFetchBtc() {

}

fetch('https://blockchain.info/ticker')
  .then((response) => response.json())
  .then((btc) => {
    const btcPreco = document.querySelector('.btcPreco');
    btcPreco.innerText = (10000 / btc.BRL.sell).toFixed(3);
  }).catch((erro) => {
    console.log(Error(erro));
  });
