const ComplaintCard = (props) => {
  <article className="complaint">
    <header>
      <h3>{props.type}</h3>
      <h3>{props.name}</h3>
      <h3>{props.phone}</h3>
      <h3>{props.email}</h3>
      <h3>{props.resolved}</h3>
      <button className="icon-button onClick={props.onComplaintDelete}">
        Panasz kezelve
      </button>
    </header>
  </article>;
};
