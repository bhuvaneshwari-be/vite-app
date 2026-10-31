
import { useState } from "react";
import addEmployee from "./AddEmployee";
import editEmployee from "./EditEmployee";
import deleteEmployee from "./DeleteEmployee";
import saveEmployee from "./SaveEmployee";
import editIcon from "../assets/edit.png"
import addIcon from "../assets/add.png"
import deleteIcon from "../assets/delete.png"
import saveIcon from "../assets/save.png"

export default function EmployeeList() {

    const [employees, setEmployees] = useState([]);
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [editId, setEditId] = useState(null);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">
                Employee Management
            </h2>

            <div className="row mb-3">
                <div className="col">
                    <input
                        className="form-control"
                        placeholder="Employee Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="col">
                    <input
                        className="form-control"
                        placeholder="Department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                    />
                </div>

                <div className="col-auto">
                    {editId === null ? (
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                addEmployee(
                                    employees, setEmployees, name, department
                                );
                                if (name.trim() && department.trim()) {
                                    setName("");
                                    setDepartment("");
                                }
                            }}
                        >
                           <img src = {addIcon} alt="add" width="20" height="20" /> 
                        </button>
                    ) : (
                        <button
                            className="btn btn-success"
                            onClick={() => {
                                saveEmployee(
                                    employees, setEmployees,
                                    editId, name, department
                                );
                                setEditId(null);
                                setName("");
                                setDepartment("");
                            }}
                        >
                            <img src = {saveIcon} alt="add" width="20" height="20" />
                        </button>
                    )}
                </div>
            </div>

            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.name}</td>
                            <td>{emp.department}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() =>
                                        editEmployee(
                                            emp, setName, setDepartment, setEditId
                                        )
                                    }
                                >
                                    <img src = {editIcon} alt="add" width="20" height="20" />
                                </button>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() =>
                                        deleteEmployee(
                                            employees, setEmployees, emp.id
                                        )
                                    }
                                >
                                    <img src = {deleteIcon} alt="add" width="20" height="20" />
                                </button>
                            </td>
                        </tr>
                    ))}

                    {employees.length === 0 && (
                        <tr>
                            <td colSpan="3" className="text-center">
                                No employees found!
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
