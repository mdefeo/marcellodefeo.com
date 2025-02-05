// /src/config/constants/messages.ts
export const ERROR_MESSAGES = {
  NETWORK_ERROR: "Unable to connect. Please check your network.",
  UNAUTHORIZED: "You are not authorized to perform this action.",
  FORBIDDEN: "Access is forbidden. Please contact support.",
  NOT_FOUND: "The requested resource could not be found.",
  BAD_REQUEST: "Invalid request. Please check your input and try again.",
  TIMEOUT: "The request timed out. Please try again.",
  CONFLICT: "A conflict occurred. The resource might already exist.",
  SERVER_ERROR: "A server error occurred. Please try again later.",
  UNKNOWN_ERROR: "An unknown error occurred. Please try again.",
  VALIDATION_ERROR: "Some fields are invalid. Please review and try again.",
  TOO_MANY_REQUESTS: "Too many requests. Please try again later.",
  MAINTENANCE_MODE:
    "The service is currently down for maintenance. Please try again later.",
};

export const SUCCESS_MESSAGES = {
  DATA_SAVED: "Your changes have been saved successfully.",
  OPERATION_COMPLETED: "The operation completed successfully.",
  ITEM_DELETED: "The item was deleted successfully.",
  ITEM_CREATED: "The item was created successfully.",
  ITEM_UPDATED: "The item was updated successfully.",
  EMAIL_SENT: "An email has been sent to your address.",
  PASSWORD_CHANGED: "Your password has been changed successfully.",
  LOGGED_IN: "You have successfully logged in.",
  LOGGED_OUT: "You have successfully logged out.",
};

export const INFO_MESSAGES = {
  LOADING: "Loading, please wait...",
  NO_RESULTS: "No results found.",
  SESSION_EXPIRED: "Your session has expired. Please log in again.",
  RECONNECTING: "Attempting to reconnect...",
  SAVING_CHANGES: "Saving your changes...",
  FETCHING_DATA: "Fetching data...",
};

export const WARNING_MESSAGES = {
  UNSAVED_CHANGES: "You have unsaved changes. Do you want to leave without saving?",
  DELETE_CONFIRMATION: "Are you sure you want to delete this item?",
  PASSWORD_WEAK: "The password entered is too weak. Consider a stronger password.",
  DEPRECATED_FEATURE: "This feature is deprecated and may be removed in future versions.",
};

export const MESSAGES = {
  ERROR: ERROR_MESSAGES,
  SUCCESS: SUCCESS_MESSAGES,
  INFO: INFO_MESSAGES,
  WARNING: WARNING_MESSAGES,
};