export default function useCurrentPage({ slug }) {
  console.log("in composable function");
  return {
    slug,
    msg: "Hello from composable function",
  };
}
