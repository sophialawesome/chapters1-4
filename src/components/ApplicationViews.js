import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import EmployeeList from "./employees/EmployeeList";
import LocationList from "./location/LocationList";
import OwnerList from "./owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail";
import EmployeeDetail from "./employees/EmployeeDetail";
import LocationDetail from "./location/LocationDetail";
import OwnerDetail from "./owner/OwnerDetail";
import AnimalForm from "./animal/AnimalForm";
import EmployeeForm from "./employees/EmployeeForm";
import LocationForm from "./location/LocationForm";
import OwnerForm from "./owner/OwnerForm";
import AnimalEditForm from "./animal/AnimalEditForm";
import EmployeeEditForm from "./employees/EmployeeEditForm";
import LocationEditForm from "./location/LocationEditForm";

const isAuthenticated = () => sessionStorage.getItem("") !== null;

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route path="/login" component={Login} />
      <Route
        exact
        path="/"
        render={props => {
          return <Home {...props} />;
        }}
      />

      <Route
        exact
        path="/animals"
        render={props => {
          if (isAuthenticated()) {
            return <AnimalList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/employees"
        render={props => {
          return <EmployeeList {...props} />;
        }}
      />
      <Route
        exact
        path="/locations"
        render={props => {
          return <LocationList {...props} />;
        }}
      />

      {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}

      <Route
        exact
        path="/employees/:employeeId(\d+)"
        render={props => {
          return (
            <EmployeeDetail
              employeeId={parseInt(props.match.params.employeeId)}
            />
          );
        }}
      />

      <Route
        exact
        path="/locations/:locationId(\d+)"
        render={props => {
          return (
            <LocationDetail
              locationId={parseInt(props.match.params.locationId)}
            />
          );
        }}
      />

      <Route
        exact
        path="/owners"
        render={props => {
          return <OwnerList {...props} />;
        }}
      />
      <Route
        exact
        path="/owners/:ownerId(\d+)"
        render={props => {
          return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} />;
        }}
      />
      <Route
        exact
        path="/animals/:animalId(\d+)"
        render={props => {
          if (isAuthenticated()) {
            return (
              <AnimalDetail
                animalId={parseInt(props.match.params.animalId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/animals/new"
        render={props => {
          return <AnimalForm {...props} />;
        }}
      />
      <Route
        path="/employees/new"
        render={props => {
          return <EmployeeForm {...props} />;
        }}
      />
      <Route
        path="/locations/new"
        render={props => {
          return <LocationForm {...props} />;
        }}
      />
      <Route
        path="/owners/new"
        render={props => {
          return <OwnerForm {...props} />;
        }}
      />
      <Route
        path="/animals/:animalId(\d+)/edit"
        render={props => {
          if (isAuthenticated()) {
            return <AnimalEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/employees/:employeeId(\d+)/edit"
        render={props => {
          if (isAuthenticated()) {
            return <EmployeeEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/employees/:employeeId(\d+)"
        render={props => {
          if (isAuthenticated()) {
            return (
              <EmployeeDetail
                employeeId={parseInt(props.match.params.employeeId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/locations/:locationId(\d+)/edit"
        render={props => {
          if (isAuthenticated()) {
            return <LocationEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
