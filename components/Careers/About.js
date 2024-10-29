import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

class FaqContent extends Component {
  render() {
    return (
      <section className="faq-area ptb-100 p-4 m-4">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-9 col-md-12 center">
              {/* <div className="faq-accordion"> */}
              <p>INCLUSION AND DIVERSITY</p>
              <h2>
                We're committed to creating a safe, diverse, and inclusive work
                environment.
              </h2>
              <p>
                This means we strive at all times to encourage open
                conversation, hire diverse talent, and continually listen and
                learn from one another.
              </p>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default FaqContent;
