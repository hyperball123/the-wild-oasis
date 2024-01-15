import { updateCurrentUser } from "../../services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  //update User
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,

    onSuccess: ({ user }) => {
      toast.success("User account successfully updated");
      queryClient.setQueryData(["user"], user);

      // queryClient.invalidateQueries(["user"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
