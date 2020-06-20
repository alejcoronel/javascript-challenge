// from data.js
var tableData = data;

//Use D3 to select the table:

var table = d3.select('table');
//Use D3 to create a boostrap Striped Table
table.classed('table-striped', true);

//Use D3 to select table body
//var tbody = d3.select('tbody');

// Go rec by rec from table adding to page
function fillTable(data){
    var tbody = d3.select('tbody');
    //d3.select("tbody").html("");
    tbody.html("");
    data.forEach(function(fn){
        var row = tbody.append('tr');
        
        Object.entries(fn).forEach(function([Index,value]){
            var cell = row.append('td');
            var content = cell.text(value);
            console.log(value);
        });     
    });
}

fillTable(tableData);

function clickEvent(){
    d3.event.preventDefault();
    var date = d3.select("#datetime").property("value");
    var filterDateTime = tableData;
    if(date) {
        filterDateTime = filterDateTime.filter((row) => row.datetime === date);
    }
    fillTable(filterDateTime);
    console.log(filterDateTime);
}

d3.selectAll("#filter-btn").on("click", clickEvent);

