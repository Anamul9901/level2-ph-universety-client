/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import {
  useGetAcademicFacultiesQuery,
  useGetAllDepartmentQuery,
} from "../../../redux/features/admin/academicManagement.api";
import PHSelectWithWatch from "../../../components/form/PHSelectWithWatch";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import {
  useGetAllCoursesQuery,
  useGetAllRegisteredSemestersQuery,
} from "../../../redux/features/admin/courseManagement.api";
import { useGetAllFacultiesQuery } from "../../../redux/features/admin/userManagement.api";
import PHSelect from "../../../components/form/PHSelect";

const OfferCourse = () => {
  const [id, setId] = useState("");

  const { data: allSemesterRegistrations } =
    useGetAllRegisteredSemestersQuery(undefined);
  const { data: academicFacultyData } = useGetAcademicFacultiesQuery(undefined);
  const { data: academicDepartmentData } = useGetAllDepartmentQuery(undefined);
  const { data: allCourseData } = useGetAllCoursesQuery(undefined);
  const { data: allFacultyData } = useGetAllFacultiesQuery(undefined);

  const semesterRegistrationOptions = allSemesterRegistrations?.data?.map(
    (item: any) => ({
      value: item._id,
      label: `${item.academicSemester.name} ${item.academicSemester.year}`,
    })
  );

  const academicFacultyOptions = academicFacultyData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const academicDepartmentOptions = academicDepartmentData?.data?.map(
    (item: any) => ({
      value: item._id,
      label: item.name,
    })
  );

  const allCourseOptions = allCourseData?.data?.map((item: any) => ({
    value: item._id,
    label: item.title,
  }));

  const allFacultyOptions = allFacultyData?.data?.map((item: any) => ({
    value: item._id,
    label: item.fullName,
  }));
  console.log(allFacultyOptions);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <Flex justify="center" align="center" style={{ height: "100vh" }}>
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect
            label="Semester Registration"
            name="semesterRegistration"
            options={semesterRegistrationOptions}
          />

          <PHSelect
            label="Academic Faculty"
            name="academicFaculty"
            options={academicFacultyOptions}
          />

          <PHSelect
            label="Academic Department"
            name="academicDepartment"
            options={academicDepartmentOptions}
          />

          <PHSelectWithWatch
            onValueChange={setId}
            label="Courses"
            name="course"
            options={allCourseOptions}
          />

          <PHSelect
            disabled={!id}
            label="Facultys"
            name="faculty"
            options={allFacultyOptions}
          />
          <PHInput type="number" name="section" label="Section" />
          <PHInput type="number" name="maxCapacity" label="Max Capacity" />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default OfferCourse;
