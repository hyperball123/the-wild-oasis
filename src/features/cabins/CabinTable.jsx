import { useSearchParams } from "react-router-dom";

import { useCabins } from "./usecabins";

import Spinner from "./../../ui/Spinner";
import CabinRow from "./CabinRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  
  if (isLoading) return <Spinner />;
  // 1> FILTER
  // using short circuiting for setting it to all when arriving to cabin for the first time
  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  console.log(filteredCabins);

  // // 2> SORT
  const SortByValue = searchParams.get("sortBy") || "startDate-asc";

  const [field, direction] = SortByValue.split("-");
  console.log(field, direction);

  const modifier = direction === "asc" ? 1 : -1;
  // const sortedCabins = filteredCabins.sort(
  //   (a, b) => (a[field] - b[field]) * modifier
  // );
  const sortedCabins = filteredCabins.sort((a, b) => {
    const aValue = a[field];
    const bValue = b[field];

    // Handle cases where aValue or bValue is undefined
    if (aValue === undefined || bValue === undefined) {
      return 0; // Return 0 to keep the order unchanged
    }

    return (aValue - bValue) * modifier;
  });

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 0.5fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          // data={cabins}
          // data={filteredCabins}
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
