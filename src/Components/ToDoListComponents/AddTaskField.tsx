import DoubleChevronRight from "../../assets/Icons/DoubleChevronRight";

const AddTaskField = () => {
  return (
    <div className="flex items-center pr-2 gap-2 overflow-hidden -text--Primary-50 -bg--Neutral-600 bg-opacity-75 rounded-md hover:-bg--Primary-900 w-full">
      <input
        type="search"
        title="search"
        placeholder="Add a Task..."
        className="p-4 -bg--Primary-950 bg-opacity-0 -placeholder--Primary-50 rounded focus:outline-none focus:-text--Primary-50 hover:-placeholder--Primary-50 w-full"
      />
      <DoubleChevronRight size={24} color="#F4F6FB" />
    </div>
  );
};

export default AddTaskField;
