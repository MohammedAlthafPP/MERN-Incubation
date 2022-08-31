import { Modal, Button } from "react-bootstrap";

function ApplicationModal({ show, handleModalClose, modalData }) {
  return (
    <div>
      <Modal show={show}>
        <Modal.Header closeButton onClick={handleModalClose}>
          <Modal.Title>Application For Incubation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="row">
              <div className="mb-3 col-6">
                <label>Name</label>
                <input
                  readOnly
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  value={modalData.name}
                  // onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div className="mb-3 col-6">
                <label>Address</label>
                <input
                  readOnly
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                  value={modalData.address}
                  // onChange={(e) => setForm(e.target.value)}
                  // onChange={(e) => setForm({ ...form, address: e.target.value })}
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-6">
                <label>City</label>
                <input
                  readOnly
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  value={modalData.city}
                  // onChange={(e) => setForm(e.target.value)}
                  // onChange={(e) => setForm({ ...form, city: e.target.value })}
                />
              </div>

              <div className="mb-3 col-6">
                <label>State</label>
                <input
                  readOnly
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                  value={modalData.state}
                  // onChange={(e) => setForm(e.target.value)}
                  // onChange={(e) => setForm({ ...form, state: e.target.value })}
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-6">
                <label>Email</label>
                <input
                  readOnly
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  value={modalData.email}
                  // onChange={(e) => setForm(e.target.value)}
                  // onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="mb-3 col-6">
                <label>Phone no</label>
                <input
                  readOnly
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                  value={modalData.phoneno}
                  // onChange={(e) => setForm(e.target.value)}
                  // onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-6">
                <label>Company Name</label>
                <input
                  readOnly
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  value={modalData.companyname}
                  // onChange={(e) => setForm(e.target.value)}
                  // onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                />
              </div>
            </div>
            <div className="mb-3 ">
              <label>Question : Describe Your Team and Background</label>
              <textarea
                readOnly
                type="text"
                className="form-control"
                placeholder="Enter email"
                value={modalData.team}
                // onChange={(e) => setForm(e.target.value)}
                // onChange={(e) => setForm({ ...form, teamAndBackground: e.target.value })}
              />
            </div>
            <div className="mb-3 ">
              <label>Question : Describe Your Company and Products</label>
              <textarea
                readOnly
                type="text"
                className="form-control"
                placeholder="Enter email"
                value={modalData.products}
                // onChange={(e) => setForm(e.target.value)}
                // onChange={(e) => setForm({ ...form, companyAndProducts: e.target.value })}
              />
            </div>
            <div className="mb-3 ">
              <label>
                Question : Describe the problem you are trying to solve
              </label>
              <textarea
                readOnly
                type="text"
                className="form-control"
                placeholder="Enter email"
                value={modalData.problem}
                // onChange={(e) => setForm(e.target.value)}
                // onChange={(e) => setForm({ ...form, solvingProblem: e.target.value })}
              />
            </div>
            <div className="mb-3 ">
              <label>Question : What is unique about your solution </label>
              <textarea
                readOnly
                type="text"
                className="form-control"
                placeholder="Enter email"
                value={modalData.solution}
                // onChange={(e) => setForm(e.target.value)}
                // onChange={(e) => setForm({ ...form, uniqueness: e.target.value })}
              />
            </div>
            <div className="mb-3 ">
              <label>
                Question : what is your value proposition for the customer
              </label>
              <textarea
                readOnly
                type="text"
                className="form-control"
                placeholder="Enter email"
                value={modalData.valueproposition}
                // onChange={(e) => setForm(e.target.value)}
                // onChange={(e) => setForm({ ...form, valueProposition: e.target.value })}
              />
            </div>
            <div className="mb-3 ">
              <label>
                Question : Who are your competitors and what is your competative
                advantage ?
              </label>
              <textarea
                readOnly
                type="text"
                className="form-control"
                placeholder="Enter email"
                value={modalData.competitors}
                // onChange={(e) => setForm(e.target.value)}
                // onChange={(e) => setForm({ ...form, competitors: e.target.value })}
              />
            </div>
            <div className="mb-3 ">
              <label>Question : Explain your revenue model</label>
              <textarea
                readOnly
                type="text"
                className="form-control"
                placeholder="Enter email"
                value={modalData.revenuemodel}
                // onChange={(e) => setForm(e.target.value)}
                // onChange={(e) => setForm({ ...form, revenueModel: e.target.value })}
              />
            </div>
            <div className="mb-3 ">
              <label>
                Question : What is the potential market size of the product ?
              </label>
              <textarea
                readOnly
                type="text"
                className="form-control"
                placeholder="Enter email"
                value={modalData.potentialmarketsize}
                // onChange={(e) => setForm(e.target.value)}
                // onChange={(e) => setForm({ ...form, marketSize: e.target.value })}
              />
            </div>
            <div className="mb-3 ">
              <label>
                Question : How do you market or plan to market your product and
                services{" "}
              </label>
              <textarea
                readOnly
                type="text"
                className="form-control"
                placeholder="Enter email"
                value={modalData.marketplan}
                // onChange={(e) => setForm(e.target.value)}
                // onChange={(e) => setForm({ ...form, marketing: e.target.value })}
              />
            </div>
            <label>Question : Type of Incubation</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Enter email"
              readOnly
              value={modalData.incubationtype}
              // onChange={(e) => setForm(e.target.value)}
              // onChange={(e) => setForm({ ...form, marketing: e.target.value })}
            />
            <div></div>
            <div className="mb-3 ">
              <label>Question : Upload a detailed bussiness proposal</label>
              <textarea
                readOnly
                type="text"
                className="form-control"
                placeholder="Enter email"
                value={modalData.businessproposal}
                // onChange={(e) => console.log(form)}
                // onChange={(e) => setForm({ ...form, bussinessProposal: e.target.value })}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ApplicationModal;