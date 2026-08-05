"use client";

import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";


export default function MemberExportButtons({
  members,
}: {
  members: any[];
}) {



  function exportExcel() {


    const data = members.map((member, index) => ({

      No: index + 1,

      Name: member.fullName,

      Phone: member.phone,

      "Membership ID": member.membershipId || "",

      Type: member.membershipType,

      Status: member.status,

      "Date Joined": member.dateJoined,


    }));



    const worksheet = XLSX.utils.json_to_sheet(data);


    const workbook = XLSX.utils.book_new();


    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Members"
    );



    XLSX.writeFile(
      workbook,
      "Zawiyatu-Members-Register.xlsx"
    );


  }







  function exportPDF() {


    const doc = new jsPDF();



    doc.setFontSize(16);


    doc.text(
      "Zawiyatu Shabaab Nasrullah Member Register",
      14,
      15
    );



    const rows = members.map((member, index) => [

      index + 1,

      member.fullName,

      member.phone,

      member.membershipId || "-",

      member.membershipType,

      member.status,

    ]);



    autoTable(doc, {


      head: [[

        "No",

        "Name",

        "Phone",

        "ID",

        "Type",

        "Status"

      ]],


      body: rows,


      startY: 25,


    });



    doc.save(
      "Zawiyatu-Members-Register.pdf"
    );


  }







  function printRegister() {


    window.print();


  }






  return (

    <div className="flex flex-wrap gap-4 mb-6">


      <button

        onClick={exportExcel}

        className="bg-green-700 text-white px-5 py-3 rounded-xl hover:bg-green-800"

      >

        Export Excel

      </button>





      <button

        onClick={exportPDF}

        className="bg-red-600 text-white px-5 py-3 rounded-xl hover:bg-red-700"

      >

        Export PDF

      </button>





      <button

        onClick={printRegister}

        className="bg-gray-800 text-white px-5 py-3 rounded-xl hover:bg-gray-900"

      >

        Print Register

      </button>



    </div>

  );

}