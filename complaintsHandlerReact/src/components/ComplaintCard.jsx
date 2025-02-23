import "../ComplaintCard.css"; // Import the CSS file

const ComplaintCard = (props) => {
  return (
    <section className="complaint-card">
      <header>
        <h3>
          <span className="label">Típus:</span> {props.type}
        </h3>
        <h3>
          <span className="label">Név:</span> {props.name}
        </h3>
        <h3>
          <span className="label">Telefonszám:</span> {props.phone}
        </h3>
        <h3>
          <span className="label">Email:</span> {props.email}
        </h3>
        <h3>
          <span className="label">Megoldva:</span>
          <span className={`status ${props.resolved ? "resolved" : "pending"}`}>
            {props.resolved ? "Igen" : "Nem"}
          </span>
        </h3>
      </header>
      <button className="resolve-button" onClick={props.onComplaintDelete}>
        Panasz kezelve
      </button>
    </section>
  );
};

export default ComplaintCard;
