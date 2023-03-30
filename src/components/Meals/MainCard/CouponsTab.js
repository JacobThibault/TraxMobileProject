import { Button, Spinner, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const CouponsTab = () => {
  
  //generate a random string code
  const [code, setCode] = useState();
  const handleSetCode = () => {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < 10) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return setCode(result);
  
  };

  //manage loading flag
  const [loading, setLoading] = useState(false);
  const handleLoading = () => {
    setLoading(!loading);
    
  };


  //show spinner and calc code
  const showSpinner = () => {
    if(loading){
      //wait 5000ms and then stop loading, generate code
      setTimeout(() => {handleLoading(); handleSetCode();}, 5000);
      
      //show loading spinner
      return (
        <>
          <Spinner
            as="span"
            variant="light"
            size="sm"
            role="status"
            animation="border"
          />
          Loading...
        </>
      );
    }
    //remove loading spinner
    else return <>Generate Coupon</>
  };

  return (
    <>
      <h2>Daily Coupon Lottery</h2>

      <Button
        variant="success"
        onClick={handleLoading}
        className="mt-3 mb-2"
      >
        {showSpinner()}
      </Button>
      <Form.Group>
        <Form.Label>Coupon Code</Form.Label>
        <Form.Control value={code} disabled />
      </Form.Group>
    </>
  );
};

export default CouponsTab;
