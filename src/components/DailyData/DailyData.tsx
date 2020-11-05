import React, { Component } from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Name",
    selector: "name",
    sortable: true,
  },
  {
    name: "Staring-Location",
    selector: "startingLocation",
    sortable: true,
  },
  {
    name: "Ending-Location",
    selector: "endingLocation",
    sortable: true,
  },
  {
    name: "Form Date",
    selector: "formDate",
    sortable: true,
  },
  {
    name: "To Date",
    selector: "toDate",
    sortable: true,
  },
  {
    name: "Product-Size",
    selector: "truckSize",
    sortable: true,
  },
  {
    name: "Product Type",
    selector: "productType",
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    name: "James Bond",
    startingLocation: "Dhaka",
    endingLocation: "Chittagong",
    formDate: "11/2/2020",
    toDate: "20/02/2021",
    truckSize: "5 ton",
    productType: "Home Supplies",
  },
  {
    id: 2,
    name: "James Bond",
    startingLocation: "Dhaka",
    endingLocation: "Chittagong",
    formDate: "11/2/2020",
    toDate: "20/02/2021",
    truckSize: "5 ton",
    productType: "Home Supplies",
  },
  {
    id: 3,
    name: "James Bond",
    startingLocation: "Dhaka",
    endingLocation: "Chittagong",
    formDate: "11/2/2020",
    toDate: "20/02/2021",
    truckSize: "5 ton",
    productType: "Home Supplies",
  },
  {
    id: 4,
    name: "James Bond",
    startingLocation: "Dhaka",
    endingLocation: "Chittagong",
    formDate: "11/2/2020",
    toDate: "20/02/2021",
    truckSize: "5 ton",
    productType: "Home Supplies",
  },
  {
    id: 5,
    name: "James Bond",
    startingLocation: "Dhaka",
    endingLocation: "Chittagong",
    formDate: "11/2/2020",
    toDate: "20/02/2021",
    truckSize: "5 ton",
    productType: "Home Supplies",
  },
  {
    id: 6,
    name: "James Bond",
    startingLocation: "Dhaka",
    endingLocation: "Chittagong",
    formDate: "11/2/2020",
    toDate: "20/02/2021",
    truckSize: "5 ton",
    productType: "Home Supplies",
  },
  {
    id: 7,
    name: "James Bond",
    startingLocation: "Dhaka",
    endingLocation: "Chittagong",
    formDate: "11/2/2020",
    toDate: "20/02/2021",
    truckSize: "5 ton",
    productType: "Home Supplies",
  },
  {
    id: 8,
    name: "James Bond",
    startingLocation: "Dhaka",
    endingLocation: "Chittagong",
    formDate: "11/2/2020",
    toDate: "20/02/2021",
    truckSize: "5 ton",
    productType: "Home Supplies",
  },
  {
    id: 9,
    name: "James Bond",
    startingLocation: "Dhaka",
    endingLocation: "Chittagong",
    formDate: "11/2/2020",
    toDate: "20/02/2021",
    truckSize: "5 ton",
    productType: "Home Supplies",
  },
  {
    id: 10,
    name: "James Bond",
    startingLocation: "Dhaka",
    endingLocation: "Chittagong",
    formDate: "11/2/2020",
    toDate: "20/02/2021",
    truckSize: "5 ton",
    productType: "Home Supplies",
  },
  {
    id: 11,
    name: "James Bond",
    startingLocation: "Dhaka",
    endingLocation: "Chittagong",
    formDate: "11/2/2020",
    toDate: "20/02/2021",
    truckSize: "5 ton",
    productType: "Home Supplies",
  },
  {
    id: 12,
    name: "James Bond",
    startingLocation: "Dhaka",
    endingLocation: "Chittagong",
    formDate: "11/2/2020",
    toDate: "20/02/2021",
    truckSize: "5 ton",
    productType: "Home Supplies",
  },
  {
    id: 13,
    name: "James Bond",
    startingLocation: "Dhaka",
    endingLocation: "Chittagong",
    formDate: "11/2/2020",
    toDate: "20/02/2021",
    truckSize: "5 ton",
    productType: "Home Supplies",
  },
  {
    id: 14,
    name: "James Bond",
    startingLocation: "Dhaka",
    endingLocation: "Chittagong",
    formDate: "11/2/2020",
    toDate: "20/02/2021",
    truckSize: "5 ton",
    productType: "Home Supplies",
  },
];

export class DailyData extends Component {
  render() {
    return (
      <>
        <DataTable
          title="Truck Daily Information"
          columns={columns}
          data={data}
          pagination
        />
      </>
    );
  }
}

export default DailyData;
