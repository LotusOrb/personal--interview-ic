import React, { useEffect, useState } from "react";
import BaseNavbar from "../../component/BaseNavbar/BaseNavbar";
import mockData from "../../mock/mockDataFilter.json";

const billdetails = mockData.data.response.billdetails;

export const FilterTestContainer = () => {
  const [data, setData] = useState<Array<any>>([]);
  const [filter, setFilter] = useState(100000);

  useEffect(() => {
    let nData = [];
    for (let index = 0; index < billdetails.length; index++) {
      let splited = billdetails[index].body[0].split(":");
      nData[index] = splited[splited.length - 1];
    }
    nData = nData.filter((val) => parseInt(val) >= filter);
    setData(nData);
  }, [filter]);

  return (
    <div className="container py-4">
      <div className="row g-4">
        <div className="col-12">
          Data yang difilter adalah billdetails dengan ketentuan filter denom &gt;={" "}
          <input value={filter} onChange={(ev) => setFilter(parseInt(ev.target.value))} type="number" step={10000} />
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5>Original Data</h5>
              <pre className="w-100">{JSON.stringify(mockData, null, 4)}</pre>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5>Parsed Data</h5>
              <pre>{JSON.stringify(data, null, 4)}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
