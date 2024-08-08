import {
  Button,
  Pagination,
  Space,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import { useState } from "react";
import { TQueryParam, TStudent } from "../../../types";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.api";
import { Link } from "react-router-dom";

export type TTableData = Pick<
  TStudent,
  "fullName" | "id" | "email" | "contactNo"
>;

const StudentData = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const {
    data: studentData,
    // isLoading,
    isFetching,
  } = useGetAllStudentsQuery([
    // { name: "limit", value: 2 },
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);

//   console.log(studentData);

  const metaData = studentData?.meta;
//   console.log(metaData);

  const tableData = studentData?.data?.map(
    ({ _id, fullName, id, email, contactNo }) => ({
      key: _id,
      fullName,
      id,
      email,
      contactNo,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Roll",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Contact No.",
      dataIndex: "contactNo",
      key: "contactNo",
    },
    {
      title: "Action",
      dataIndex: "key", // aikhane dataIndex hisebe ja debo tae neser render e parametar e pass hobe
      render: (id) => {
        // console.log("item--", id);
        return (
          <Space>
            <Link to={`/admin/student-data/${id}`}>
              <Button>Details</Button>
            </Link>
            <Button>Update</Button>
            {/* antd modal er maddome block handle kora */}
            <Button>Block</Button> 
          </Space>
        );
      },
      width: "1%",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra?.action === "filter") {
      const queryParams: TQueryParam[] = [];

      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );
      setParams(queryParams);
      // console.log(queryParams);
    }
  };

  // if(isLoading){
  //   return <p>Loading ...</p>
  // }

  return (
    <>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        pagination={false}
      />
      <Pagination
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.total}
      />
    </>
  );
};

export default StudentData;
