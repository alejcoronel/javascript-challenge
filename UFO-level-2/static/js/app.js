// from data.js
var tableData = data;

//build table

function buildtable(data){
const ttable = d3.select("tbody");
const trow=d3.selectAll("tr");
ttable.html("")

data.forEach((dataRow) => {
  // append a row to table body
  const row = ttable.append("tr");
  Object.values(dataRow).forEach((val) => {
   row.append("td").text(val);
    });
});
}

// select button
var button = d3.select("#filter-btn");

// select form
var form = d3.select("#form");

// create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// complete the event handler function
function runEnter() {

  // prevent page from refreshing
  d3.event.preventDefault();
  
  // select the input element and get the value property of the input element
  var inputValue = d3.select("#input").property("value");
  var filter=d3.select("#selDataset").node().value;

    switch(filter) {
        case "datetime":  
          var filteredData = tableData.filter(record => record.datetime === inputValue);         
          break;
        case "city":   
          var filteredData = tableData.filter(record => record.city === inputValue);         
          break;
        case "state":  
          var filteredData = tableData.filter(record => record.state === inputValue);         
          break;
        case "country":   
          var filteredData = tableData.filter(record => record.country === inputValue);         
        break;
        case "shape":   
          var filteredData = tableData.filter(record => record.shape === inputValue);         
          break;
        default:
          var filteredData = tableData.filter(record => record.datetime === inputValue);    
          break;
    }
buildtable(filteredData)
  
}

buildtable(tableData)
    