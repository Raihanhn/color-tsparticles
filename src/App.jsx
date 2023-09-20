import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ParticleBg from "./components/ParticleBg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ParticleBg />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="whites">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque
        sit, odit aut facere reprehenderit asperiores consequatur vero totam
        iure voluptates eos, nulla praesentium et, iusto deleniti veniam? Autem
        sit repellendus eos architecto officiis corporis molestias est iste
        numquam dicta hic voluptatum, eius, nihil impedit eligendi eveniet
        molestiae, neque deserunt.
      </p>
      <p className="whites">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet nemo
        blanditiis alias nulla quidem consequatur, ullam, iure ea laborum
        itaque, eligendi non laudantium provident! Quam quod nemo nisi velit
        deserunt reiciendis autem nostrum accusantium veniam, laboriosam
        blanditiis in non minus pariatur inventore, voluptatem eum qui ipsum
        cupiditate fuga quasi similique maxime repudiandae? Fugit quo iste
        facilis vero deserunt sapiente obcaecati a rem nostrum quia earum,
        delectus maxime repellendus dignissimos tempora aliquid rerum placeat
        quos quidem porro. At quasi qui quidem distinctio fuga eos, et tempore
        quisquam ipsum? Illum hic, non obcaecati perspiciatis molestiae, ducimus
        blanditiis suscipit cupiditate cumque, rem distinctio.
      </p>
      <p className="whites">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque
        sit, odit aut facere reprehenderit asperiores consequatur vero totam
        iure voluptates eos, nulla praesentium et, iusto deleniti veniam? Autem
        sit repellendus eos architecto officiis corporis molestias est iste
        numquam dicta hic voluptatum, eius, nihil impedit eligendi eveniet
        molestiae, neque deserunt.
      </p>

      <p className="whites">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet nemo
        blanditiis alias nulla quidem consequatur, ullam, iure ea laborum
        itaque, eligendi non laudantium provident! Quam quod nemo nisi velit
        deserunt reiciendis autem nostrum accusantium veniam, laboriosam
        blanditiis in non minus pariatur inventore, voluptatem eum qui ipsum
        cupiditate fuga quasi similique maxime repudiandae? Fugit quo iste
        facilis vero deserunt sapiente obcaecati a rem nostrum quia earum,
        delectus maxime repellendus dignissimos tempora aliquid rerum placeat
        quos quidem porro. At quasi qui quidem distinctio fuga eos, et tempore
        quisquam ipsum? Illum hic, non obcaecati perspiciatis molestiae, ducimus
        blanditiis suscipit cupiditate cumque, rem distinctio.
      </p>
      <p className="whites">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque
        sit, odit aut facere reprehenderit asperiores consequatur vero totam
        iure voluptates eos, nulla praesentium et, iusto deleniti veniam? Autem
        sit repellendus eos architecto officiis corporis molestias est iste
        numquam dicta hic voluptatum, eius, nihil impedit eligendi eveniet
        molestiae, neque deserunt.
      </p>
      <p className="whites">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet nemo
        blanditiis alias nulla quidem consequatur, ullam, iure ea laborum
        itaque, eligendi non laudantium provident! Quam quod nemo nisi velit
        deserunt reiciendis autem nostrum accusantium veniam, laboriosam
        blanditiis in non minus pariatur inventore, voluptatem eum qui ipsum
        cupiditate fuga quasi similique maxime repudiandae? Fugit quo iste
        facilis vero deserunt sapiente obcaecati a rem nostrum quia earum,
        delectus maxime repellendus dignissimos tempora aliquid rerum placeat
        quos quidem porro. At quasi qui quidem distinctio fuga eos, et tempore
        quisquam ipsum? Illum hic, non obcaecati perspiciatis molestiae, ducimus
        blanditiis suscipit cupiditate cumque, rem distinctio.
      </p>
    </>
  );
}

export default App;
