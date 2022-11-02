import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListCars } from "../../action/CarsAction";
import Nav from "../navbar";

function ListCars() {
  const { getListCarsResult, getListCarsLoading, getListCarsError } =
    useSelector((state) => state.CarsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    //panggil action getListCars
    console.log("1. use effect component did mount");
    dispatch(getListCars());
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <br />
      <br />
      <br />
      <div id="cars-container" class="container">
        {getListCarsResult ? (
          getListCarsResult.map((car) => {
            return (
              <div className="card" style={{ width: "18rem" }} key={car.id}>
                <img src={car.image} className="card-img-top" alt="" />
                <div className="card-body">
                  <p>
                    {car.manufacture}/{car.type}
                  </p>
                  <p className="bold">Rp {car.rentPerDay}/hari</p>
                  <p>{car.description}</p>
                  <p>
                    <img src="./images/fi_users.png" />
                    {car.capacity} orang
                  </p>
                  <p>
                    <img src="./images/fi_settings.png" alt="" />
                    {car.transmission}
                  </p>
                  <p>
                    <img src="./images/fi_calendar.png" alt="" />
                    Tahun {car.year}
                  </p>
                </div>
                <button className="pilihMobil">Pilih Mobil</button>

                <p>{car.plate}</p>
              </div>
            );
          })
        ) : getListCarsLoading ? (
          <p>Loading</p>
        ) : (
          <p>{getListCarsError ? getListCarsError : "data kosong"}</p>
        )}
      </div>
    </div>
  );
}

export default ListCars;
