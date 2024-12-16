import React from 'react';
import styles from '../DadosCarros.module.css';

const DadosCarros = () => {
  const carros = [
    {
      id: 1,
      carro: {
        marca: "BMW",
        modelo: "BMW M4",
        ano: 2023,
        preco: 450000,
      },
    },
    {
      id: 2,
      carro: {
        marca: "Ferrari",
        modelo: "Ferrari F8 Tributo",
        ano: 2023,
        preco: 3200000,
      },
    },
    {
      id: 3,
      carro: {
        marca: "Lamborghini",
        modelo: "Lamborghini Huracán EVO",
        ano: 2023,
        preco: 2500000,
      },
    },
  ];

  return (
    <div className={styles.conteudo}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Marca</th>
            <th className={styles.th}>Modelo</th>
            <th className={styles.th}>Ano</th>
            <th className={styles.th}>Preço</th>
          </tr>
        </thead>
        <tbody>
          {carros.map((item) => (
            <tr key={item.id} className={styles.tr}>
              <td className={styles.td}>{item.carro.marca}</td>
              <td className={styles.td}>{item.carro.modelo}</td>
              <td className={styles.td}>{item.carro.ano}</td>
              <td className={styles.td}>R${item.carro.preco.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DadosCarros;
