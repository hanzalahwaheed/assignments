const List = (props) => {
  const handleClick = () => {};

  return (
    <div>
      <h3>Todo List:</h3>
      {props.tasks.map((task, index) => (
        <div key={index} onClick={handleClick}>
          {task}
        </div>
      ))}
    </div>
  );
};

export default List;
