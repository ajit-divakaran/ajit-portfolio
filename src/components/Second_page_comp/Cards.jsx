function Cards() {
  return (
    <>
      <main
        className="card-body"
        style={{
          width: "100vw",
          padding: "50px 0 50px 0",
          margin: "0 2.5vw 0 2.5vw,",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="card-body-wrapper">
          <div
            className="card"
            style={{ border: "none", justifySelf: "center", height: "100%" }}
          >
            <div className="content">
              <h2 className="title">GUI Image Editor</h2>
              <p className="copy">
                Built using python tkinter, OpenCV this project can apply 3
                different filters to any image
              </p>
              <button className="button-background-move" role="button">
                Know More
              </button>
            </div>
          </div>
          <div
            className="card"
            style={{ border: "none", justifySelf: "center", height: "100%" }}
          >
            <div className="content">
              <h2 className="title">Dice Game</h2>
              <p className="copy">
                A game developed using purely React, where player can score if
                the dice number and selected number are the same.
              </p>
              <button className="button-background-move" role="button">
                Know More
              </button>
            </div>
          </div>
          <div
            className="card"
            style={{ border: "none", justifySelf: "center", height: "100%" }}
          >
            <div className="content">
              <h2 className="title">Crypto Fetch</h2>
              <p className="copy">
                A real time website where user is able to see and analyze
                different cryptocurrency value and their exchange rates in real
                time fetched with the help of an API.
              </p>
              {/* <button className="btn-card">Book Now</button> */}
              <button className="button-background-move" role="button">
                Know More
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Cards;
{
  /* <div className="card">
    <div className="content">
      <h2 className="title">Explore The Galaxy</h2>
      <p className="copy">Seriously, straight up, just blast off into outer space today</p>
      <button className="btn">Book Now</button>
    </div>
  </div> */
}
