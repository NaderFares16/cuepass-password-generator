import logo from 'public/logo.svg';
import { Link } from '@remix-run/react';
import Index from '~/routes/_index';

export default function Cuepass() {
  return (
    <Link to={Index}><img src={logo} alt="Cuepass" /></Link>
  );
}