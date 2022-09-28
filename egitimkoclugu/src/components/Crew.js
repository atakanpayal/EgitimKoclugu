import "./Crew.scss";
import profiledummy from "../img/profiledummy.jpg";
function Crew() {
  return (
    <div className="crew-grid">
      <figure class="image-block">
        <img className="profiledummy" src={profiledummy} alt="" />
        <figcaption>
          <h3>More Info</h3>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
          <button>More Info</button>
        </figcaption>
      </figure>
      <figure class="image-block">
        <img src={profiledummy} alt="" />
        <figcaption>
          <h3>More Info</h3>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
          <button>More Info</button>
        </figcaption>
      </figure>
      <figure class="image-block">
        <img src={profiledummy} alt="" />
        <figcaption>
          <h3>More Info</h3>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
          <button>More Info</button>
        </figcaption>
      </figure>
    </div>
  );
}
export default Crew;
