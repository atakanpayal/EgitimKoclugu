import Crew from "../../Crew";
import "./Ekibimiz.css";
function Ekibimiz() {
  return (
    <>
      <div
        className="text-ekibimiz"
        style={{
          border: "none",
        }}
      >
        <p className="text-big-ekibimiz">Ekibimiz</p>
        <p className="text-small-ekibimiz">Anasayfa → Ekibimiz</p>
      </div>
      <br></br>
      <br></br>
      <div className="header-ekibimiz">Ekibimiz</div>
      <br></br>
      <div className="crew-ekibimiz">
        <Crew />
      </div>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}
export default Ekibimiz;
