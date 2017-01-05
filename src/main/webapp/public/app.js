function getName(name) {
    alert(name)
}

var TitleQM = React.createClass({
    addStudent(){
        this.state.sumStudent= parseInt(this.state.sumStudent)+1;
        this.setState(this.state);
    },
    layThongTin : function () {
      alert(123);
    },
    getInitialState(){
      return {sumStudent: this.props.tongHocVien};
    },
    render:function () {
        return(
            <div>
             <h1 >{this.props.name}</h1>
                <Khoa/>
             <h1>{this.props.name}</h1>
                <div> So hoc vien: {this.state.sumStudent}</div>
                <button onClick={()=>{getName(this.props.name)}}>Infor</button>

                <button onClick={this.addStudent}>Add student</button>

            </div>
        );
    }

});

var Khoa = React.createClass({
    render:function () {
        return (
            <h3>Lap trinh react Js</h3>
        )
    }

});

var InputTag = React.createClass({
    show () {
        var text =this.refs.sl.value;
        alert(text);
    },
    render(){
        return(
            <div>
                <select ref="sl">
                    <option value="a">AAA</option>
                    <option value="b">BBB</option>
                    <option value="c">CCC</option>

                </select>


                <input type="text" ref="txt"/>
                <button onClick={this.show}>Hien thi</button>
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <InputTag/>
        <TitleQM name="ReactJs" tongHocVien="10"/>
        <TitleQM name="Spring"/>


    </div>,

    document.getElementById("root")

);





















/*


var Employee = React.createClass({

  getInitialState: function() {
    return {display: true };
  },
  handleDelete() {
    var self = this;
    $.ajax({
        url: self.props.employee._links.self.href,
        type: 'DELETE',
        success: function(result) {
          self.setState({display: false});
        },
        error: function(xhr, ajaxOptions, thrownError) {
          toastr.error(xhr.responseJSON.message);
        }
    });
  },
  render: function() {

    if (this.state.display==false) return null;
    else return (
      <tr>
          <td>{this.props.employee.name}</td>
          <td>{this.props.employee.age}</td>
          <td>{this.props.employee.years}</td>
          <td>
            <button className="btn btn-info" onClick={this.handleDelete}>Delete</button>
          </td>
      </tr>
    );
  }
});

var EmployeeTable = React.createClass({

  render: function() {

    var rows = [];
    this.props.employees.forEach(function(employee) {
      rows.push(
        <Employee employee={employee} key={employee.name} />);
    });

    return (
      <table className="table table-striped">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Years</th>
                  <th>Delete</th>
              </tr>
          </thead>
          <tbody>{rows}</tbody>
      </table>
    );
  }
});

var App = React.createClass({

  loadEmployeesFromServer: function() {

    var self = this;
    $.ajax({
        url: "http://localhost:8080/api/employees",
      }).then(function(data) {
        self.setState({ employees: data._embedded.employees });
      });

  },

  getInitialState: function() {
    return { employees: [] };
  },

  componentDidMount: function() {
    this.loadEmployeesFromServer();
  },

  render() {
    return ( <EmployeeTable employees={this.state.employees} /> );
  }
});

ReactDOM.render(<App />, document.getElementById('root') );
*/
