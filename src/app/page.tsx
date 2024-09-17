import Link from 'next/link';

export default function Home() {
  return (
    <>
    	<h1>Nois de novo</h1>
    	<Link href={'/products'}>Ir para a pagina de produtos</Link>
    </>
    
  );
}
