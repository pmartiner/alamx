import React from 'react';


const footerView = props => {
    return(
        <footer className="page-footer rifle-green">
          <div className="container">
            <div className="row">
              <div className="col l12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            A la mexicana
            </div>
          </div>
        </footer>
    );
}

export default footerView;