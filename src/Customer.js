import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Customer = () => {
  const [custList, setCustList] = useState([]);
  const [haveEdit, setHaveEdit] = useState(false);
  const [viewChange] = useState(false);
  const [haveAdd, setHaveAdd] = useState(false);
  const [haveRemove, setHaveRemove] = useState(false);

  const navigate = useNavigate();

  const loadCustomer = () => {
    fetch("http://localhost:8000/customer")
      .then((res) => {
        if (!res.ok) {
          return false;
        }
        return res.json();
      })
      .then((res) => {
        setCustList(res);
      });
  };

  useEffect(() => {
    getUserAccess();
    loadCustomer();
  }, []);

  const getUserAccess = () => {
    const userRole = sessionStorage.getItem("userrole");
    const roleParam = userRole ? "&role=" + userRole.toString() : "";
    fetch("http://localhost:8000/roleaccess?menu=customer" + roleParam)
      .then((res) => {
        if (!res.ok) {
          navigate("/");
          toast.warning("You are not authorized to access");
          return false;
        }
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (res.length > 0) {
          viewChange(true);
          const userObj = res[0];
          setHaveEdit(userObj.haveedit);
          setHaveAdd(userObj.haveadd);
          setHaveRemove(userObj.havedelete);
        } else {
          navigate("/");
          toast.warning("You are not authorized to access");
        }
      });
  };

  const handleAdd = () => {
    if (haveAdd) {
      toast.success("added");
    } else {
      toast.warning("You do not have access to add");
    }
  };

  const handleEdit = () => {
    if (haveEdit) {
      toast.success("edited");
    } else {
      toast.warning("You do not have access to edit");
    }
  };

  const handleRemove = () => {
    if (haveRemove) {
      toast.success("removed");
    } else {
      toast.warning("You do not have access to remove");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h3>Customer Listing</h3>
        </div>
        <div className="card-body">
          {haveAdd && (
            <button onClick={handleAdd} className="btn btn-success">
              Add (+)
            </button>
          )}
          <br />
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Email</th>
                {haveEdit && <th>Action</th>}
              </tr>
            </thead>
            <tbody>
              {custList &&
                custList.map((item) => (
                  <tr key={item.code}>
                    <td>{item.code}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    {haveEdit && (
                      <td>
                        <button
                          onClick={handleEdit}
                          className="btn btn-primary"
                        >
                          Edit
                        </button>{" "}
                        {haveRemove && (
                          <button
                            onClick={handleRemove}
                            className="btn btn-danger"
                          >
                            Remove
                          </button>
                        )}
                      </td>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customer;
