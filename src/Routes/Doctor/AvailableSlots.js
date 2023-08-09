import React, { useEffect, useState } from "react";
import DoctorSidebar from "../../Components/DoctorSiderbar";
import { Button, Card, CardBody, CardHeader, Container } from "reactstrap";
import { format, addMinutes } from "date-fns";

const AvailableSlots = () => {
  const [timeSlots, setTimeSlots] = useState([]);
  const createTimeSlots = (fromTime, toTime) => {
    const referenceDate = new Date();
    const startTime = new Date(referenceDate);
    const endTime = new Date(referenceDate);

    const [fromHours, fromMinutes] = fromTime.split(":");
    const [toHours, toMinutes] = toTime.split(":");

    startTime.setHours(fromHours);
    startTime.setMinutes(fromMinutes);

    endTime.setHours(toHours);
    endTime.setMinutes(toMinutes);

    if (endTime < startTime) {
      endTime.setDate(endTime.getDate() + 1);
    }

    const arr = [];
    let currentTime = startTime;
    while (currentTime <= endTime) {
      arr.push(format(currentTime, "hh:mm a"));
      currentTime = addMinutes(currentTime, 30);
    }
    return arr;
  };
  useEffect(() => {
    setTimeSlots(createTimeSlots("08:00", "21:00"));
  }, []);

  const timeSlotContainer = {
    display: "flex",
    flexWrap: "wrap",
  };

  const timeSlot = {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '5px',
    minWidth: '100px', /* Adjust width as needed */
    textAlign: 'center',
    backgroundColor: '#D3D3D3',
    borderRadius: '10px'
  }
  return (
    <div style={{display:'flex'}}>
      <DoctorSidebar />
      <Container style={{marginTop:'3%'}}>
        <Card>
          <CardHeader style={{fontSize:'30px', backgroundColor:'#146ca4', color:'white'}}>Available Slots</CardHeader>
          <CardBody>
            <div style={timeSlotContainer}>
              {" "}
              {/* Use a container div */}
              {timeSlots.map((item, index) => (
                <div style={timeSlot} key={index}>
                  {item}
                  {timeSlots[index + 1] ? " - " + timeSlots[index + 1] : ""}
                </div>
              ))}
            </div>
            <div style={{marginTop:'5%'}}>
              <Button className="btn-success" style={{marginLeft:'30%', width:'100px'}}>Save</Button>
              <Button className="btn-primary" style={{marginLeft:'10%', width:'100px'}}>Edit</Button>
              <Button className="btn-danger" style={{marginLeft:'10%', width:'100px'}}>Delete</Button>
            </div>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default AvailableSlots;
