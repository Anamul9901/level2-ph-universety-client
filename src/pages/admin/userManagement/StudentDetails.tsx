import { useParams } from "react-router-dom";

const StudentDetails = () => {
    const param = useParams();
    console.log(param);
    return (
        <div>
            <h1>student details of {param?.studentId}</h1>
        </div>
    );
};

export default StudentDetails;