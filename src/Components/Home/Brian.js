import React from "react";

const Brian = props => {
  return (
    <div class="container marketing" style={{ marginTop: "4rem" }}>
      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">Meet the owner</h2>
          <div className="lead">
            <p>
              Brian Williams is the General Contractor and owner of Custom Home
              Solutions. Brian has been self-employed as General Contractor
              since 1991. In 2001 Brian found a nitche in the industry and began
              to focus primarily on waterproofing and custom coatings.
            </p>
            <p>
              ​We pride ourselves on top quality work and Brian chooses to
              remain very hands on. He is present on each and every job!
            </p>
            <div style={{ marginLeft: "2rem" }}>
              <h4 className="featurette-heading text-muted">
                Brian specializes in...
              </h4>
              <ul>
                <li>Waterproof deck coatings</li>
                <li>Concrete Overlay</li>
                <li>Garage and inside epoxy floors</li>
                <li>Indoor or Outdoor concrete stain</li>
                <li>industrial epoxy floors</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <img
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/45066116_2209170162428591_4763588278563635200_n.jpg?_nc_cat=100&_nc_ht=scontent-sjc3-1.xx&oh=55d7240a6cc20e09e82882048a2a9a19&oe=5D95DC7C"
            alt="Brian Williams"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
        </div>
      </div>
      <hr class="featurette-divider" />
    </div>
  );
};

export default Brian;
