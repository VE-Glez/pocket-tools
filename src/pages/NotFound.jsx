import React from 'react';
import { Link } from 'react-router-dom';
import cloud from '../../public/PNG49.png';
import Styles from '../styles/notFound.module.scss';

const NotFound = () => (
  <div className={Styles.container}>
    <picture className={Styles.background}>
      <img src={cloud} alt="fondo" />
    </picture>
    <h1>404</h1>
    <h2>Not found</h2>
    <Link to="/">
      <button type="button">Regresar a home</button>
    </Link>
  </div>
);

export default NotFound;
