import { useEffect, useRef, useState } from "react";
import "./App.css";
function App() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const opacityWord1 = check1 ? "show" : "hidden";
  const opacityWord2 = check2 ? "show" : "hidden";
  const opacityWord3 = check3 ? "show" : "hidden";
  const refTitle1 = useRef(null);
  const refTitle2 = useRef(null);
  const refTitle3 = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const revealPosition = window.innerHeight * 1.2;
      const positionTitle1 = refTitle1.current.getBoundingClientRect().bottom;
      const positionTitle2 = refTitle2.current.getBoundingClientRect().bottom;
      const positionTitle3 = refTitle3.current.getBoundingClientRect().bottom;
      if (positionTitle1 < revealPosition) {
        setCheck1(true);
      } else if (positionTitle1 > revealPosition) setCheck1(false);
      if (positionTitle1 < 200) {
        setCheck1(false);
      }
      // ----------
      if (positionTitle2 < revealPosition) {
        setCheck2(true);
      } else if (positionTitle2 > revealPosition) setCheck2(false);
      if (positionTitle2 < 200) {
        setCheck2(false);
      }
      // ----------
      if (positionTitle3 < revealPosition) {
        setCheck3(true);
      } else if (positionTitle3 > revealPosition) setCheck3(false);

      console.log(positionTitle3);
      console.log(revealPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <h1 className="title-app">Text Reveal</h1>
      <div className="container-image">
        <img src="/img/anime-1.jpg" alt="" />
        <div className="box-text" ref={refTitle1}>
          <h1 className={opacityWord1}>Lorem, ipsum dolor.</h1>
          <p className={opacityWord1}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit id
            nemo quidem dolor non corporis expedita harum autem vel? Ea nam
            repellat saepe repudiandae inventore harum tempore quis quam?
            Blanditiis rem deserunt cupiditate magnam vel laborum perspiciatis
            ab facilis dicta. Repellendus, magni! Porro, consequuntur inventore
            laborum repellendus quidem eveniet? Quaerat totam tempora quia dolor
            enim repellendus eius a corrupti, laboriosam fugiat, assumenda
            soluta qui eum, laudantium reiciendis non expedita quibusdam
            temporibus ipsam aperiam adipisci! Nesciunt eveniet laudantium
            debitis maiores ipsum asperiores consectetur quibusdam at facilis?
            Minus dignissimos itaque optio quod, blanditiis eveniet quaerat
            perferendis provident maxime cumque ab labore veritatis.
          </p>
        </div>
      </div>
      <div className="container-image">
        <img src="/img/anime-2.jpg" alt="" />
        <div className="box-text" ref={refTitle2}>
          <h1 className={opacityWord2}>Lorem, ipsum dolor.</h1>
          <p className={opacityWord2}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit id
            nemo quidem dolor non corporis expedita harum autem vel? Ea nam
            repellat saepe repudiandae inventore harum tempore quis quam?
            Blanditiis rem deserunt cupiditate magnam vel laborum perspiciatis
            ab facilis dicta. Repellendus, magni! Porro, consequuntur inventore
            laborum repellendus quidem eveniet? Quaerat totam tempora quia dolor
            enim repellendus eius a corrupti, laboriosam fugiat, assumenda
            soluta qui eum, laudantium reiciendis non expedita quibusdam
            temporibus ipsam aperiam adipisci! Nesciunt eveniet laudantium
            debitis maiores ipsum asperiores consectetur quibusdam at facilis?
            Minus dignissimos itaque optio quod, blanditiis eveniet quaerat
            perferendis provident maxime cumque ab labore veritatis.
          </p>
        </div>
      </div>
      <div className="container-image">
        <img src="/img/anime-3.jpg" alt="" />
        <div className="box-text" ref={refTitle3}>
          <h1 className={opacityWord3}>Lorem, ipsum dolor.</h1>
          <p className={opacityWord3}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit id
            nemo quidem dolor non corporis expedita harum autem vel? Ea nam
            repellat saepe repudiandae inventore harum tempore quis quam?
            Blanditiis rem deserunt cupiditate magnam vel laborum perspiciatis
            ab facilis dicta. Repellendus, magni! Porro, consequuntur inventore
            laborum repellendus quidem eveniet? Quaerat totam tempora quia dolor
            enim repellendus eius a corrupti, laboriosam fugiat, assumenda
            soluta qui eum, laudantium reiciendis non expedita quibusdam
            temporibus ipsam aperiam adipisci! Nesciunt eveniet laudantium
            debitis maiores ipsum asperiores consectetur quibusdam at facilis?
            Minus dignissimos itaque optio quod, blanditiis eveniet quaerat
            perferendis provident maxime cumque ab labore veritatis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
