import { useMutation } from "@tanstack/react-query";
import type { MessageInput } from "../backend.d";
import { useActor } from "./useActor";

export function useSubmitMessage() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (input: MessageInput) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitMessage(input);
    },
  });
}
