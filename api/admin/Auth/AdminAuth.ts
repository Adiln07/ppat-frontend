import AxiosConfig from "@/service/AxiosConfig";

export const adminAuthApi = {
  adminLogin: async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    try {
      const response = await AxiosConfig.post("/admin/login", {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
