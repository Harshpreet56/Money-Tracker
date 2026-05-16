import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function ExportPDF({ transactions }) {
  const exportPDF = () => {
    const doc = new jsPDF();

    const tableData = transactions.map((item) => [
      item.title,
      item.amount,
      item.type,
      item.category,
    ]);
 autoTable(doc, {
      head: [["Title", "Amount", "Type", "Category"]],
      body: tableData,
    });

    doc.save("transactions.pdf");
  };

  return <button onClick={exportPDF}>Export PDF</button>;
}

export default ExportPDF;