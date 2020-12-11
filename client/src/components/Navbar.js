import React, { useState } from "react";
import { Navbar, Button } from "reactstrap";

const Head = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <Button>Log In</Button>
        <Button>Sign Up</Button>
      </Navbar>
    </div>
  );
};

export default Head;
