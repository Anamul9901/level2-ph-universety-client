import { TResponseRedux } from "../../../types";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllSemesters: builder.query({
    //   query: (args) => {
    //     // console.log(args);
    //     const params = new URLSearchParams();

    //     // params.append("name", "Autumn");
    //     if (args) {
    //       args.forEach((item: TQueryParam) => {
    //         params.append(item?.name, item?.value as string);
    //       });
    //     }

    //     return {
    //       url: "/academic-semesters",
    //       method: "GET",
    //       // params: { name: "Autumn" },
    //       params: params,
    //     };
    //   },
    //   // transformResponse er maddome ecca moto data customiz kore return korte pare. je je data dekhate chai na segulu off kore dete pare
    //   transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
    //     // console.log("inside redux", response);
    //     // return 'jekonu kisu return';
    //     return {
    //       data: response.data,
    //       meta: response.meta,
    //     };
    //   },
    // }),

    addRegisterSemester: builder.mutation({
      query: (data) => ({
        url: "/semester-registrations/create-semester-registration",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddRegisterSemesterMutation } = courseManagementApi;
