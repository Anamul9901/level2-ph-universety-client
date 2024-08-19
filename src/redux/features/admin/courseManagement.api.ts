import { TQueryParam, TResponseRedux, TSemester } from "../../../types";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRegisteredSemesters: builder.query({
      query: (args) => {
        // console.log(args);
        const params = new URLSearchParams();

        // params.append("name", "Autumn");
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item?.name, item?.value as string);
          });
        }

        return {
          url: "/semester-registrations",
          method: "GET",
          // params: { name: "Autumn" },
          params: params,
        };
      },
      // transformResponse er maddome ecca moto data customiz kore return korte pare. je je data dekhate chai na segulu off kore dete pare
      transformResponse: (response: TResponseRedux<TSemester[]>) => {
        // console.log("inside redux", response);
        // return 'jekonu kisu return';
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    addRegisterSemester: builder.mutation({
      query: (data) => ({
        url: "/semester-registrations/create-semester-registration",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllRegisteredSemestersQuery,
  useAddRegisterSemesterMutation,
} = courseManagementApi;
