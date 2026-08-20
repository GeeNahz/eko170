export type ActionResponse<T> =
  | { status: "success"; data: T }
  | {
      status: "error";
      fieldErrors?: Record<string, string>;
      values?: Record<string, string>;
      message?: string;
    };
