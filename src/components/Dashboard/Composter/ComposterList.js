import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { composterDataService } from "../../../services/service";
import Cookies from "js-cookie";
import { BsArrowRepeat } from 'react-icons/bs';

const ComposterList = ({ getComposterId }) => {
  const [composters, setComposters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getComposterFertilizer();
  }, []);

  const getComposterFertilizer = async () => {
    const data = await composterDataService.getAllComposters();
    setComposters(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredComposters = composters.filter((composter) =>
    composter.location.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  const deleteHandler = async (id) => {
    await composterDataService.deleteComposter(id);
    getComposterFertilizer();
  };

  return (
    <>
      <div className="d-flex flex-wrap justify-content-between mb-2">
        <div className="d-flex align-items-center">
          <BsArrowRepeat
            className="refresh-icon m-2 font-bold p-2"
            onClick={getComposterFertilizer}
            title="Refresh List"
          />
          <input
            type="text"
            className="form-control m-2"
            placeholder="Search by location..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="card-container d-flex flex-wrap justify-content-center">
        {filteredComposters.map((composter, index) => (
          <Card key={composter.id} className="m-2" style={{ width: "18rem", borderRadius: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <Card.Body>
              <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{composter.composterName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{composter.location}</Card.Subtitle>

              <Card.Text>Email: {composter.email}</Card.Text>
              <Card.Text>Phone no: {composter.phoneNum}</Card.Text>
              <Card.Text>Compose Fertilizer: {composter.composeFertilizer}</Card.Text>
              <Card.Text>Quantity: {composter.kg} KG</Card.Text>
              <Card.Text>Status: {composter.status}</Card.Text>

              {getComposterId ? (

                composter.email === Cookies.get('userEmail') ? (

                  <div>
                    <Button
                      variant="success"
                      className="edit mr-2"
                      onClick={() => getComposterId(composter.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      className="delete"
                      onClick={() => deleteHandler(composter.id)}
                    >
                      Delete
                    </Button>
                  </div>) : (

                  <div>


                  </div>

                )

              ) : (
                <div>
                  <Button variant="success" className="edit mr-2">
                    <i className="bi bi-telephone-fill"></i> <a className="text-white" href={`tel:${composter.phoneNum}`}>Call</a>
                  </Button>
                  <Button variant="success" className="edit">
                    <i className="bi bi-envelope-fill"></i> <a className="text-white" href={`mailto:${composter.email}`}>Mail</a>
                  </Button>
                </div>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ComposterList;