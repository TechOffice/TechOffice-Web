var response = {
	data: [{col1: "col 11", col2: "col 12", col3: "col 13"}, 
			{col1: "col 21", col2: "col 12", col3: "col 13"},
			{col1: "col 31", col2: "col 12", col3: "col 13"},
			{col1: "col 41", col2: "col 12", col3: "col 13"},
			{col1: "col 51", col2: "col 12", col3: "col 13"},
			{col1: "col 61", col2: "col 12", col3: "col 13"},
			{col1: "col 71", col2: "col 12", col3: "col 13"},
			{col1: "col 81", col2: "col 12", col3: "col 13"}],
	total: 200,
	pageCount: 20,
	currentPage: 0
};
response.columns =  ['col1', 'col2', 'col3'];
response.labels = ['Column 1', 'Column 2', 'Column 3'];

var config = {
	rowSelection: true
};

class PageBar extends React.Component{
	constructor(props){
		super(props);
		this.pageCount = props.pageCount ? props.pageCount : 0
		this.dataTable = props.dataTable;
		if (this.dataTable){
			this.dataTable.setPageBar(this);
		}
	}
	changePage(pageNo, event){
		console.log("change page: " + pageNo);
	}
	render(){
		var pageSpan = [];
		var pageCount = this.pageCount;
		for (var i=0; i<pageCount; i++){
			var pageNo = i + 1;
			pageSpan.push(<span onClick={this.changePage.bind(this, i)}>{pageNo}&nbsp;</span>)
		}
		return <div>{pageSpan}</div>;
	}
};

class Detail extends React.Component {
	constructor(props){
		super(props);
		this.dataTable = props.dataTable;
		if (this.dataTable){
			this.dataTable.setDetail(this);
		}
		this.data = props.data;
	}
	show(data){
		this.setState(data);
		this.forceUpdate();
	}
	handleChange(field, event){
		var data = this.state;
		data[field] = event.target.value;
		this.setState(data);
	}
	render(){
		if (this.state){
			return (
				<div>
					<table>
						<tr>
							<td>Colum 3</td>
							<td><input value={this.state.col1} onChange={this.handleChange.bind(this, 'col1')}/></td>
						</tr>
						<tr>
							<td>Colum 2</td>
							<td><input value={this.state.col2} onChange={this.handleChange.bind(this, 'col2')}/></td>
						</tr>
						<tr>
							<td>Colum 3</td>
							<td><input value={this.state.col3} onChange={this.handleChange.bind(this, 'col3')}/></td>
						</tr>
					</table>
				</div>
			);
		}else{
			return <div></div>
		}
	}
}

// Table 
class Table extends React.Component {
	constructor(props){
		super(props);
		this.config = props.config ? props.config : {};
		this.data = props.data.data ? props.data.data: [];
		this.columns = props.data.columns ? props.data.columns : [];
		this.labels = props.data.labels ? props.data.labels : [];
		this.selected = [];
		this.dataTable = props.dataTable;
		if (this.dataTable){
			this.dataTable.setTable(this);
		}
		this.detail;
	}
	
	setDetail(detail){
		this.detail = detail;
	}
	
	handleSelect(row, event){
		if (event.target.checked){
			this.selected.push(row);	
		}else{
			var index = this.selected.indexOf(row);
			this.selected.splice(index, 1);
		}
	}
	
	showDetail(row, event){
		this.detail.show(row);
	}
	
	render(){
		var me = this;
		var thead = [];
		var rows = [];
		if(me.config.rowSelection){
				thead.push(<th>&nbsp;</th>);
			}
		me.labels.forEach(function(label){
			thead.push(<th>{label}</th>);
		});
		me.data.forEach(function(row){
			var cols = [];
			if (me.config.rowSelection){
				cols.push(<td><input type='checkbox' onClick={me.handleSelect.bind(me, row)}/></td>);
			}
			me.columns.forEach(function(column){
				cols.push(<td>{row[column]}</td>);
			});
			rows.push(<tr onClick={me.showDetail.bind(me, row)}>{cols}</tr>)
		});
		return <table><thead><tr>{thead}</tr></thead><tbody>{rows}</tbody></table>;
	}
};

class DataTable extends React.Component {
	constructor(props){
		super(props);
		this.data = props.data ? props.data : {};
		this.pageCount = this.data.pageCount ? this.data.pageCount : 0;
		this.config = props.config ? props.config  : {};
		this.table, this.pageBar, this.detail;
		this.doSomething = this.doSomething.bind(this);
	}
	setTable(table){
		this.table = table;
	}
	setPagebar(pageBar){
		this.pageBar = pageBar;
	}
	setDetail(detail){
		this.detail = detail;
		if (this.table){
			this.table.setDetail(detail);
		}
	}
	setData(data){
		this.data = data;
		this.pageCount = this.data.pageCount ? this.data.pageCount : 0;
		if (this.table){
			this.table.data = data.data;
			this.table.forceUpdate();
		}
	}
	doSomething(){
		console.log(this.table.selected);
	}
	render(){
		return (
			<div>
				<button onClick={this.doSomething}>Console Selected</button>
				<Table data={this.data} config={this.config} dataTable={this}/>
				<PageBar pageCount={this.pageCount}/>
				<Detail dataTable={this}/>
			</div>
		);
	}
}

var table = ReactDOM.render(
	<DataTable data={response} config={config}/>,
	document.getElementById('container')
);
if (pagingTable){
	pagingTable = table;
}

