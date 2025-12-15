import { baseApi } from "../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerApi: builder.mutation({
      query: (registerInfo) => ({
        url: `/register`,
        method: "POST",
        body: registerInfo,
      }),
      invalidatesTags: ["auth"],
    }),
    loginApi: builder.mutation({
      query: (loginInfo) => ({
        url: `/login`,
        method: "POST",
        body: loginInfo,
      }),
      invalidatesTags: ["auth"],
    }),
    emailVerifyApi: builder.mutation({
      query: (emailVerifyInfo) => ({
        url: `/email/verify`,
        method: "POST",
        body: emailVerifyInfo,
      }),
      invalidatesTags: ["auth"],
    }),
    resendVerificationCodeApi: builder.mutation({
      query: (resendVerificationInfo) => ({
        url: `/resend/verification-code`,
        method: "POST",
        body: resendVerificationInfo,
      }),
      invalidatesTags: ["auth"],
    }),

    // forgotPasswordApi: builder.mutation({
    //   query: (forgotPasswordInfo) => ({
    //     url: `/auth/forgot-password`,
    //     method: "POST",
    //     body: forgotPasswordInfo,
    //   }),
    //   invalidatesTags: ["auth"],
    // }),

    // changePasswordApi: builder.mutation({
    //   query: (changePasswordInfo) => ({
    //     url: `/change-password`,
    //     method: "POST",
    //     body: changePasswordInfo,
    //   }),
    //   invalidatesTags: ["auth"],
    // }),
  }),
  overrideExisting: true,
});

export const {
useRegisterApiMutation,
useLoginApiMutation,
useEmailVerifyApiMutation,
useResendVerificationCodeApiMutation,
} = authApi;
