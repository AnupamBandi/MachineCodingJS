export default function Modal({ id, header, body, footer, onCloseModal }) {
  
    return (
      <div id={id || "Modal"} className="">
        <div className="modal-content">
          <div className="header">
            <span onClick={onCloseModal} className="close-modal-icon">X</span>
            <h2>{header ? header : "Header"}</h2>
          </div>
          <div className="body">
            {body ? (
              body
            ) : (
              <div>
                <p>This is our Modal Body</p>
              </div>
            )}
          </div>
          <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
        </div>
      </div>
    );
  }