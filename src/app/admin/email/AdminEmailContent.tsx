"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/trpc/react";

const AdminEmailContent: React.FC = () => {
  const mutation = api.admin.massEmail.useMutation();

  return (
    <div>
      <Button
        onClick={() => {
          mutation.mutate({
            body: ["Hello, it is I", "Rumeet"],
            heading: "Testing Heading",
            preview: "This is test preview",
            subject: "This is test subject",
          });
        }}
      >
        Send email to Rumeet
      </Button>
    </div>
  );
};

export default AdminEmailContent;
