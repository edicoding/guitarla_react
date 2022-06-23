import Image from "next/image";
import Layout from "../components/Layout";
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>

          <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg'
          alt="Imagen sobre nosotros" />
          
          <div>
            <p>
              Nulla nec bibendum orci. Sed semper dictum pellentesque. Duis non
              consectetur eros. In ullamcorper lacinia lectus ac consequat.
              Vestibulum placerat, justo quis mollis vulputate, turpis metus
              tincidunt neque, ut viverra nisi sem vitae felis. Nam molestie ut
              metus non finibus. Donec vel urna ac metus fermentum ornare. Mauris
              blandit dolor sed bibendum porttitor. Morbi commodo metus quis
              dapibus euismod. Vivamus maximus massa at purus faucibus, quis
              feugiat nunc aliquam. Morbi fermentum dui a dictum maximus. Nunc ac
              augue egestas, malesuada ante volutpat, porta massa. Nullam
              pellentesque id odio vitae cursus. Suspendisse iaculis enim qui
            </p>
            <p>
              Nulla nec bibendum orci. Sed semper dictum pellentesque. Duis non
              consectetur eros. In ullamcorper lacinia lectus ac consequat.
              Vestibulum placerat, justo quis mollis vulputate, turpis metus
              tincidunt neque, ut viverra nisi sem vitae felis. Nam molestie ut
              metus non finibus. Donec vel urna ac metus fermentum ornare. Mauris
              blandit dolor sed bibendum porttitor. Morbi commodo metus quis
              dapibus euismod. Vivamus maximus massa at purus faucibus, quis
              feugiat nunc aliquam. Morbi fermentum dui a dictum maximus. Nunc ac
              augue egestas, malesuada ante volutpat, porta massa. Nullam
              pellentesque id odio vitae cursus. Suspendisse iaculis enim 
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
