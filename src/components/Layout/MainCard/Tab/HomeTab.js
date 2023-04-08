import logo from '../../../../assets/brockportlogo.jpg'

const HomeTab = () => {
  return (
    <div style={{ marginLeft: "5rem", marginRight: "5rem", marginTop: "2rem" }}>
      <p>
        Located on the ground floor of Harrison Hall, the award-winning TRAX
        features a hot bar with ready-to-go foods for those late night snacks or
        meals.
      <br/>
      Credit/debit, Easy Money, and Points are accepted.</p>
      <img src={logo} height="80px" width="auto" alt="logo"></img>
    </div>
  );
};

export default HomeTab;
