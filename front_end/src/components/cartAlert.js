import React from "react";
import '../styles/Category.css';

function cartAlert(props)
{    
        return (
            <div>
              <SweetAlert
                show={this.state.show}
                title="Congratulations !"
                text={props.name+" "}
                onConfirm={() => this.setState({ show: false })}
              />
            </div>
          );
}
export default cartAlert