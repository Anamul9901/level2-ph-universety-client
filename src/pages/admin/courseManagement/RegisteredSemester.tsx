import { Button, Dropdown, Table, TableColumnsType, Tag } from "antd";
import { useGetAllRegisteredSemestersQuery } from "../../../redux/features/admin/courseManagement.api";
import moment from "moment";
import { TSemester } from "../../../types";

export type TTableData = Pick<TSemester, "startDate" | "endDate" | "status">;

const items = [
  {
    label: "Upcoming",
    key: "UPCOMING,",
  },
  {
    label: "Ongoing",
    key: "ONGOING,",
  },
  {
    label: "Ended",
    key: "ENDEN,",
  },
];

const RegisteredSemester = () => {
  // const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);

  const { data: semesterDate, isFetching } =
    useGetAllRegisteredSemestersQuery(undefined);

  const tableData = semesterDate?.data?.map(
    ({ _id, academicSemester, status, startDate, endDate }) => ({
      key: _id,
      name: `${academicSemester.name} ${academicSemester.year}`,
      status,
      startDate: moment(new Date(startDate)).format("MMMM"),
      endDate: moment(new Date(endDate)).format("MMMM"),
    })
  );

  const handleStatusDropdown = (data: React.MouseEvent<HTMLButtonElement>) => {
    console.log(data);
  };

  const menuProps = {
    items,
    onClick: handleStatusDropdown,
  };

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (item) => {
        let color;
        if (item === "UPCOMING") {
          color = "blue";
        }
        if (item === "ONGOING") {
          color = "green";
        }
        if (item === "ENDED") {
          color = "red";
        }
        return <Tag color={color}>{item}</Tag>;
      },
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
    },
    {
      title: "Action",
      dataIndex: "x",
      render: () => {
        return (
          <div>
            <Dropdown menu={menuProps}>
              <Button>Update</Button>
            </Dropdown>
          </div>
        );
      },
    },
  ];

  // const onChange: TableProps<TTableData>["onChange"] = (
  //   _pagination,
  //   filters,
  //   _sorter,
  //   extra
  // ) => {
  //   if (extra?.action === "filter") {
  //     const queryParams: TQueryParam[] = [];

  //     setParams(queryParams);
  //     // console.log(queryParams);
  //   }
  // };

  // if(isLoading){
  //   return <p>Loading ...</p>
  // }

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      // onChange={onChange}
    />
  );
};

export default RegisteredSemester;
