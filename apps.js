// var viz = new tableau.viz(placeholderDiv, url, options);

let Viz;

//1. Create a variable to store the placeholderDiv
const placeholderDiv = document.getElementById("vizcontainer");
//2. Create a variable to store the URL
const url =
  "https://public.tableau.com/views/EmbeddingWorkbookProfitsAcrossME-Asia/OfficeSupplyProfitsacrossMEandAsia?:language=en-US&:display_count=n&:origin=viz_share_link";
//3. Create a variable to store the dashboard options
const options = {
  device: "desktop",
  height: "800px",
  width: "1100px",
};

function initViz() {
  console.log("Viz is ready to load");
  Viz = new tableau.Viz(placeholderDiv, url, options);
}

//Listen for the content to be loaded, when finished, load the viz
document.addEventListener("DOMContentLoaded", initViz);

//Buttons
//Where are my buttons? PDF
const exportpdfbutton = document.getElementById("ExportPDF");

//Listen for the buttons clicked
exportpdfbutton.addEventListener("click", exportPDFfunction);

//What happens when buttons are clicked?
function exportPDFfunction() {
  Viz.showExportPDFDialog();
}

//Where are my buttons? PPT
const exportpowerpointbutton = document.getElementById("ExportPowerPoint");

//Listen for the buttons clicked
exportpowerpointbutton.addEventListener("click", exportpowerpointfunction);

//What happens when buttons are clicked?
function exportpowerpointfunction() {
  Viz.showExportPowerPointDialog();
}

//Where are my buttons? Image
const exportimagebutton = document.getElementById("ExportImage");

//Listen for the buttons clicked
exportimagebutton.addEventListener("click", exportimagefunction);

//What happens when buttons are clicked?
function exportimagefunction() {
  Viz.showExportImageDialog();
}

//-----------------------------

const filterButton = document.getElementById("FilterButton");
filterButton.addEventListener("click", getRangeValues);

function getRangeValues() {
  //Filter Range Buttons
  const minValue = document.getElementById("minValue").value;

  const maxValue = document.getElementById("maxValue").value;
  console.log(minValue, maxValue);

  //need to get the active sheet and then list of worksheets

  const workbook = Viz.getWorkbook();
  console.log(workbook);
  const activesheet = workbook.getActiveSheet();
  console.log(activesheet);
  const sheets = activesheet.getWorksheets();
  console.log(sheets);

  console.log(sheets);

  const sheetToFilter = sheets[0];
  console.log(sheetToFilter);
  sheetToFilter
    .applyRangeFilterAsync("SUM(Sales)", { min: minValue, max: maxValue })
    .then(alert("Viz Filtered"));
}
