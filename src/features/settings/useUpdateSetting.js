import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  // edit cabin
  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,

    onSuccess: () => {
      toast.success("Setting successfully edited");
      queryClient.invalidateQueries(["settings"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateSetting };
}
