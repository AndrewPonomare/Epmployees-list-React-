
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeeAddForm from "../employee-add-form/employee-add-form";
import EmployeeList from "../employee-list/employee-list";
import SearchPanel from "../search-panel/search-panel";
import "./app.css"

function App() {

    const data = [
        {name: 'Mike', salary: 800, increase: false, id:1},
        {name: 'Tony', salary: 1800, increase: true, id:2},
        {name: 'John', salary: 2800, increase: false, id:3}
    ]

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeeList data={data}/>
            <EmployeeAddForm />
        </div>
    );
}

export default App