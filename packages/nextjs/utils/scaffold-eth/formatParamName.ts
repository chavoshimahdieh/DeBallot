/**
 * Utility function to format parameter names
 */
export const formatParamName = (name: string) => {
  if (!name) return "";
  // Remove underscores and split camel case
  const formattedName = name.replace(/_/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2");
  // Capitalize each word
  return formattedName.replace(/\b\w/g, char => char.toUpperCase());
};
