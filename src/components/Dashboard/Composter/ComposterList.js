import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import {composterDataService} from "../../../services/service";

const ComposterList = ({ getComposterId }) => {
  const [composters, setComposter] = useState([]);
  useEffect(() => {
    getComposterFertilzer();
  }, []);
 
  const getComposterFertilzer = async () => {
    const data = await composterDataService.getAllComposters();
    console.log(data.docs);
    setComposter(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await composterDataService.deleteComposter(id);
    getComposterFertilzer();
  };
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit p-2" onClick={getComposterFertilzer}>
          Refresh List
        </Button>
      </div>

      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Composter Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Phone-no</th>
            <th>Compose Fertilizer</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {composters.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.composterName}</td>
                <td>{doc.location}</td>
                <td>{doc.email}</td>
                <td>{doc.phoneNum}</td>
                <td>{doc.composeFertilizer}</td>
                <td>{doc.status}</td>
                {getComposterId && (
                  <td>
                    <Button
                      variant="success"
                      className="edit m-2"
                      onClick={(e) => getComposterId(doc.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      className="delete m-2"
                      onClick={(e) => deleteHandler(doc.id)}
                    >
                      Delete
                    </Button>
                  </td>
                )}
                {
                  !getComposterId && (
                    <td>
                      <Button
                        variant="success"
                        className="edit m-2"
                      >
                       <a className="text-white edit m-2" href={`tel:${doc.phone}`}>Call</a>
                      </Button>
                      <Button
                        variant="success"
                        className="edit m-2"
                        >
                          <a className="text-white" href={`mailto:${doc.email}`}>Mail</a>
                        </Button>
                    </td>
                  )
                }
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ComposterList;
